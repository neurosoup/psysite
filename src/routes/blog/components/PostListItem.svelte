<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  import TagLink from "./TagLink.svelte";

  import moment from "moment";
  moment.locale("fr");

  export let post;
  export let selectedTags;

  const dispatch = createEventDispatcher();
  const imageLoaded = () => {
    dispatch("imageLoaded");
  };
</script>

<style>
  a {
    text-decoration: none;
    cursor: pointer;
  }

  h2 {
    color: black;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .ago {
    color: #9e9e9e;
  }

  .read-more {
    margin: 10px 0 20px 0;
  }

  .intro {
    text-align: justify;
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
  <!-- <h6>
    <TagLink tags={post.node._meta.tags} bind:selectedTags />
  </h6> -->
  <div class="read-more">
    <a rel="prefetch" href={`blog/${post.node._meta.uid}`}>Lire la suite</a>
  </div>
</div>
