function solve(array){
    const foodsCalories={};
    for (let i = 0; i < array.length; i+=2) {
       foodsCalories[array[i]]=+array[i+1];
    }

    console.log(foodsCalories);
}