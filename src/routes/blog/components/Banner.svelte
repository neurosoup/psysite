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

  .button.small {
    padding: 0 10px 0 10px;
    font-size: 25px;
    vertical-align: text-bottom;
  }
</style>

<div class="header">
  <h1>
    {#if closeable}
      <div
        class="small button accent1 hover-accent6 button-solid"
        on:click={() => dispatch('click')}>
        <span class="icon-x" />
      </div>
    {/if}
    {title}
  </h1>
  {#if intro.length}
    <TextDivider class="divider" width="30%" fill="#cac8c8" />
    <div class="justified">
      <p>{intro}</p>
    </div>
  {/if}
</div>
