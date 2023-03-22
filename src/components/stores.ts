import { writable, type Writable } from "svelte/store";


const createCart = () => {
    const {subscribe, set, update}: Writable<{[id: number]: number}> = writable({});

	const increment = (id: number) => {
		update((orders) => {
			orders[id] != undefined ? orders[id]++ : (orders[id] = 1);
			return orders;
		});
	};

	const decrement = (id: number) => {
		update((orders) => {
			if (orders[id] != undefined && orders[id] > 0) orders[id]--;
            if (orders[id] != undefined && orders[id] === 0) delete orders[id];
			return orders;
		});
    };

    const reset = () => {
        set({});
    }

    return {
        subscribe,
        increment,
        decrement,
        reset
    }
}

export const cart = createCart();