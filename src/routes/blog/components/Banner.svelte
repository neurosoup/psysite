<script>
  import { query, getClient } from "svelte-apollo";
  import { BLOG } from "../queries";
  import LoadingDots from "../../../components/LoadingDots.svelte";

  const client = getClient();
  const blog = query(client, { query: BLOG });
</script>

<style>
  h1 {
    white-space: nowrap;
  }
  .header {
    text-align: center;
    max-width: 75%;
    margin-left: auto;
    margin-right: auto;
  }
  .justified {
    text-align: justify;
  }
</style>

{#await $blog then result}
  <div class="header">
    <h1>{result.data.allBlog_banners.edges[0].node.title[0].text}</h1>
    <div class="justified">
      <p>{result.data.allBlog_banners.edges[0].node.intro[0].text}</p>
    </div>
  </div>
{/await}
