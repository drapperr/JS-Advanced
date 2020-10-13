function solve(lostFightsCount,helmetPrice,swordPrice ,shieldPrice, armorPrice){
    let helmetsCount=Math.floor(lostFightsCount/2);
    let swordCount=Math.floor(lostFightsCount/3);
    let shieldCount=Math.floor(lostFightsCount/6);
    let armorCount=Math.floor(shieldCount/2);

    let total=helmetsCount*helmetPrice+swordCount*swordPrice+shieldCount*shieldPrice+armorCount*armorPrice;

    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}