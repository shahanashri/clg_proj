<script lang="ts">
	import FoodCard from './FoodCard.svelte';
	import type { FoodDetails } from './types';

	const foods: FoodDetails[] = [];

	for (let i = 0; i < 10; i++) {
		foods.push({
			name: 'Parotta',
			price: 10,
			image_path: '/images/food.jpg'
		});
	}
</script>

<h1>Available foods</h1>

<div class="foods-container">
	{#each foods as food}
		<FoodCard {food} />
	{/each}
</div>

<style>
    .foods-container {
        display: flex;
        flex-wrap: wrap;
        column-gap: 1rem;
        row-gap: 2rem;

        margin: 2rem 0.5rem;
    }
</style>