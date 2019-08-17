<script>
  import Nav from "./Nav.svelte";
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
  }

  .burger {
    width: 32px;
    margin-top: 6px;
  }
</style>

<div class="container">
  {#if opened}
    <Nav />
  {/if}
  <div class="menu-header">
    <h1>La psychanalyste</h1>
    <div class="burger" on:click={burgerClick}>
      {#if opened}
        <XIcon />
      {:else}
        <MenuIcon />
      {/if}
    </div>
  </div>
</div>
