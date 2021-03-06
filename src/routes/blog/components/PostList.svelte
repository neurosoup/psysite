<script>
  import { createEventDispatcher } from "svelte";
  import PostListItem from "./PostListItem.svelte";

  const dispatch = createEventDispatcher();

  export let posts;
  export let selectedTags = [];

  let viewport;
  let scrollY;
  let offsetHeight;
  let innerHeight;
  let bottomThreshold = 400;
  let watchBottom = true;

  $: if (viewport) {
    const bottom = offsetHeight + viewport.offsetTop - scrollY;
    const distance = bottom - innerHeight;
    if (distance < bottomThreshold && watchBottom) {
      watchBottom = false;
      dispatch("bottom");
    }
    watchBottom = distance >= bottomThreshold;
  }

  function resizeMasonryItem(item) {
    const grid = document.getElementsByClassName("masonry")[0];
    if (grid) {
      const rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
      );
      const rowHeight = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
      );
      const content = item.querySelector(".masonry-content");
      const rowSpan = Math.ceil(
        (content.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap)
      );
      item.style.gridRowEnd = "span " + rowSpan;
    }
  }

  function resizeAllMasonryItems() {
    document.querySelectorAll(".masonry-item").forEach(item => {
      resizeMasonryItem(item);
    });
  }
</script>

<style>
  .outer {
    margin: 10px 20px 0 20px;
  }

  /* https://w3bits.com/tools/masonry-generator/ */
  .masonry-wrapper {
    padding-top: 1.5em;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }

  .masonry {
    display: grid;
    grid-template-columns: repeat(1, minmax(100px, 1fr));
    grid-gap: 20px;
    grid-auto-rows: 0;
  }

  @media only screen and (max-width: 1023px) and (min-width: 768px) {
    .masonry {
      grid-template-columns: repeat(2, minmax(100px, 1fr));
    }
  }
  @media only screen and (min-width: 1024px) {
    .masonry {
      grid-template-columns: repeat(3, minmax(100px, 1fr));
    }
  }

  .masonry-item,
  .masonry-content {
    overflow: hidden;
  }
</style>

<svelte:window
  bind:scrollY
  bind:innerHeight
  on:resize={resizeAllMasonryItems} />

<div class="outer" bind:this={viewport} bind:offsetHeight>
  <div class="masonry-wrapper">
    <div class="masonry">
      {#each posts.filter(post => !selectedTags.length || post.node._meta.tags.some(
            tag => selectedTags.includes(tag)
          )) as post}
        <div class="masonry-item">
          <div class="masonry-content">
            <PostListItem
              {post}
              bind:selectedTags
              on:imageLoaded={resizeAllMasonryItems} />
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
