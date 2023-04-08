<script lang="ts">
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';

	let username: string = '';
	let password: string = '';

	const submit = () => {
		if (username == 'admin' && password == 'admin@123') {
			console.log(`hello: ${username}`);
			console.log(`password: ${password}`);
			goto('admin');
		} else {
			alert("Incurrent username or password!");
		}
	};
</script>

<div class="login" in:fade={{ duration: 500, delay: 500 }} out:fade={{ duration: 500 }}>
	<h1>Admin Login</h1>
	<form on:submit|preventDefault={submit}>
		<label for="username">Username:</label>
		<input id="username" type="text" placeholder="username" bind:value={username} />
		<label for="password">Password:</label>
		<input id="password" type="password" placeholder="password" bind:value={password} />
		<button>Login</button>
	</form>
</div>

<style>
	.login {
		margin: auto;
		align-items: center;
		height: 50vh;
		width: 25vw;
		background: white;
		border: 0.25rem solid plum;
		border-radius: 1rem;
	}
</style>
