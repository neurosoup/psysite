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
  import { restore, query, setClient } from "svelte-apollo";

  export let cache;
  export let slug;

  const client = initClient();
  restore(client, POST_BY_SLUG, cache.data);

  const postQuery = query(client, {
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
