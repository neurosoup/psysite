<script context="module">
  import gql from "graphql-tag";
  import { client } from "../../apollo";
  import { POST_BY_SLUG } from "./queries";

  export async function preload({ params }) {
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
  import { restore, query, getClient } from "svelte-apollo";

  export let cache;
  export let slug;

  const apolloClient = getClient();
  restore(apolloClient, POST_BY_SLUG, cache.data);

  const postQuery = query(apolloClient, {
    query: POST_BY_SLUG,
    variables: { slug }
  });
</script>

<style>

</style>

<div class="content">
  {#await $postQuery}
    <h1>...</h1>
  {:then result}
    <h1>{result.data.post.title[0].text}</h1>
  {:catch error}
    <h1>{error}</h1>
  {/await}
</div>
