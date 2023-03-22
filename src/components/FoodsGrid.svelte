<script lang="ts">
	import { foods, type FoodDetails } from '../foods';
	import FoodCard from './FoodCard.svelte';

	export let food_ids: number[] = [];
</script>

<div class="foods-container">
	{#each food_ids as id (id)}
		<FoodCard food={foods[id]} {id}/>
	{/each}
</div>

<style>
    .foods-container {
        display: flex;
        flex-wrap: wrap;
        column-gap: 2rem;
        row-gap: 2rem;

        margin: 2rem 0.5rem;
    }
</style>