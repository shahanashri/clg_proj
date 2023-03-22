<script lang="ts">
	export let id: number;

	let count = 0;

    const incrementCount = () => {
        count++;
    };
</script>

<div>
	{#if count > 0}
		<button>-</button> {count} <button>+</button>
	{:else}
		<button on:click={incrementCount}>Add {id}</button>
	{/if}
</div>

<style>
	button {
		padding: 0.15rem 0.5rem;
		border-radius: 0.25rem;
		border-style: none;
		background: rgb(219, 66, 35);
		color: aliceblue;
	}

	button:active {
		background: rgba(56, 20, 85, 0.856);
	}
</style>
