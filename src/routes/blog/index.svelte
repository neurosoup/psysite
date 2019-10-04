<script context="module">
  import { client } from "../../apollo";
  import { BLOG } from "./queries";

  export async function preload() {
    return {
      cache: await client.query({
        query: BLOG
      })
    };
  }
</script>

<script>
  import { restore, query, getClient } from "svelte-apollo";
  import moment from "moment";
  import LoadingDots from "../../components/LoadingDots.svelte";
  import Banner from "./components/Banner.svelte";

  moment.locale("fr");

  const apolloClient = getClient();
  export let cache;
  restore(apolloClient, BLOG, cache.data);
  const blog = query(apolloClient, { query: BLOG });
</script>

<style>
  a {
    text-decoration: none;
  }

  img {
    vertical-align: middle;
    max-width: 100%;
  }

  .outer {
    margin: 10px 30px 0 30px;
  }

  .masonry-layout {
    column-count: 1;
    column-gap: 0;
  }

  .masonry-layout-panel {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  .masonry-layout-panel-content {
    padding: 10px;
  }

  @media (min-width: 768px) {
    .outer {
      margin: 10px 60px 0 60px;
    }
    .masonry-layout {
      column-count: 2;
    }
    .masonry-layout-panel {
      margin-inline-start: 10px;
      margin-inline-end: 10px;
    }
  }

  @media (min-width: 1200px) {
    .masonry-layout {
      column-count: 3;
    }
  }

  @media (min-width: 2560px) {
    .outer {
      margin: 10px 260px 0 260px;
    }
  }

  .masonry-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .sub-header {
    border-bottom: 1px solid #ececec;
    padding-bottom: 10px;
  }

  .ago {
    font-size: calc(8px + 0.35vw);
    padding-bottom: 12px;
    text-transform: uppercase;
    color: #9e9e9e;
  }
</style>

{#await $blog then result}
  <div class="sub-header">
    <Banner />
  </div>
  <div class="outer">
    <div class="masonry-layout">
      {#each result.data.allPosts.edges as post, index}
        <div class="masonry-layout-panel">
          <div class="masonry-layout-panel-content">
            <a rel="prefetch" href={`blog/${post.node._meta.uid}`}>
              <img
                class="masonry-img"
                src={post.node.featured_image.url}
                alt={post.node.featured_image.alt} />
              <h2>{post.node.title[0].text}</h2>
              <div class="ago">
                {moment(post.node._meta.lastPublicationDate).fromNow()}
              </div>
            </a>
            <div class="intro">{post.node.intro[0].text}</div>
          </div>
        </div>
      {/each}
    </div>

  </div>
{/await}
