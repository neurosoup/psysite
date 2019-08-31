<script>
  import { query, getClient } from "svelte-apollo";
  import { BLOG } from "../queries";
  import LoadingDots from "../../../components/LoadingDots.svelte";

  const client = getClient();
  const blog = query(client, { query: BLOG });
</script>

<style>

</style>

{#await $blog}
  <LoadingDots>
    <h1>Blog</h1>
  </LoadingDots>
{:then result}
  <h1>{result.data.allBlog_banners.edges[0].node.title[0].text}</h1>
  <p>{result.data.allBlog_banners.edges[0].node.introduction[0].text}</p>
{:catch error}
  <h1>{error}</h1>
{/await}
