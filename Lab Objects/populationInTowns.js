function sumPopulation(arr){
    const populations={};

    for (city of arr) {
        const cityParts=city.split(' <-> ');
        let cityName=cityParts[0];
        let data= +cityParts[1];

        if (Object.keys(populations).some(x=>x===cityName)) {
            populations[cityName]+=data;
        } else{
            populations[cityName]=data;
        }
    }

    for (const city in populations) {
        console.log(`${city} : ${populations[city]}`);
    }
}

sumPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)