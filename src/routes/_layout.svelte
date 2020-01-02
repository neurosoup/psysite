<script>
  import Navigation from "../components/Navigation.svelte";
  import { stores } from "@sapper/app";
  export let segment;

  const { page } = stores();
</script>

<style>

</style>

<header>
  <Navigation page={$page.path.split('/').pop()} />
</header>
<main>
  <slot />
</main>
