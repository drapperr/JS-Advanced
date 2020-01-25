function calculateIncomes(arr){
    const towns={};

    for (const token of arr) {
        const parts=token.split(' -> ');
        let city=parts[0];
        let product=parts[1];
        let nums=parts[2].split(' : ');
        let amount= +nums[0];
        let price= +nums[1];
        let total= amount*price;

        if (!Object.keys(towns).some(x=>x===city)) {
            towns[city]={};
        }
        if (!Object.keys(towns[city]).some(x=>x===product)) {
            towns[city][product]=total;
        } else{
            towns[city][product]+=total;
        }
    }

    for (const town in towns) {
        console.log(`Town - ${town}`)
        for (const product in towns[town]) {
            console.log(`$$$${product} : ${towns[town][product]}`);
        }
    }
}

calculateIncomes(['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3']
)