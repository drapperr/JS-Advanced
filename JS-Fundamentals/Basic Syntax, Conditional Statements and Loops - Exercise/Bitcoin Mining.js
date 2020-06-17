function solve(shift){
    let firstDay=0;
    let money=0;
    let bitcoinsCount=0;

    for (let i = 0; i < shift.length; i++) {
        const goldGrams = shift[i];
        
        let currentMoney=goldGrams*67.51;

        if ((i+1)%3==0) {
            currentMoney*=0.7;
        }

        money+=currentMoney;

        while (money>=11949.16) {
            money-=11949.16;
            bitcoinsCount++;

            if (firstDay==0) {
                firstDay=i+1;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoinsCount}`);
    if (bitcoinsCount>0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
