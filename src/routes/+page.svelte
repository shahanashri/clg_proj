<script lang="ts">
	import { fade } from 'svelte/transition';
	import FoodCard from '../components/FoodCard.svelte';
	import FoodsGrid from '../components/FoodsGrid.svelte';

	let count = 0;

	const incrementCount = () => {
		count++;
	};
</script>

<!-- <h1>Clicked {count} times</h1>
	<button on:click={incrementCount}>Increment++</button> -->
<div in:fade={{ duration: 500, delay: 500 }} out:fade={{duration:500}}>
	<FoodsGrid />
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
