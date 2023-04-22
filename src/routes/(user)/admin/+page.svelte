<script lang="ts">
	import { fade } from 'svelte/transition';
	import OrderList from '../../../components/OrderList.svelte';
	import { cust_orders } from '../../../components/stores';

	let order_ids: string[];

	$: order_ids = Object.keys($cust_orders);
</script>

<div in:fade={{ duration: 500, delay: 500 }} out:fade={{ duration: 500 }}>
	<h1>Admin</h1>
	<h1>Orders</h1>
	{#each order_ids as order}
		<OrderList {order} />
	{/each}
</div>
