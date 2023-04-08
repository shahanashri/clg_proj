<script>
	import { fade } from 'svelte/transition';
	import OrderList from '../../../components/OrderList.svelte';
</script>

<div in:fade={{ duration: 500, delay: 500 }} out:fade={{ duration: 500 }}>
	<h1>Admin</h1>
	<OrderList />
</div>
