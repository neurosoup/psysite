<script>
  import Navigation from "../../components/Navigation.svelte";
  export let segment;
</script>

<style>

</style>

<header>
  <Navigation {segment} />
</header>
<main>
  <slot />
</main>
