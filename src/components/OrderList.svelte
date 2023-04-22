<script lang="ts">
	import { foods } from '../foods';
	import { cust_orders } from './stores';
	import type { CustDetails } from './types';

	export let order: string;

	let details: CustDetails;
	let cart: { [id: number]: number };

	$: details = $cust_orders[order].details;
	$: cart = $cust_orders[order].cart;

	const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;
	let order_ids: number[];
	let total: number;

	$: order_ids = getKeys(cart);
	$: {
		total = 0;
		order_ids.forEach((order_id) => {
			total += cart[order_id] * foods[order_id].price;
		});
	}
</script>

<div class="order">
	<div class="details">
		<h4>Name: {details.name}</h4>
		<h4>Phone: {details.phone}</h4>
		<h4>Address: {details.address}</h4>
	</div>
	<ul>
		{#each order_ids as order_id}
			<li>
				{foods[order_id].name} x {cart[order_id]}
				<span>= <span class="total">Rs.{foods[order_id].price * cart[order_id]} </span></span>
			</li>
		{/each}
		<li>
			<h4>Total =</h4>
			<span class="total">Rs.{total}</span>
		</li>
		<button class="done" on:click={() => {cust_orders.clearOrder(details.name)}}>Done</button>
	</ul>
</div>

<style>
	.order {
		margin: auto;
		padding: 1rem 0;
		width: 70%;
		display: flex;
		background: white;
		border: 0.15rem solid black;
		border-radius: 0.5rem;
		justify-content: space-around;
		margin-bottom: 2rem;
	}

	ul {
		padding: 0 3rem;
	}

	li {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.5rem;
	}

	.total {
		padding: 0.15rem 0.5rem;
		border: 0.1rem solid rgb(165, 58, 58);
		border-radius: 0.25rem;
		background: rgb(219, 66, 35);
		color: aliceblue;
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
