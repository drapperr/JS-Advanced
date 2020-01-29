function parseToJSON(arr){
    const towns=[];

    let firstLineParts=arr[0].split('|').filter(Boolean);
    let firstColName=firstLineParts[0].trim();
    let secondColName=firstLineParts[1].trim();
    let thirdColName=firstLineParts[2].trim();

    for (let i = 1; i < arr.length; i++) {
        let line=arr[i].split('|').filter(Boolean);

        const town={};
        town[firstColName]=line[0].trim();
        town[secondColName]= +(+line[1]).toFixed(2);
        town[thirdColName]= +(+line[2]).toFixed(2);

        towns.push(town);
    }

    console.log(JSON.stringify(towns));
}

parseToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)