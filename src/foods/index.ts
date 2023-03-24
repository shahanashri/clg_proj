type FoodType = "Breakfast" | "Lunch" | "Dinner" | "Snacks";

export interface FoodDetails {
    readonly name: string;
    readonly price: number;
    readonly image_path: string;
    readonly food_type: FoodType[];
}

export const foods: FoodDetails[] = [];
//// **************************************************************************************


foods.push({
    name: 'Dosa',
    price: 50,
    image_path: '/images/dosa.jpg',
    food_type: ["Breakfast"]
});

foods.push({
    name: 'Idli',
    price: 10,
    image_path: '/images/idli.jpg',
    food_type: ["Breakfast"]
});

foods.push({
    name: 'Poori',
    price: 35,
    image_path: '/images/poori.jpg',
    food_type: ["Breakfast"]
});

foods.push({
    name: 'Pongal',
    price: 40,
    image_path: '/images/pongal.jpg',
    food_type: ["Breakfast"]
});

foods.push({
    name: 'Vadai',
    price: 7,
    image_path: '/images/vadai.jpg',
    food_type: ["Breakfast"]
});

foods.push({
    name: 'Coffee',
    price: 12,
    image_path: '/images/coffee.jpg',
    food_type: ["Breakfast"]
});

foods.push({
    name: 'Kesari',
    price: 20,
    image_path: '/images/kesari.jpg',
    food_type: ["Breakfast"]
});


foods.push({
    name: 'Meals',
    price: 45,
    image_path: '/images/meals.jpg',
    food_type: ["Lunch"]
});

foods.push({
    name: 'Kushka',
    price: 60,
    image_path: '/images/kushka.jpg',
    food_type: ["Lunch"]
});

foods.push({
    name: 'Chicken Biriyani',
    price: 100,
    image_path: '/images/Chick biri.jpg',
    food_type: ["Lunch"]
});

foods.push({
    name: 'Mutton Biriyani',
    price: 150,
    image_path: '/images/mutton biri.jpeg',
    food_type: ["Lunch"]
});

foods.push({
    name: 'Lemon Rice',
    price: 45,
    image_path: '/images/lemon.jpg',
    food_type: ["Lunch"]
});

foods.push({
    name: 'Sambar Rice',
    price: 45,
    image_path: '/images/sambar.jpg',
    food_type: ["Lunch"]
});

foods.push({
    name: 'Tomato Rice',
    price: 45,
    image_path: '/images/tomato.jpg',
    food_type: ["Lunch"]
});

foods.push({
    name: 'Curd Rice',
    price: 40,
    image_path: '/images/curd.jpg',
    food_type: ["Lunch"]
});

foods.push({
    name: 'Chicken 65',
    price: 30,
    image_path: '/images/chick 65.jpg',
    food_type: ["Lunch"]
});

foods.push({
    name: 'Gobi Manchurian',
    price: 30,
    image_path: '/images/gobi.jpg',
    food_type: ["Lunch"]
});

foods.push({
    name: 'Parotta',
    price: 18,
    image_path: '/images/parotta.JPG',
    food_type: ["Dinner"]
});

foods.push({
    name: 'Chilli Parotta',
    price: 80,
    image_path: '/images/chilli parotta.jpg',
    food_type: ["Dinner"]
});

foods.push({
    name: 'Kothu Parotta',
    price: 85,
    image_path: '/images/kothu.jpg',
    food_type: ["Dinner"]
});

foods.push({
    name: 'Peas Parotta',
    price: 85,
    image_path: '/images/peas.jpg',
    food_type: ["Dinner"]
});

foods.push({
    name: 'Veg Fried Rice',
    price: 85,
    image_path: '/images/veg rice.jpg',
    food_type: ["Dinner"]
});

foods.push({
    name: 'Egg Fried Rice',
    price: 90,
    image_path: '/images/egg rice.jpg',
    food_type: ["Dinner"]
});

foods.push({
    name: 'Chicken Fried Rice',
    price: 95,
    image_path: '/images/chick rice.jpg',
    food_type: ["Dinner"]
});

foods.push({
    name: 'Veg Noodles',
    price: 85,
    image_path: '/images/veg noodle.jpg',
    food_type: ["Dinner"]
});

foods.push({
    name: 'Egg Noodles',
    price: 90,
    image_path: '/images/egg noodle.jpeg',
    food_type: ["Dinner"]
});

foods.push({
    name: 'Chicken Noodles',
    price: 95,
    image_path: '/images/chick noodle.jpg',
    food_type: ["Dinner"]
});

foods.push({
    name: 'Naan',
    price: 100,
    image_path: '/images/naan.jpg',
    food_type: ["Dinner"]
});

foods.push({
    name: 'Butter Naan',
    price: 120,
    image_path: '/images/butter naan.jpg',
    food_type: ["Dinner"]
});

foods.push({
    name: 'Kulcha',
    price: 120,
    image_path: '/images/kulcha.jpg',
    food_type: ["Dinner"]
});

foods.push({
    name: 'Panner Butter Masala',
    price: 200,
    image_path: '/images/panner butter.jpg',
    food_type: ["Dinner"]
});

foods.push({
    name: 'Butter Chicken',
    price: 250,
    image_path: '/images/butter chick.jpg',
    food_type: ["Dinner"]
});

foods.push({
    name: 'Pepper Chicken',
    price: 200,
    image_path: '/images/pepper.jpg',
    food_type: ["Dinner"]
});

foods.push({
    name: 'Veg Puff',
    price: 15,
    image_path: '/images/veg puff.jpg',
    food_type: ["Snacks"]
});
   
foods.push({
    name: 'Egg Puff',
    price: 15,
    image_path: '/images/puffs.jpg',
    food_type: ["Snacks"]
});

foods.push({
    name: 'Chicken Puff',
    price: 20,
    image_path: '/images/chick puff.jpg',
    food_type: ["Snacks"]
});

foods.push({
    name: 'Samosa',
    price: 20,
    image_path: '/images/samosa.jpg',
    food_type: ["Snacks"]
});

foods.push({
    name: 'Veg Cutlet',
    price: 25,
    image_path: '/images/cutlet.JPG',
    food_type: ["Snacks"]
});

foods.push({
    name: 'Chicken Cutlet',
    price: 30,
    image_path: '/images/chick cut.jpg',
    food_type: ["Snacks"]
});

foods.push({
    name: 'Vannila Milkshake',
    price: 60,
    image_path: '/images/vanilla shake.jpg',
    food_type: ["Snacks"]
});

foods.push({
    name: 'Chocolate Milkshake',
    price: 75,
    image_path: '/images/choco shake.jpg',
    food_type: ["Snacks"]
});

foods.push({
    name: 'Butterscotch Milkshake',
    price: 75,
    image_path: '/images/butter shake.jpg',
    food_type: ["Snacks"]
});

foods.push({
    name: 'Strawberry Milkshake',
    price: 70,
    image_path: '/images/strawberry shake.jpg',
    food_type: ["Snacks"]
});

foods.push({
    name: 'Vanilla Icecream',
    price: 35,
    image_path: '/images/vanilla.jpg',
    food_type: ["Snacks"]
});

foods.push({
    name: 'Chocolate Icecream',
    price: 40,
    image_path: '/images/choco.jpg',
    food_type: ["Snacks"]
});

foods.push({
    name: 'Butterscotch Icecream',
    price: 40,
    image_path: '/images/butterscotch.jpg',
    food_type: ["Snacks"]
});

foods.push({
    name: 'Pista Icecream',
    price: 50,
    image_path: '/images/pista.jpg',
    food_type: ["Snacks"]
});

foods.push({
    name: 'Strawberry Icecream',
    price: 40,
    image_path: '/images/strawberry.jpg',
    food_type: ["Snacks"]
});

foods.push({
    name: 'Veg Pizza',
    price: 100,
    image_path: '/images/veg.jpg',
    food_type: ["Snacks"]
});

foods.push({
    name: 'Chicken Pizza',
    price: 130,
    image_path: '/images/chick.jpg',
    food_type: ["Snacks"]
});

foods.push({
    name: 'Veg Roll',
    price: 20,
    image_path: '/images/rolls.JPG',
    food_type: ["Snacks"]
});

foods.push({
    name: 'Chicken Roll',
    price: 25,
    image_path: '/images/chick roll.jpg',
    food_type: ["Snacks"]
});






//// **************************************************************************************

export const getBreakfastMenu = (): number[] => {
    return foods.reduce((acc, curr, i) => {
        if (curr.food_type.includes("Breakfast")) acc.push(i);
        return acc;
    }, [] as number[]);
}

export const getLunchMenu = (): number[] => {
    return foods.reduce((acc, curr, i) => {
        if (curr.food_type.includes("Lunch")) acc.push(i);
        return acc;
    }, [] as number[]);
}

export const getDinnerMenu = (): number[] => {
    return foods.reduce((acc, curr, i) => {
        if (curr.food_type.includes("Dinner")) acc.push(i);
        return acc;
    }, [] as number[]);
}

export const getSnacksMenu = (): number[] => {
    return foods.reduce((acc, curr, i) => {
        if (curr.food_type.includes("Snacks")) acc.push(i);
        return acc;
    }, [] as number[]);
}