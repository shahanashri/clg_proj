<script lang="ts">
	import { fade } from 'svelte/transition';
	import CartItem from '../../../components/CartItem.svelte';
	import { cart } from '../../../components/stores';
	import { foods } from '../../../foods';
	import { goto } from '$app/navigation';
	import CustDetails from '../../../components/CustDetails.svelte';

	const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;
	let order_ids: number[];
	let total: number;

	$: order_ids = getKeys($cart);
	$: {
		total = 0;
		order_ids.forEach((order_id) => {
			total += $cart[order_id] * foods[order_id].price;
		});
	}

	let showCustDetailsPopup: boolean = false;
</script>

<div in:fade={{ duration: 500, delay: 500 }} out:fade={{ duration: 500 }}>
	<h1>Cart</h1>
	{#each order_ids as order_id (order_id)}
		<CartItem {order_id} />
	{/each}
	<h3>
		Total: <span class="total">Rs.{total}</span>
	</h3>
	<div class="place-order">
		<button on:click={() => {showCustDetailsPopup = true}}><h2>Place Order</h2></button>
	</div>

	{#if showCustDetailsPopup}
		<CustDetails bind:showCustDetailsPopup />
	{/if}
</div>

<style>
	h3 {
		padding: 0.7rem;
		width: 70%;
		margin: auto;
		margin-bottom: 1rem;
		border: 0.1rem solid black;
		border-radius: 1rem;
		background: white;
		text-align: end;
	}

	.total {
		margin-left: 0.2rem;
		background: rgb(238, 127, 79);
		padding: 0.1rem 0.25rem;
		border: 0.1rem solid black;
		border-radius: 0.2rem;
	}

	.place-order {
		padding: 0.7rem;
		width: 70%;
		margin: auto;
		margin-bottom: 1rem;
		text-align: end;
	}

	button {
		padding: 0.15rem 0.5rem;
		border: 0.1rem solid black;
		border-radius: 0.2rem;
		background: rgb(219, 66, 35);
		color: aliceblue;
		cursor: pointer;
	}

	button:active {
		background: rgba(56, 20, 85, 0.856);
	}
</style>
