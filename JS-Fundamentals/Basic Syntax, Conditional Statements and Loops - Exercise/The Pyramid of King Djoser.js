function solve(base,increment){
    let totalStone=0;
    let totalMarble=0;
    let totalLapis=0;
    let totalGold=0;
    let lastLine=0;
    let height=1;

    if (base%2==0) {
        totalGold=4;
        lastLine=4;
    } else{
        totalGold=1;
        lastLine=3;
    }

    for (let i = base; i >= lastLine; i-=2) {
        let currentStone=(i-2)*(i-2);

        if (height%5==0) {
            totalLapis+=i*i-currentStone;
        } else{
            totalMarble+=i*i-currentStone;
        }

        height++;
        totalStone+=currentStone;
    }

    totalStone*=increment;
    totalMarble*=increment;
    totalLapis*=increment;
    totalGold*=increment;
    height*=increment;
    
    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}