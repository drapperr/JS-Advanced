function solve(num){
    let sum=0;
    let allIsSame=true;
    num=num.toString();

    for (let i = 0; i < num.length; i++) {
        if (num[i]!==num[0]) {
            allIsSame=false;
        }
        sum+= +num[i];
    }

    console.log(allIsSame);
    console.log(sum);
}