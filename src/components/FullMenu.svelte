<script>
  export let segment;
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }

  img {
    max-height: 128px;
  }

  nav {
    display: flex;
    align-self: center;
    align-items: center;
  }

  ul {
    margin: 0;
    padding-inline-start: 0;
  }

  ul > li {
    display: inline-block;
  }

  ul > li > a {
    color: var(--grey);
    text-decoration: none;
    font-size: 16px;
    margin-left: 10px;
  }

  ul > li:last-child > a::after {
    content: "";
  }

  ul > li > a::after {
    content: "•";
    display: inline-block;
    margin: 0 0 0 15px;
    font-size: 12px;
    vertical-align: middle;
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
        <a class={segment === 'a-propos' ? 'selected' : ''} href="a-propos">
          Anne-Angélique
        </a>
      </li>
    </ul>
    <a class={segment === undefined ? 'selected' : ''} href=".">
      <img alt="accueil" src="logo.png" />
    </a>
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
