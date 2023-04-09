<script lang="ts">
	export let showCustDetailsPopup: boolean;

	let name = '';
	let phone = '';
	let address = '';
    
    const isnum = (val: string) => {
        return /^\d{10}$/.test(val);
    }

    const sumbit = () => {
        if (!isnum(phone)) {
            alert("Phone number should be a 10 digit number!");
            return;
        }
    }
</script>

<div class="background" />
<div class="pop-up">
	<button
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
		<button>Confirm Order</button>
	</form>
</div>

<style>
    form {
        width: 100%;
        display: flex;
        background: blue;
        flex-direction: column;
        align-items: center;
    }

    span {
        margin-bottom: 1rem;
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
		background: yellow;
		border: 0.25rem solid black;
		position: fixed;
		top: 35%;
		left: 35%;
	}
</style>
