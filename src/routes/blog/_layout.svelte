<script>
  import Navigation from "../../components/Navigation.svelte";
  export let segment;
</script>

<style>
  .main {
    margin-top: 75px;
  }
</style>

<header>
  <Navigation {segment} />
</header>
<main class="main">
  <slot />
</main>
