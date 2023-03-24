<script lang="ts">
	import { foods } from '../foods';
	import OrderButton from './OrderButton.svelte';
	import { cart } from './stores';

	export let order_id: number;
</script>

<div class="cart-item">
	<h3>{foods[order_id].name}</h3>
	<div class="order-details">
		<OrderButton id={order_id} /> <span>x Rs.{foods[order_id].price} =</span>
		<div class="total">Rs.{foods[order_id].price * $cart[order_id]}</div>
	</div>
</div>

<style>
	.cart-item {
		padding: 0.7rem;
		width: 70%;
		margin: auto;
		margin-bottom: 1rem;
		border: 0.1rem solid black;
		border-radius: 1rem;
		background: white;

		display: flex;
		justify-content: space-between;
	}

	.order-details {
		display: flex;
        align-items: center;
	}

	span {
		margin: 0 0.5rem 0 0.5rem;
		font-weight: bold;
	}

    .total {
		background: rgb(238, 127, 79);
        padding: 0.1rem 0.25rem;
		border: 0.1rem solid black;
		border-radius: 0.2rem;
    }
</style>
