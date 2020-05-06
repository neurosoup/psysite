<script>
  import Banner from "../../components/Banner.svelte";
  import LazyImage from "../../components/LazyImage.svelte";
  import ContactFrom from "../../components/ContactForm.svelte";
</script>

<style>
  .wrapper {
    margin-left: auto;
    margin-right: auto;
  }

  .vertical {
    max-width: 75%;
  }
</style>

<svelte:head>
  <title>Anne-Angélique Zémour</title>
</svelte:head>
<Banner
  title="Contact"
  intro="Pour toute demande d’informations, d’interviews, de partenariat, vous
  pouvez me contacter en remplissant le formulaire." />
<div class="wrapper vertical">
  <section>
    <ContactFrom />
  </section>
</div>
