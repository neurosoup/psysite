<script>
  import { createEventDispatcher } from "svelte";
  import moment from "moment";

  moment.locale("fr");

  const dispatch = createEventDispatcher();

  export let posts;
  export let tags = [];

  let viewport;
  let scrollY;
  let offsetHeight;
  let innerHeight;

  let bottomThreshold = 200;
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
</script>

<style>
  a {
    text-decoration: none;
  }

  img {
    vertical-align: middle;
    max-width: 100%;
  }

  .outer {
    margin: 10px 30px 0 30px;
  }

  .masonry-layout {
    column-count: 1;
    column-gap: 0;
  }

  .masonry-layout-panel {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  .masonry-layout-panel-content {
    padding: 10px;
  }

  @media (min-width: 768px) {
    .outer {
      margin: 10px 60px 0 60px;
    }
    .masonry-layout {
      column-count: 2;
    }
    .masonry-layout-panel {
      margin-inline-start: 10px;
      margin-inline-end: 10px;
    }
  }

  @media (min-width: 1200px) {
    .masonry-layout {
      column-count: 3;
    }
  }

  @media (min-width: 2560px) {
    .outer {
      margin: 10px 260px 0 260px;
    }
  }

  .masonry-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .ago {
    color: #9e9e9e;
  }

  .tag {
    cursor: pointer;
    text-transform: lowercase;
  }
</style>

<svelte:window bind:scrollY bind:innerHeight />

<div class="outer" bind:this={viewport} bind:offsetHeight>
  <div class="masonry-layout">
    {#each posts as post}
      <div class="masonry-layout-panel">
        <div class="masonry-layout-panel-content">
          <a rel="prefetch" href={`blog/${post.node._meta.uid}`}>
            <img
              class="masonry-img"
              src={post.node.featured_image.url}
              alt={post.node.featured_image.alt} />
            <h2>{post.node.title[0].text}</h2>
            <h6 class="ago">
              {moment(post.node._meta.lastPublicationDate).fromNow()}
            </h6>
          </a>
          <div class="intro">{post.node.intro[0].text}</div>
          <h6 class="tag">
            {#each post.node._meta.tags as tag}
              <span on:click={_ => (tags = [tag])}>{tag}&nbsp;</span>
            {/each}
          </h6>
        </div>
      </div>
    {/each}
  </div>
</div>
