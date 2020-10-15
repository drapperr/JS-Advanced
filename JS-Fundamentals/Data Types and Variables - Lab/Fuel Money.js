function solve(distance,passengers,price){
    let neededFuel=(distance/100)*7;
    neededFuel+=passengers*0.100;
    let neededMoney=neededFuel*price;

    console.log(`Needed money for that trip is ${neededMoney}lv.`)
}