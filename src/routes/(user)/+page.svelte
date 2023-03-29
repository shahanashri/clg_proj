<script lang="ts">
	import { fade } from 'svelte/transition';
	import FoodsGrid from '../../components/FoodsGrid.svelte';
	import { getBreakfastMenu, getDinnerMenu, getLunchMenu, getSnacksMenu } from '../../foods';

	let count = 0;

	const incrementCount = () => {
		count++;
	};
</script>

<!-- <h1>Clicked {count} times</h1>
	<button on:click={incrementCount}>Increment++</button> -->
<div in:fade={{ duration: 500, delay: 500 }} out:fade={{ duration: 500 }}>
	<h1>Breakfast Menu</h1>
	<FoodsGrid food_ids={getBreakfastMenu()}/>
	<h1>Lunch Menu</h1>
	<FoodsGrid food_ids={getLunchMenu()}/>
	<h1>Dinner Menu</h1>
	<FoodsGrid food_ids={getDinnerMenu()}/>
	<h1>Snacks Menu</h1>
	<FoodsGrid food_ids={getSnacksMenu()}/>
</div>

<!-- <style>
	button {
		padding: 0.5rem;
		border-radius: 0.5rem;
		border-style: solid;
		background: rgba(30, 10, 45, 0.856);
		color: aliceblue;
	}

	button:active {
		background: rgba(40, 14, 61, 0.856);
	}
</style> -->
