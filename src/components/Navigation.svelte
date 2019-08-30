<script>
  import Menu from "./Menu.svelte";
  import Burger from "./Burger.svelte";

  export let segment;
</script>

<style>
  .full {
    display: block;
  }

  .mobile {
    display: none;
  }

  /* Iphone 6/7/8/Plus */
  @media (max-width: 414px) {
    .full {
      display: none;
    }

    .mobile {
      display: block;
    }
  }
</style>

<div class="full">
  <Menu {segment} />
</div>
<div class="mobile">
  <Burger {segment} />
</div>

<slot />
