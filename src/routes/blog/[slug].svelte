<script context="module">
  import gql from "graphql-tag";
  import { initClient } from "../../apollo";
  import { POST_BY_SLUG } from "./queries";

  export async function preload({ params }) {
    const client = initClient();
    return {
      slug: params.slug,
      cache: await client.query({
        query: POST_BY_SLUG,
        variables: { slug: params.slug }
      })
    };
  }
</script>

<script>
  import Disqus from "../../components/Disqus.svelte";
  import GraphComment from "../../components/GraphComment.svelte";
  import { restore, query } from "svelte-apollo";

  import moment from "moment";
  import "moment/locale/fr";
  moment.locale("fr");

  import PrismicDOM from "prismic-dom";

  import TagLink from "./components/TagLink.svelte";

  export let cache;
  export let slug;

  const client = initClient();
  restore(client, POST_BY_SLUG, cache.data);

  const postQuery = query(client, {
    query: POST_BY_SLUG,
    variables: { slug }
  });

  const linkResolver = function(doc) {
    // Pretty URLs for known types
    if (doc.type === "blog") return "/post/" + doc.uid;
    if (doc.type === "page") return "/" + doc.uid;
    // Fallback for other types, in case new custom types get created
    return "/doc/" + doc.id;
  };

  const Elements = PrismicDOM.RichText.Elements;
  const htmlSerializer = function(type, element, content, children) {
    switch (type) {
      // Don't wrap images in a <p> tag
      case Elements.image:
        return `<img style="align-self: center;" src="${element.url}" alt="${element.alt}"/>`;

      // Return null to stick with the default behavior for all other elements
      default:
        return null;
    }
  };
</script>

<style>
  header {
    text-align: center;
  }

  nav {
    width: 100%;
    border-top: 1px solid #ececec;
    border-bottom: 1px solid #ececec;
    padding: 10px 0 10px 10px;
    margin: 10px 0 10px 20px;
  }

  img.fit {
    object-fit: cover;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
  }

  article {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    padding: 0 20px;
    max-width: 768px;
  }

  .comments {
    padding: 20px 20px;
  }

  @media only screen and (min-width: 768px) {
    .comments {
      padding: 20px 20%;
    }
  }
</style>

<div class="content">
  {#await $postQuery then result}
    <header>
      <h1>{result.data.post.title[0].text}</h1>
    </header>
    <nav>
      <h6>
        {moment(result.data.post._meta.lastPublicationDate).format('LL')}
        <!-- <TagLink tags={result.data.post._meta.tags} /> -->
      </h6>
    </nav>
    <article>
      <img
        class="fit"
        src={result.data.post.featured_image.url}
        alt={result.data.post.featured_image.alt} />
      {#each result.data.post.intro as intro}
        <p>{intro.text}</p>
      {/each}
      {@html PrismicDOM.RichText.asHtml(result.data.post.content, linkResolver, htmlSerializer)}
    </article>
    <div class="comments">
      <!-- <Disqus /> -->
      <GraphComment
        pageTitle={result.data.post.title[0].text}
        commentTitle="Vos réactions à propos de cet article" />
    </div>

  {/await}
</div>
