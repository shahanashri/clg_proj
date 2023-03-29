<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div class="login" in:fade={{ duration: 500, delay: 500 }} out:fade={{ duration: 500 }}>
	<h1>Login</h1>
</div>

<style>
	.login {
		margin: auto;
		align-items: center;
		height: 50vh;
		width: 25vw;
		background: white;
	}
</style>