<script lang="ts">
	import NavBar from '../../components/NavBar.svelte';
	import '../../global.css';
</script>

<NavBar />
<div class="app">
	<slot />
</div>

<style>
	.app {
		width: 90%;
		margin: auto;
		margin-top: 1rem;
	}
</style>
