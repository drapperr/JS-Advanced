function game(armyArr, battleArr) {
    const armies = armyArr.reduce((acc, data) => {

        if (!acc[data.kingdom]) {
            acc[data.kingdom] = {};
        }
        if (!acc[data.kingdom][data.general]) {
            acc[data.kingdom][data.general] = 0;
        } 

        acc[data.kingdom][data.general] += data.army;

        return acc;
    }, {});
    console.log(armies);
}

console.log(game([{ kingdom: "Maiden Way", general: "Merek", army: 5000 },
{ kingdom: "Stonegate", general: "Ulric", army: 4900 },
{ kingdom: "Stonegate", general: "Doran", army: 70000 },
{ kingdom: "YorkenShire", general: "Quinn", army: 0 },
{ kingdom: "YorkenShire", general: "Quinn", army: 2000 },
{ kingdom: "Maiden Way", general: "Berinon", army: 100000 }],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
    ["Stonegate", "Ulric", "Stonegate", "Doran"],
    ["Stonegate", "Doran", "Maiden Way", "Merek"],
    ["Stonegate", "Ulric", "Maiden Way", "Merek"],
    ["Maiden Way", "Berinon", "Stonegate", "Ulric"]]
));