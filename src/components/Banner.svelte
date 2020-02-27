<script>
  import { createEventDispatcher } from "svelte";
  import TextDivider from "./TextDivider.svelte";

  const dispatch = createEventDispatcher();

  export let title = "";
  export let intro = "";
  export let closeable;
</script>

<style>
  .header {
    text-align: center;
    max-width: 75%;
    margin-left: auto;
    margin-right: auto;
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
  <h2 class:breadcrumb={closeable} on:click={() => dispatch('click')}>
    {title}
  </h2>
  {#if intro.length}
    <TextDivider class="divider" width="30%" fill="#cac8c8" />
    <div class="justified">
      <p>{intro}</p>
    </div>
  {/if}
</div>
