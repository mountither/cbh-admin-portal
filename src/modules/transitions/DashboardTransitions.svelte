<script>
  import { fly } from "svelte/transition";
</script>

<div in:fly={{ y: -10, duration: 450, delay: 300 }}>
  <slot />
</div>
