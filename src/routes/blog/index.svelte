<script context="module">
  import gql from "graphql-tag";
  import { client } from "../../apollo";

  const POSTS = gql`
    query posts {
      allPosts {
        edges {
          node {
            _meta {
              uid
            }
            title
            intro
            content
          }
        }
      }
    }
  `;

  export async function preload() {
    return {
      cache: await client.query({
        query: POSTS
      })
    };
  }
</script>

<script>
  import { restore, query, getClient } from "svelte-apollo";

  const apolloClient = getClient();

  export let cache;
  restore(apolloClient, POSTS, cache.data);

  const postsQuery = query(apolloClient, { query: POSTS });
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

{#await $postsQuery}
  ...
{:then result}
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
