<script>
  import { onMount } from "svelte";
  import { stores } from "@sapper/app";

  export let pageTitle;
  export let commentTitle;
  let graphCommentReady = false;

  const { page } = stores();
  const { host, path, params, query } = $page;
  const { slug } = $page.params;

  const graphCommentScriptLoaded = () => {
    graphCommentReady = true;
  };

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
    src={`https://graphcomment.com/js/integration.js?${Math.round(Math.random() * 1e8)}`}
    on:load={graphCommentScriptLoaded}>

  </script>
</svelte:head>

{#if graphCommentReady}
  <h2>{commentTitle}</h2>
  <p>Votre adresse de messagerie ne sera pas publiée</p>
  <div id="graphcomment" />
{/if}
