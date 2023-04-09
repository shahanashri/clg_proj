<script>
	import { fade } from 'svelte/transition';
	import Contacts from '../../../components/Contacts.svelte';
</script>

<div in:fade={{ duration: 500, delay: 500 }} out:fade={{duration:500}}>
	<Contacts/>
</div>
