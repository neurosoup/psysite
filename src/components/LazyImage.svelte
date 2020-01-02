<script>
  export let src;
  let innerSrc;
  let loaded = false;

  const lazy = (node, data) => {
    if (innerSrc) {
      loaded = true;
    } else {
      const img = new Image();
      img.src = data.src;
      img.onload = () => {
        innerSrc = data.src;
        loaded = true;
      };
    }
  };
</script>

<style>
  .image {
    overflow: hidden;
  }

  .image:before {
    content: " ";
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100vh;
    opacity: 0;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    transition: opacity 1s ease-in;
  }

  .image.loaded:before {
    opacity: 1;
  }
</style>

<div
  class="image"
  class:loaded
  style="background-image: url({innerSrc});"
  use:lazy={{ src }}>
  <slot />
</div>
