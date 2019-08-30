<script>
  import Menu from "./Menu.svelte";
  import { MenuIcon, XIcon } from "svelte-feather-icons";

  export let segment;
  let opened = false;

  const burgerClick = () => {
    opened = !opened;
  };
</script>

<style>
  h1 {
    margin: 0;
    text-transform: uppercase;
  }

  .container {
    position: absolute;
    top: 0;
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
    padding: 20px;
    background-color: #fff;
    font-size: 2.5vw;
  }

  .burger {
    width: 32px;
  }
</style>

<div class="container">
  {#if opened}
    <Menu />
  {/if}
  <div class="menu-header">
    <h1>Anne-Angélique Zémour</h1>
    <div class="burger" on:click={burgerClick}>
      {#if opened}
        <XIcon />
      {:else}
        <MenuIcon />
      {/if}
    </div>
  </div>
</div>
