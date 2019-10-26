<script>
  import TextDivider from "../../../components/TextDivider.svelte";

  export let title = "";
  export let intro = "";
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

  .header h1 {
    margin-bottom: 30px;
    margin-top: 90px;
  }

  .justified {
    margin-top: 30px;
    text-align: justify;
  }
</style>

<div class="header">
  <h1>{title}</h1>
  {#if intro.length}
    <TextDivider class="divider" width="30%" fill="#cac8c8" />
    <div class="justified">
      <p>{intro}</p>
    </div>
  {/if}
</div>
