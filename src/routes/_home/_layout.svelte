<script>
  import Navigation from "../../components/Navigation.svelte";
  import TopBanner from "./components/TopBanner.svelte";

  export let segment;
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }
</style>

<header>
  <div class="container">
    <Navigation {segment} />
    <TopBanner />
  </div>
</header>

<main>
  <slot />
</main>
