<script>
  import { onMount } from "svelte";

  onMount(() => {
    var d = document,
      s = d.createElement("script");
    s.src = "https://psysite.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
  });
</script>

<div id="disqus_thread" />

{@html `<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>`}
