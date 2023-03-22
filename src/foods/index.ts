export interface FoodDetails {
    readonly name: string;
    readonly price: number;
    readonly image_path: string;
}

export const foods: FoodDetails[] = [];

for (let i = 0; i < 10; i++) {
    foods.push({
        name: 'Parotta',
        price: 10,
        image_path: '/images/food.jpg'
    });
}

export const getBreakfastMenu = (): FoodDetails[] => {
    return foods;
}