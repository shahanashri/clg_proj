<script lang="ts">
	import { page } from '$app/stores';
	let path: string;

	$: path = $page.url.pathname;
</script>

<nav>
	<h2 class:active={path === '/'}><a href="/" data-sveltekit-noscroll>Home</a></h2>
	<ul>
		<li class:active={path === '/cart'}><a href="/cart" data-sveltekit-noscroll>Cart</a></li>
		<li class:active={path === '/about'}><a href="/about" data-sveltekit-noscroll>About</a></li>
		<li class:active={path === '/contacts'}><a href="/contacts" data-sveltekit-noscroll>Contacts</a></li>
	</ul>
</nav>

<style>
	nav {
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		top: 0;
		background: whitesmoke;
		box-shadow: 0 0.05rem 5px black;
        z-index: 1000;
	}

	ul {
		display: flex;
		justify-content: space-around;
	}

	li {
		list-style-type: none;
		padding: 0.2rem;
		margin: 0 0.5rem;
	}

	a {
		text-decoration: none;
		color: black;
	}

	li:hover {
		cursor: pointer;
	}

    nav .active {
        text-decoration: underline orange dashed 0.2rem;
        text-underline-offset: 0.5rem;
    }
</style>
