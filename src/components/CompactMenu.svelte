<script>
  import menu from "../menu.js";
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
      {#each menu as item}
        <li>
          <a
            class:selected={segment === item.page}
            href={`${item.path}/${item.page}`}>
            {item.title}
          </a>
        </li>
      {/each}
    </ul>
  </nav>

</div>
