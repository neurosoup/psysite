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
  import LoadingDots from "../../components/LoadingDots.svelte";
  import Banner from "./components/Banner.svelte";

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
    margin: 30px 60px 0 60px;
  }

  /* https://w3bits.com/labs/flexbox-masonry/2/  */
  .masonry {
    display: flex;
    width: 100%;
    flex-flow: column wrap;
    margin-left: -16px;
    max-height: 1069px;
  }

  .masonry-brick {
    overflow: hidden;
    margin: 45px 8px 8px 8px;
    position: relative;
    width: 100%;
    width: 33.3333%;
  }

  @media only screen and (max-width: 767px) {
    .outer {
      margin: 10px 20px 0 20px;
    }
    .masonry {
      margin-left: -8px;
      max-height: none;
    }
    .masonry-brick {
      width: 100%;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .masonry {
      max-height: 1595px;
    }
    .masonry-brick {
      width: 50%;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1223px) {
    .masonry {
      margin-left: -23px;
      max-height: 953px;
    }
    .masonry-brick {
      width: 33.3333%;
    }
  }

  @media only screen and (min-width: 1224px) and (max-width: 1439px) {
    .masonry {
      margin-left: -23px;
      max-height: 1054px;
    }
    .masonry-brick {
      width: 33.3333%;
    }
  }

  @media only screen and (min-width: 1440px) and (max-width: 1766) {
    .masonry {
      margin-left: -24px;
      max-height: 1169px;
    }
    .masonry-brick {
      width: 33.3333%;
    }
  }

  @media only screen and (min-width: 1440px) {
    .outer {
      margin: 40px 120px 0 120px;
    }
    .masonry {
      margin-left: -50px;
    }
    .masonry-brick {
      margin: 45px 16px 16px 16px;
      width: 33.3333%;
    }
  }

  @media only screen and (min-width: 1766px) {
    .masonry {
      max-height: 1269px;
    }
  }

  .masonry-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    /* filter: brightness(50%); */
  }
</style>

{#await $blog then result}
  <Banner />
  <div class="outer">
    <div class="masonry">
      {#each result.data.allPosts.edges as post, index}
        <figure class="masonry-brick">
          <a rel="prefetch" href={`blog/${post.node._meta.uid}`}>
            <img
              class="masonry-img"
              src={post.node.featured_image.url}
              alt={post.node.featured_image.alt} />
            <h2>{post.node.title[0].text}</h2>
          </a>
          <div class="intro">{post.node.intro[0].text}</div>
        </figure>
      {/each}
    </div>

  </div>
{/await}
