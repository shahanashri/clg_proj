<script lang="ts">
	import type { FoodDetails } from '../foods';
	import FoodCard from './FoodCard.svelte';

	export let foods: FoodDetails[];

</script>

<div class="foods-container">
	{#each foods as food, i (i)}
		<FoodCard {food} id={i}/>
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