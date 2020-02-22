function sumByTown(arr){
    const totalTowns={};

    for (let i = 0; i < arr.length; i+=2) {
        let town=arr[i];
        let incomes= +arr[i+1];

        if (Object.keys(totalTowns).some(x=>x===town)) {
            totalTowns[town]+=incomes;
        } else{
            totalTowns[town]=incomes;
        }
    }

    console.log(JSON.stringify(totalTowns));
}

sumByTown(['Sofia',
'20',
'Varna',
'3',
'Sofia',
'5',
'Varna',
'4']
)