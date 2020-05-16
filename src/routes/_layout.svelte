<script>
  import Navigation from "../components/Navigation.svelte";
  import { stores } from "@sapper/app";

  const { page } = stores();
</script>

<style>
  footer {
    margin-top: 70px;
    text-align: center;
    font-size: medium;
  }
</style>

<header>
  <Navigation page={$page.path.split('/').pop()} />
</header>
<main>
  <slot />
  <footer>
    © 2020 La Psychanalyste.
    <a href="pages/mentions-legales">Mentions légales.</a>
    <footer />
  </footer>
</main>
