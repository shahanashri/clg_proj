<script lang="ts">
	import { fade } from 'svelte/transition';
	import About from '../../../components/About.svelte';
</script>

<div in:fade={{ duration: 500, delay: 500 }} out:fade={{duration:500}}>
	<About/>
</div>
