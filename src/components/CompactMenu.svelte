<script>
  export let segment;
</script>

<style>
  .container {
    max-height: 100vh;
    background-color: #fff;
  }

  nav {
    width: 100%;
    margin-top: 0;
    border-bottom: 1px solid #ededed;
    padding-bottom: 20px;
  }

  ul {
    margin: 0;
    padding-inline-start: 40px;
  }

  ul > li {
    display: block;
  }

  ul > li > a {
    color: var(--grey);
    text-decoration: none;
    font-size: 22px;
    margin-left: 0;
    line-height: 40px;
  }
</style>

<div class="container">

  <nav>
    <ul>
      <li>
        <a
          class={segment === 'seances-individuelles' ? 'selected' : ''}
          href="seances-individuelles">
          Séances individuelles
        </a>
      </li>
      <li>
        <a
          rel="prefetch"
          class={segment === 'blog' ? 'selected' : ''}
          href="blog">
          Blog
        </a>
      </li>
      <li>
        <a
          class={segment === 'anne-angelique' ? 'selected' : ''}
          href="anne-angelique">
          Anne-Angélique
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <a
          class={segment === 'formations-en-ligne' ? 'selected' : ''}
          href="formations-en-ligne">
          Formations en ligne
        </a>
      </li>
      <li>
        <a class={segment === 'ressources' ? 'selected' : ''} href="ressources">
          Ressources
        </a>
      </li>
      <li>
        <a class={segment === 'contact' ? 'selected' : ''} href="contact">
          Contact
        </a>
      </li>
    </ul>
  </nav>

</div>
