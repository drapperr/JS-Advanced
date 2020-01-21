function solve(arr){
    const juicesCounts={};
    const bottlesCounts={};

    for (const element of arr) {
        const parts=element.split(' => ');
        let juiceName=parts[0];
        let juiceCount= +parts[1];

        if (!Object.keys(juicesCounts).some(x=>x===juiceName)) {
            juicesCounts[juiceName]=0;
        }

        juicesCounts[juiceName]+=juiceCount;

        if (juicesCounts[juiceName]>=1000) {
            if (!Object.keys(bottlesCounts).some(x=>x===juiceName)) {
                bottlesCounts[juiceName]=0;
            }
            let currentbottles=Math.floor(juicesCounts[juiceName]/1000);
            bottlesCounts[juiceName]+=currentbottles
            juicesCounts[juiceName]-=currentbottles*1000;
        }
    }

    for (const key in bottlesCounts) {console.log(`${key} => ${bottlesCounts[key]}`)
    }
}

solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)