import { browser } from "$app/environment";
import { writable, type Writable } from "svelte/store";

const getFromStorage = () => {
    if (browser) return JSON.parse(localStorage.getItem('cart') || '{}');
    return {};
}

if (browser) {
    onstorage = () => {
        cart.set(getFromStorage());
    }
}

const createCart = () => {
    const { subscribe, set, update }: Writable<{ [id: number]: number }> = writable(getFromStorage());

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
        reset,
        set
    }
}

export const cart = createCart();

cart.subscribe(value => {
    if (browser) localStorage.setItem('cart', JSON.stringify(value));
});