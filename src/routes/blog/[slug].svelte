<script context="module">
  import gql from "graphql-tag";
  import { client } from "../../apollo";

  const POST = gql`
    query posts($slug: String!) {
      allPosts(uid: $slug) {
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

  export async function preload({ params }) {
    return {
      slug: params.slug,
      cache: await client.query({
        query: POST,
        variables: { slug: params.slug }
      })
    };
  }
</script>

<script>
  import { restore, query, getClient } from "svelte-apollo";

  export let cache;
  export let slug;

  const apolloClient = getClient();
  restore(apolloClient, POST, cache.data);

  const postQuery = query(apolloClient, {
    query: POST,
    variables: { slug }
  });
</script>

<style>

</style>

<div class="content">
  {#await $postQuery}
    <h1>...</h1>
  {:then result}
    <h1>{result.data.allPosts.edges[0].node.title[0].text}</h1>
  {:catch error}
    <h1>{error}</h1>
  {/await}
</div>
