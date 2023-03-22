<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cart } from '../../components/stores';
	import { foods } from '../../foods';

	const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;
	let order_ids: number[];

	$: order_ids = getKeys($cart);
</script>

<div in:fade={{ duration: 500, delay: 500 }} out:fade={{ duration: 500 }}>
	<h1>Cart</h1>
	{#each order_ids as order_id}
		<h3>Food: {foods[order_id].name}, Count: {$cart[order_id]}</h3>
	{/each}
</div>
