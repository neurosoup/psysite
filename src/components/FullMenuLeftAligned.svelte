<script>
  import Logo from "./Logo.svelte";
  import menuItems from "../menu.js";
  export let page;
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }

  nav {
    display: flex;
    align-self: flex-start;
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
    transition: all 1s ease-in;
  }

  ul > li > a.selected {
    color: var(--accent-color-3);
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
    <a href=".">
      <Logo />
    </a>
    <ul>
      {#each menuItems as item}
        <li>
          <a
            class:selected={page === item.page}
            href={`${item.path}/${item.page}`}>
            {item.title}
          </a>
        </li>
      {/each}
    </ul>

  </nav>

</div>
