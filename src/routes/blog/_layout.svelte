<script>
  import Navigation from "../../components/Navigation.svelte";

  import { client } from "../../apollo";
  import { setClient } from "svelte-apollo";
  setClient(client);

  export let segment;
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }

  .main {
    margin-top: 75px;
  }
</style>

<div class="container">
  <header>
    <Navigation />
  </header>
  <main>
    <div class="main">
      <slot />
    </div>
  </main>
</div>
