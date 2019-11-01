<script>
  import { createEventDispatcher } from "svelte";
  import TextDivider from "../../../components/TextDivider.svelte";

  const dispatch = createEventDispatcher();

  export let title = "";
  export let intro = "";
  export let closeable;
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

  .breadcrumb {
    cursor: pointer;
  }

  .breadcrumb:hover {
    text-decoration: underline;
    text-underline-position: under;
  }
</style>

<div class="header">
  <h1>
    <span class:breadcrumb={closeable} on:click={() => dispatch('click')}>
      {title}
    </span>
  </h1>
  {#if intro.length}
    <TextDivider class="divider" width="30%" fill="#cac8c8" />
    <div class="justified">
      <p>{intro}</p>
    </div>
  {/if}
</div>
