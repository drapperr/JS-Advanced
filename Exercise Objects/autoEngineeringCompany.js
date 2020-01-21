function solve(arr){
    const cars={};

    for (const element of arr) {
        const parts=element.split(' | ')
        let brand= parts[0];
        let model= parts[1];
        let count=+parts[2];

        if (!Object.keys(cars).some(x=>x==brand)) {
            cars[brand]={};
        }
        if (!Object.keys(cars[brand]).some(x=>x==model)) {
            cars[brand][model]=0;
        }
        cars[brand][model]+=count;
    }

    for (const key in cars) {
        console.log(key);

        for (const k in cars[key]) {
            console.log(`###${k} -> ${cars[key][k]}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)
