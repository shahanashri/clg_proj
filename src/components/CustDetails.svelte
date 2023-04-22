<script lang="ts">
	import { cart, cust_orders } from "./stores";
	export let showCustDetailsPopup: boolean;

	let name = '';
	let phone = '';
	let address = '';

	const isnum = (val: string) => {
		return /^\d{10}$/.test(val);
	};

	const sumbit = () => {
		if (!isnum(phone)) {
			alert('Phone number should be a 10 digit number!');
			return;
		}

		cust_orders.setOrder({
			name,
			phone,
			address
		});

		cart.reset();
		showCustDetailsPopup = false;
	};

</script>

<div class="background" />
<div class="pop-up">
	<button
		class="close"
		on:click={() => {
			showCustDetailsPopup = false;
		}}><h2>X</h2></button
	>
	<form on:submit|preventDefault={sumbit}>
		<span>
			<input required id="name" type="text" placeholder="name" bind:value={name} />
		</span>
		<span>
			<input required id="phone" type="text" placeholder="phone number" bind:value={phone} />
		</span>
		<span>
			<textarea required id="address" placeholder="address" bind:value={address} />
		</span>
		<button class="confirm">Confirm Order</button>
	</form>
</div>

<style>
	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	span {
		margin-bottom: 1rem;
		width: 60%;
	}

	.background {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: grey;
		opacity: 50%;
	}

	.pop-up {
		height: 30%;
		width: 30%;
		background: white;
		border: 0.25rem solid black;
		border-radius: 1rem;
		padding: 0.2rem;
		position: fixed;
		top: 35%;
		left: 35%;
	}

	.close {
		padding: 0.3rem;
		background-color: red; /* Green */
		border: none;
		border-radius: 0.5rem;
		color: white;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
	}

	button:active {
		background: rgba(56, 20, 85, 0.856);
	}

	.confirm {
		padding: 0.3rem;
		background-color: green; /* Green */
		border: none;
		border-radius: 0.5rem;
		color: white;
		text-align: center;
		text-decoration: none;
		font-size: 16px;
		cursor: pointer;
	}

	input, textarea {
		border: 0.15rem solid rgb(70, 65, 65);
		border-radius: 0.2rem;
		width: 100%;
	}
</style>
