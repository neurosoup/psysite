<script>
  let src;
  let loaded = false;

  const lazy = (node, data) => {
    if (src) {
      loaded = true;
    } else {
      const img = new Image();
      img.src = data.src;
      img.onload = () => {
        src = data.src;
        loaded = true;
      };
    }
  };

  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" style="fill:rgb(235,235,235,1)"/></svg>`;
</script>

<style>
  .hero {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .circle {
    display: flex;
    align-items: center;
    background-color: #a28982bf;
  }

  @media only screen and (min-width: 1024px) {
    .circle {
      border-radius: 50%;
      width: 55vw;
      height: 55vw;
      margin-left: 33vw;
    }
  }

  @media only screen and (min-width: 1280px) {
    .circle {
      width: 50vw;
      height: 50vw;
    }
  }

  .hero-inner {
    margin: 0 20% 0 20%;
  }

  .hero-inner h1,
  h2 {
    font-weight: 600;
    color: #000;
    text-transform: uppercase;
  }

  .hero-inner p {
    color: #fff;
    text-align: justify;
  }

  .hero:before {
    content: " ";
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100vh;
    opacity: 0;
    background-image: url("/images/seances_individuelles.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    transition: opacity 1s ease-in;
  }

  .hero.loaded:before {
    opacity: 1;
  }
</style>

<svelte:head>
  <title>Séances individuelles</title>
</svelte:head>

<!-- <div class="wrapper">
  <div class="circle">
    <h1>Bientôt</h1>
    <h2>Séances individuelles</h2>
    <p>
      Cette page est actuellement en cours de construction.... Mais je vous
      expliquerai prochainement comment fonctionnent les séances individuelles
      en ligne que je propose, leur déroulement, leurs tarifs. Vous pouvez vous
      rendre sur le blog et sur la page de présentation.
    </p>
  </div>
</div> -->

<section
  class="hero"
  class:loaded
  use:lazy={{ src: 'images/seances_individuelles.png' }}>
  <div class="circle">
    <div class="hero-inner">

      <h1>Bientôt</h1>
      <h2>Séances individuelles</h2>
      <p>
        Cette page est actuellement en cours de construction.... Mais je vous
        expliquerai prochainement comment fonctionnent les séances individuelles
        en ligne que je propose, leur déroulement, leurs tarifs. Vous pouvez
        vous rendre sur le blog et sur la page de présentation.
      </p>
    </div>
  </div>
</section>

<!-- <div id="bg">
  <img
    class:loaded
    use:lazy={{ src: 'images/seances_individuelles.png' }}
    src={`data:image/svg+xml;charset=utf-8,${xml}`}
    alt="Séances individuelles" />
</div> -->
