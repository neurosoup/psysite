<script>
  import FullMenu from "./FullMenu.svelte";
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
  @media (max-width: 768px) {
    .full {
      display: none;
    }

    .mobile {
      display: block;
    }
  }
</style>

<div class="full">
  <FullMenu {segment} />
</div>
<div class="mobile">
  <Burger {segment} />
</div>

<slot />
