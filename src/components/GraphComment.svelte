<script>
  import { onMount } from "svelte";
  import { stores } from "@sapper/app";

  export let pageTitle;

  const { page } = stores();
  const { host, path, params, query } = $page;
  const { slug } = $page.params;

  onMount(() => {
    window.gc_params = {
      page_title: pageTitle,
      graphcomment_id: "psysite",
      identifier: slug,
      canonical_url: `${host}${path}`,
      disable_ads: true,
      fixed_header_height: 0,
      overlay: false
    };
  });
</script>

<svelte:head>
  <script
    type="text/javascript"
    async="true"
    src={`https://graphcomment.com/js/integration.js?${Math.round(Math.random() * 1e8)}`}>

  </script>
</svelte:head>

<div id="graphcomment" />
