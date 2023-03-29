<script>
	import { fade } from 'svelte/transition';
</script>

<div in:fade={{ duration: 500, delay: 500 }} out:fade={{duration:500}}>
	<h1>Contacts</h1>
</div>
