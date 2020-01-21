function solve(arr){
    const inventory=[];

    for (const token of arr) {
        const parts=token.split(' / ');
        let name=parts[0];
        let level= +parts[1];
        let items=parts.length>2 ? parts[2].split(', ') : [];

        const hero={'name':name,'level':level,'items':items};

        inventory.push(hero);
    }

    console.log(JSON.stringify(inventory));
}

solve(['Isacc / 25',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)