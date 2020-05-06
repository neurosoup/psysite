<script>
  import FullMenu from "./FullMenuLeftAligned.svelte";
  import Burger from "./Burger.svelte";

  export let page;
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
  <FullMenu {page} />
</div>
<div class="mobile">
  <Burger {page} />
</div>

<slot />
