function game(armyArr, battleArr) {
    const armies = armyArr.reduce((acc, data) => {
        if (!acc[data.kingdom]) {
            acc[data.kingdom] = {};
            acc[data.kingdom].totalWins=0;
            acc[data.kingdom].totalLoses=0;
        }
        if (!acc[data.kingdom][data.general]) {
            acc[data.kingdom][data.general]={};
            acc[data.kingdom][data.general].army = 0;
            acc[data.kingdom][data.general].wins = 0;
            acc[data.kingdom][data.general].loses = 0;
        } 

        acc[data.kingdom][data.general].army += data.army;

        return acc;
    }, {});

    battleArr.forEach(battleParts => {
        let [attackingKingdom,attackingGeneral,defendingKingdom,defendingGeneral]=battleParts;
        
        if (attackingKingdom!=defendingKingdom && 
            armies[attackingKingdom][attackingGeneral]&&
            armies[defendingKingdom][defendingGeneral]&&
            armies[attackingKingdom][attackingGeneral].army!=armies[defendingKingdom][defendingGeneral].army) {
            if (armies[attackingKingdom][attackingGeneral].army>armies[defendingKingdom][defendingGeneral].army) {
                armies[attackingKingdom][attackingGeneral].army+=Math.floor(armies[attackingKingdom][attackingGeneral].army*0.1);
                armies[defendingKingdom][defendingGeneral].army-=Math.ceil(armies[defendingKingdom][defendingGeneral].army*0.1);
                armies[attackingKingdom][attackingGeneral].wins++;
                armies[attackingKingdom].totalWins++;
                armies[defendingKingdom][defendingGeneral].loses++;
                armies[defendingKingdom].totalLoses++;
            } else{
                armies[defendingKingdom][defendingGeneral].army+=Math.floor(armies[defendingKingdom][defendingGeneral].army*0.1);
                armies[attackingKingdom][attackingGeneral].army-=Math.ceil(armies[attackingKingdom][attackingGeneral].army*0.1);
                armies[defendingKingdom][defendingGeneral].wins++;
                armies[defendingKingdom].totalWins++;
                armies[attackingKingdom][attackingGeneral].loses++;
                armies[attackingKingdom].totalLoses++;
            }
        }
    });
    const sortedkeys=Object.keys(armies).sort((a,b)=>(armies[b].totalWins-armies[a].totalWins)||
    (armies[a].totalLoses-armies[b].totalLoses) ||a.localeCompare(b));

    const winnerKingdom=armies[sortedkeys[0]];

    delete winnerKingdom.totalLoses;
    delete winnerKingdom.totalWins;

    console.log(`Winner: ${sortedkeys[0]}`);
    
    Object.keys(winnerKingdom).sort((a,b)=> winnerKingdom[b].army-winnerKingdom[a].army).forEach(general=>{
        console.log(`/\\general: ${general}`);
        console.log(`---army: ${winnerKingdom[general].army}`)
        console.log(`---wins: ${winnerKingdom[general].wins}`)
        console.log(`---losses: ${winnerKingdom[general].loses}`)
    })
}

game([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
{ kingdom: "Stonegate", general: "Ulric", army: 4900 },
{ kingdom: "Stonegate", general: "Doran", army: 70000 },
{ kingdom: "YorkenShire", general: "Quinn", army: 0 },
{ kingdom: "YorkenShire", general: "Quinn", army: 2000 } ],
[ ["YorkenShire", "Quinn", "Stonegate", "Doran"],
["Stonegate", "Ulric", "Maiden Way", "Merek"] ]
)