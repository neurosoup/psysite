<script>
  import Logo from "./Logo.svelte";
  import CompactMenu from "./CompactMenu.svelte";
  import { MenuIcon, XIcon } from "svelte-feather-icons";

  export let segment;
  let opened = false;

  const burgerClick = () => {
    opened = !opened;
  };
</script>

<style>
  .container {
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    flex-flow: column-reverse;
    margin-bottom: 0;
    max-height: 100vh;
  }

  .menu-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 0;
    background-color: #fff;
    font-size: 2.5vw;
  }

  .burger {
    width: 32px;
  }
</style>

<div class="container">
  {#if opened}
    <CompactMenu />
  {/if}
  <div class="menu-header">
    <Logo />
    <div class="burger" on:click={burgerClick}>
      {#if opened}
        <XIcon />
      {:else}
        <MenuIcon />
      {/if}
    </div>
  </div>
</div>
