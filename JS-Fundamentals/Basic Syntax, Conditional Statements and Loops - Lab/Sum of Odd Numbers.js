function solve(n){
    let sum=0;
    let counter=0;
    let i=1;

    while (counter<n) {
        console.log(i);
        sum+=i;
        i+=2;
        counter++;
    }

    console.log(`Sum: ${sum}`);
}
