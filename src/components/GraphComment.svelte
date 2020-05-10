<script>
  import { onMount } from "svelte";

  onMount(() => {
    window.gc_params = {
      graphcomment_id: "psysite",
      fixed_header_height: 0
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
