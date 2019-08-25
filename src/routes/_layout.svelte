<script>
  import Nav from "../components/Nav.svelte";
  import MobileNav from "../components/MobileNav.svelte";
  import TopBanner from "../components/TopBanner.svelte";

  import { client } from "../apollo";
  import { setClient } from "svelte-apollo";
  setClient(client);

  export let segment;
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }

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

<header>
  <div class="container">
    <div class="full">
      <Nav {segment} />
    </div>
    <div class="mobile">
      <MobileNav {segment} />
    </div>
    <TopBanner />
  </div>
</header>

<main>
  <slot />
</main>
