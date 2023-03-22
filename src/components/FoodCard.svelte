<script lang="ts">
	import type { FoodDetails } from "./types";

    export let food: FoodDetails;
</script>

<div class="food-card">
	<div class="img-container">
		<img src={food.image_path} alt="food and drinks" />
	</div>
 <div class="details">
	<h4>{food.name}</h4>
    <button>Order</button>
 </div>
</div>

<style>
	.food-card {
		height: 13rem;
		width: 9rem;
		display: flex;
		flex-direction: column;
        justify-content: space-between;
        align-items: center;

        border-style: solid;
        border-width: 0.1rem;
        border-radius: 0.5rem;
        padding: 0.5rem;

        background: linen;
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

	button {
		padding: 0.15rem 0.2rem;
		border-radius: 0.25rem;
		border-style: none;
		background: rgba(30, 10, 45, 0.856);
		color: aliceblue;
	}

	button:active {
		background: rgba(56, 20, 85, 0.856);
	}
</style>
