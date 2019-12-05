<script>
  export let tags = [];
  export let selectedTags;
</script>

<style>
  .tag {
    cursor: pointer;
    text-transform: lowercase;
    color: var(--grey);
  }
</style>

<div class="tag">
  <i class="icon-tag" />
  {#each tags as tag}
    <span on:click={_ => (selectedTags = [tag])}>{tag}&nbsp;</span>
  {/each}
</div>
