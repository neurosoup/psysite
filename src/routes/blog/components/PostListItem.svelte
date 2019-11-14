<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  import moment from "moment";

  moment.locale("fr");

  export let post;
  export let tags;

  const dispatch = createEventDispatcher();
  const imageLoaded = () => {
    dispatch("imageLoaded");
  };
</script>

<style>
  a {
    text-decoration: none;
  }

  img {
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

<div transition:fade>
  <a rel="prefetch" href={`blog/${post.node._meta.uid}`}>
    <img
      src={post.node.featured_image.url}
      alt={post.node.featured_image.alt}
      on:load={imageLoaded} />
    <h2>{post.node.title[0].text}</h2>
  </a>
  <h6 class="ago">{moment(post.node._meta.lastPublicationDate).fromNow()}</h6>
  <div class="intro">{post.node.intro[0].text}</div>
  <h6 class="tag">
    {#each post.node._meta.tags as tag}
      <span on:click={_ => (tags = [tag])}>{tag}&nbsp;</span>
    {/each}
  </h6>
</div>
