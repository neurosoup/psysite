<script>
  import TopNav from "../components/TopNav.svelte";

  export let segment;
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    margin-bottom: -70px;
  }

  nav {
    align-self: center;
    margin-top: 15px;
  }

  ul {
    padding-inline-start: 0;
  }

  ul > li {
    display: inline-block;
  }

  ul > li > a {
    text-decoration: none;
    font-size: 16px;
    margin-left: 10px;
  }

  ul > li:last-child::after {
    content: "";
  }

  ul > li::after {
    content: "•";
    display: inline-block;
    margin: 0 0 0 15px;
    font-size: 9px;
    vertical-align: middle;
  }

  /* Iphone 6/7/8/Plus */
  @media (max-width: 414px) {
    .container {
      flex-flow: column-reverse;
      margin-bottom: 0;
      max-height: 100vh;
      box-shadow: 0px -18px 48px 4px rgba(0, 0, 0, 0.75);
    }

    nav {
      width: 100%;
      margin-top: 0;
      align-self: flex-start;
      border-bottom: 1px solid #ededed;
    }

    ul {
      padding-inline-start: 40px;
    }

    ul > li {
      display: block;
    }

    ul > li::after {
      content: "";
      display: block;
      margin: 0;
      font-size: 9px;
    }

    ul > li > a {
      font-size: 22px;
      margin-left: 0;
      line-height: 40px;
    }
  }
</style>

<div class="container">
  <TopNav />
  <nav>
    <ul>
      <li>
        <a class={segment === undefined ? 'selected' : ''} href=".">Accueil</a>
      </li>
      <li>
        <a class={segment === 'about' ? 'selected' : ''} href="about">
          Thérapie
        </a>
      </li>
      <li>
        <a class={segment === 'about' ? 'selected' : ''} href="about">
          Spécialités
        </a>
      </li>

      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
      <li>
        <a
          rel="prefetch"
          class={segment === 'blog' ? 'selected' : ''}
          href="blog">
          blog
        </a>
      </li>
    </ul>
  </nav>

</div>
