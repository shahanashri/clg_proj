<script lang="ts">
	import { cart } from './stores';

	export let id: number;

	let count: number;
	$: count = $cart[id] == undefined ? 0 : $cart[id];

	const increment = () => {
		cart.update((foods) => {
			foods[id] != undefined ? foods[id]++ : (foods[id] = 1);
			return foods;
		});
	};

	const decrement = () => {
		cart.update((foods) => {
			if (foods[id] != undefined && foods[id] > 0) foods[id]--;
            if (foods[id] != undefined && foods[id] === 0) delete foods[id];
			return foods;
		});
    };
</script>

<div>
	{#if count > 0}
		<div class="incdec">
			<button on:click={decrement}>-</button><span>{count}</span><button on:click={increment}
				>+</button
			>
		</div>
	{:else}
		<button on:click={increment}>Add {id}</button>
	{/if}
</div>

<style>
	button {
		padding: 0.15rem 0.5rem;
		border-radius: 0.25rem;
		border-style: none;
		background: rgb(219, 66, 35);
		color: aliceblue;
	}

	button:active {
		background: rgba(56, 20, 85, 0.856);
	}

	.incdec {
		background: rgb(238, 127, 79);
		color: aliceblue;
		border-radius: 0.25rem;
	}

	span {
		padding: 0 0.5rem;
	}
</style>
