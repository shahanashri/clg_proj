import { browser } from "$app/environment";
import { get, writable, type Writable } from "svelte/store";
import type { CustDetails } from "./types";

const getCartFromStorage = () => {
    if (browser) return JSON.parse(localStorage.getItem('cart') || '{}');
    return {};
}

const getOrdersFromStorage = () => {
    if (browser) return JSON.parse(localStorage.getItem('orders') || '{}');
    return {};
}

if (browser) {
    onstorage = (e) => {
        if(e.key == 'cart') cart.set(getCartFromStorage());
        if(e.key == 'orders') cust_orders.set(getOrdersFromStorage());
    }
}

const createCart = () => {
    const { subscribe, set, update }: Writable<{ [id: number]: number }> = writable(getCartFromStorage());

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
        console.log("Cart: " + JSON.stringify(get(cart)));
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


const createOrders = () => {
    const { subscribe, set, update }: Writable<{ [id: string]: {
        details: CustDetails;
        cart: { [id: number]: number };
    } }> = writable(getOrdersFromStorage());

    // const increment = (id: number) => {
    //     update((orders) => {
    //         orders[id] != undefined ? orders[id]++ : (orders[id] = 1);
    //         return orders;
    //     });
    // };

    // const decrement = (id: number) => {
    //     update((orders) => {
    //         if (orders[id] != undefined && orders[id] > 0) orders[id]--;
    //         if (orders[id] != undefined && orders[id] === 0) delete orders[id];
    //         return orders;
    //     });
    // };

    const setOrder = (cusDetails: CustDetails) => {
        update((orders) => {
            orders[cusDetails.name] = {
                details: cusDetails,
                cart: get(cart)
            };
            return orders;
        });
    }

    const clearOrder = (name: string) => {
        update((orders) => {
            delete orders[name];
            return orders;
        });
    }

    const reset = () => {
        set({});
    }

    return {
        subscribe,
        reset,
        set,
        setOrder,
        clearOrder
    }
}

export const cust_orders = createOrders();

cust_orders.subscribe(value => {
    if (browser) localStorage.setItem('orders', JSON.stringify(value));
});