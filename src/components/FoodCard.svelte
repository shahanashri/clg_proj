<script lang="ts">
	import type { FoodDetails } from "../foods";
	import OrderButton from "./OrderButton.svelte";


    export let food: FoodDetails;
	export let id: number;
</script>

<div class="food-card">
	<div class="img-container">
		<img src={food.image_path} alt="food and drinks" />
	</div>
 <div class="details">
	<h4>{food.name}</h4>
	<OrderButton {id}/>
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

    .img-container {
        flex: 1;
        padding: 0.5rem;
    }

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

    .details {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>
