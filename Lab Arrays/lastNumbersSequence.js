function solve(n,k){
    const arr=[1];

    for (let i = 0; i < n-1; i++) {
        let sum=arr.slice(-k).reduce((a,c)=> a+c,0);
        arr.push(sum);
    }

    console.log(arr.join(' '));
}