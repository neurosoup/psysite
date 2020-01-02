<script>
  export let src;
  export let fullscreen = false;
  export let circle = false;
  export let sizeRatio = "50vw";
  export let sizeBehaviour = "contain"; //contain or cover
  let innerSrc;
  let loaded = false;

  const lazy = (node, data) => {
    if (innerSrc) {
      loaded = true;
    } else {
      const img = new Image();
      img.src = data.src;
      img.onload = () => {
        innerSrc = `/${data.src}`;
        loaded = true;
      };
    }
  };
</script>

<style>
  .image {
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .image:before {
    content: " ";
    display: block;
    position: var(--position);
    z-index: -1;
    width: 100%;
    height: 100vh;
    opacity: 0;
    background-size: var(--sizeBehaviour);
    background-position: center center;
    background-repeat: no-repeat;
    background-image: var(--image);
    transition: opacity 1s ease-in;
  }

  .image.loaded:before {
    opacity: 1;
  }

  .circle {
    background-color: transparent;
    border-radius: 50%;
    width: var(--sizeRatio);
    height: var(--sizeRatio);
  }
</style>

<div
  class="image"
  class:circle
  class:loaded
  style={`--image: url(${innerSrc}); --position: ${fullscreen ? 'absolute' : 'relative'}; --sizeRatio: ${sizeRatio}; --sizeBehaviour: ${sizeBehaviour};`}
  use:lazy={{ src }}>
  <slot />

</div>
