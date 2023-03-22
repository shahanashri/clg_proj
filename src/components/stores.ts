import { writable, type Writable } from "svelte/store";

export const cart: Writable<{[id: number]: number}> = writable({});