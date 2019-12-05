<script>
  let src;
  let loaded = false;

  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" style="fill:rgb(235,235,235,1)"/></svg>`;

  const lazy = (node, data) => {
    if (src) {
      node.setAttribute("src", src);
    } else {
      const img = new Image();
      img.src = data.src;
      img.onload = () => {
        src = data.src;
        node.setAttribute("src", src);
        loaded = true;
      };
    }
  };
</script>

<style>
  img {
    opacity: 0;
    width: 100%;
    height: 640px;
    z-index: -1;
    object-fit: cover;
    transition: opacity 2s ease-in;
  }

  img.loaded {
    opacity: 1;
  }
</style>

<img
  class:loaded
  use:lazy={{ src: 'banner.jpg' }}
  src={`data:image/svg+xml;charset=utf-8,${xml}`}
  alt="relaxation" />
