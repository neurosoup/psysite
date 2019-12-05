<script context="module">
  import { initClient } from "../../apollo";
  import { POSTS, BANNERS } from "./queries";

  const pageSize = 3;

  export async function preload() {
    const client = initClient();
    const posts = await client.query({
      query: POSTS,
      variables: { first: pageSize }
    });
    return {
      cache: {
        banners: await client.query({
          query: BANNERS
        }),
        posts: posts,
        postsCursor: posts.data.allPosts.pageInfo.endCursor
      }
    };
  }
</script>

<script>
  import { onDestroy, onMount } from "svelte";
  import { restore, query, setClient, subscribe } from "svelte-apollo";
  import moment from "moment";
  import LoadingDots from "../../components/LoadingDots.svelte";
  import Banner from "./components/Banner.svelte";
  import PostList from "./components/PostList.svelte";

  let allPosts = [];
  let tags = [];
  let first = pageSize;
  let after;
  let loadingMore = true;
  let hasNextPage = true;

  export let cache;

  const pushNewPosts = newPosts => {
    const freshPosts = newPosts.filter(
      newPost =>
        !allPosts.some(post => post.node._meta.uid === newPost.node._meta.uid)
    );
    allPosts = [...allPosts, ...freshPosts];
  };

  const client = initClient();
  restore(client, POSTS, cache.posts.data);
  restore(client, BANNERS, cache.banners.data);

  if (cache) {
    pushNewPosts(cache.posts.data.allPosts.edges);
    after = cache.postsCursor;
  }

  const posts = query(client, {
    query: POSTS,
    variables: { first }
  });
  const banners = query(client, { query: BANNERS });

  const loadMore = () => {
    if (hasNextPage) {
      loadingMore = true;
      posts.refetch({ first, after });
    }
  };

  const resetTags = () => {
    tags = [];
  };

  $: Promise.resolve($posts).then(result => {
    if (!result.loading) {
      hasNextPage = result.data.allPosts.pageInfo.hasNextPage;
      if (hasNextPage) {
        after = result.data.allPosts.pageInfo.endCursor;
      }
      pushNewPosts(result.data.allPosts.edges);
      loadingMore = false;
    }
  });
</script>

<style>
  .sub-header {
    border-bottom: 1px solid #ececec;
    padding-bottom: 10px;
  }

  .center {
    width: 100%;
    text-align: center;
    color: var(--blue);
  }
</style>

<div class="sub-header">

  {#if tags.length}
    <Banner
      closeable
      title={`Catégorie : ${tags[0]}`}
      intro=""
      on:click={resetTags} />
  {:else}
    {#await $banners then result}
      <Banner
        title={result.data.allBlog_banners.edges[0].node.title[0].text}
        intro={result.data.allBlog_banners.edges[0].node.intro[0].text} />
    {/await}
  {/if}

</div>
<PostList posts={allPosts} bind:selectedTags={tags} on:bottom={loadMore} />
{#if loadingMore}
  <h1 class="center">
    <LoadingDots />
  </h1>
{/if}
