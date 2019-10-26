<script context="module">
  import { client } from "../../apollo";
  import { POSTS, BANNERS } from "./queries";

  export async function preload() {
    return {
      bannersCache: await client.query({
        query: BANNERS
      }),
      postsCache: await client.query({
        query: POSTS
      })
    };
  }
</script>

<script>
  import { onDestroy } from "svelte";
  import { restore, query, getClient, subscribe } from "svelte-apollo";
  import moment from "moment";
  import LoadingDots from "../../components/LoadingDots.svelte";
  import Banner from "./components/Banner.svelte";
  import PostList from "./components/PostList.svelte";

  let loadMoreThreshold = 5;
  let scrollY;
  let innerHeight;

  let allPosts = [];
  let tags = [];
  let first = 6;
  let after;

  const apolloClient = getClient();
  export let postsCache;
  export let bannersCache;
  restore(apolloClient, POSTS, postsCache.data);
  restore(apolloClient, BANNERS, bannersCache.data);

  const posts = query(apolloClient, {
    query: POSTS,
    variables: { first }
  });

  const banners = query(apolloClient, { query: BANNERS });

  const loadMore = () => {
    console.log("LOAD MORE!");
    posts.refetch({ tags, first, after });
  };

  const pushNewPosts = newPosts => {
    allPosts = [...allPosts, ...newPosts];
  };

  $: posts.refetch({ tags, first });

  $: $posts.then(result => {
    if (!result.loading) {
      if (result.data.allPosts.pageInfo.hasNextPage) {
        after = result.data.allPosts.pageInfo.endCursor;
      }
      pushNewPosts(result.data.allPosts.edges);
    }
  });
</script>

<style>
  .sub-header {
    border-bottom: 1px solid #ececec;
    padding-bottom: 10px;
  }
</style>

<div class="sub-header">
  {#if tags.length}
    <Banner title={`Catégorie : ${tags[0]}`} intro="" />
  {:else}
    {#await $banners then result}
      <Banner
        title={result.data.allBlog_banners.edges[0].node.title[0].text}
        intro={result.data.allBlog_banners.edges[0].node.intro[0].text} />
    {/await}
  {/if}
</div>
<PostList posts={allPosts} bind:tags on:bottom={loadMore} />
