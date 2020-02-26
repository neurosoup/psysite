<script>
  import Logo from "./Logo.svelte";
  import menuItems from "../menu.js";
  export let page;

  const sliceIndex = Math.floor(menuItems.length / 2);
  const menus = [menuItems.slice(0, sliceIndex), menuItems.slice(sliceIndex)];
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
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
    transition: all 3s ease-in;
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
    {#each menus as menu, i}
      <ul>
        {#each menu as item}
          <li>
            <a
              class:selected={page === item.page}
              href={`${item.path}/${item.page}`}>
              {item.title}
            </a>
          </li>
        {/each}
      </ul>
      {#if i < menus.length - 1}
        <a href=".">
          <Logo />
        </a>
      {/if}
    {/each}
  </nav>

</div>
