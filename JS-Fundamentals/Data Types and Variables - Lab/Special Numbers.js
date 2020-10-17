function solve(n){

    for (let i = 1; i <= n; i++) {
        let sumOfDigits=0;
        let number=i.toString();
    
        for (let i = 0; i < number.length; i++) {
             sumOfDigits+=Number(number[i]);
        }

        if (sumOfDigits==5||sumOfDigits==7||sumOfDigits==11) {
            console.log(`${i} -> True`);
        } else{
            console.log(`${i} -> False`);
        }
    }
}