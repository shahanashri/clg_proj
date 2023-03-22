type FoodType = "Breakfast" | "Lunch" | "Dinner" | "Snacks";

export interface FoodDetails {
    readonly name: string;
    readonly price: number;
    readonly image_path: string;
    readonly food_type: FoodType;
}

export const foods: FoodDetails[] = [];

/// Breakfasts
foods.push({
    name: 'Dosa',
    price: 10,
    image_path: '/images/food.jpg',
    food_type: "Breakfast"
});

/// Lunch
foods.push({
    name: 'Rice',
    price: 10,
    image_path: '/images/food.jpg',
    food_type: "Lunch"
});

/// Dinner
foods.push({
    name: 'Parotta',
    price: 10,
    image_path: '/images/food.jpg',
    food_type: "Dinner"
});

/// Snacks
foods.push({
    name: 'Puffs',
    price: 10,
    image_path: '/images/food.jpg',
    food_type: "Snacks"
});

export const getBreakfastMenu = (): number[] => {
    return foods.reduce((acc, curr, i) => {
        if (curr.food_type == "Breakfast") acc.push(i);
        return acc;
    }, [] as number[]);
}

export const getLunchMenu = (): number[] => {
    return foods.reduce((acc, curr, i) => {
        if (curr.food_type == "Lunch") acc.push(i);
        return acc;
    }, [] as number[]);
}

export const getDinnerMenu = (): number[] => {
    return foods.reduce((acc, curr, i) => {
        if (curr.food_type == "Dinner") acc.push(i);
        return acc;
    }, [] as number[]);
}

export const getSnacksMenu = (): number[] => {
    return foods.reduce((acc, curr, i) => {
        if (curr.food_type == "Snacks") acc.push(i);
        return acc;
    }, [] as number[]);
}