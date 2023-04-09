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
		<input id="username" type="text" placeholder="username" bind:value={username} />
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

	form {
		margin: auto;
		width: 75%;
		height: 70%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		justify-content: space-around;
	}

	input {
		font-size: 1.5rem;
	}

	button {
		font-size: 1.5rem;
		padding: 0.15rem 0.5rem;
		border-radius: 0.25rem;
		border-style: none;
		background: rgb(219, 66, 35);
		color: aliceblue;
		cursor: pointer;
	}

	button:active {
		background: rgba(56, 20, 85, 0.856);
	}
</style>
