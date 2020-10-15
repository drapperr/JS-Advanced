function solve(number){
    let sumOfDigits=0;
    number=number.toString();
    
    for (let i = 0; i < number.length; i++) {
        sumOfDigits+=Number(number[i]);
    }

    if (sumOfDigits.toString().includes('9')) {
        console.log(`${number} Amazing? True`);
    } else{
        console.log(`${number} Amazing? False`);
    }
}