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
    <li>
      <a rel="prefetch" href="blog/hello-world">Hello world</a>
    </li>
  </ul>
{:catch error}
  {error}
{/await}
