function solve(arr){
    const catalogue={};

    for (const element of arr) {
        const parts=element.split(' : ')
        let name= parts[0];
        let price= +parts[1];
        let firstChar=name[0];

        if (!Object.keys(catalogue).some(x=>x==firstChar)) {
            catalogue[firstChar]={};
        }
        catalogue[firstChar][name]=price;
    }
    
    const keys=Object.keys(catalogue).sort();

    for (const key of keys) {
        console.log(key);
        const productsNames=Object.keys(catalogue[key]).sort();

        for (const k of productsNames) {
            console.log(`  ${k}: ${catalogue[key][k]}`);
        }
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)