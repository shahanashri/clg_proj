<script lang="ts">
	import type { FoodDetails } from '../foods';
	import OrderButton from './OrderButton.svelte';

	export let food: FoodDetails;
	export let id: number;
</script>

<div class="food-card">
	<img src={food.image_path} alt="food and drinks" />
	<div class="details">
		<h4>{food.name}: Rs.{food.price}</h4>
		<OrderButton {id} />
	</div>
</div>

<style>
	.food-card {
		height: 13rem;
		width: 16rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		margin-right: minmax(0, 1rem);

		border-style: solid;
		border-width: 0.1rem;
		border-radius: 0.5rem;
		padding: 0.5rem;

		/* background: linen; */
		background: white;
	}

	img {
		flex: 1;
		width: 100%;
		overflow: hidden;
		padding: 0.5rem;
		object-fit: cover;
		border-radius: 1rem;
	}

	.details {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
</style>
