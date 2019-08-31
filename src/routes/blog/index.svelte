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
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

{#await $blog}
  <LoadingDots>
    <h1>Articles</h1>
  </LoadingDots>
{:then result}
  <Banner />
  <ul>
    {#each result.data.allPosts.edges as post}
      <li>
        <a rel="prefetch" href={`blog/${post.node._meta.uid}`}>
          <h1>{post.node.title[0].text}</h1>
        </a>
        <h2>{post.node.intro[0].text}</h2>
      </li>
    {/each}
  </ul>
{:catch error}
  {error}
{/await}
