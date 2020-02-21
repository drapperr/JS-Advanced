function solve(arr,startIndex,endIndex){
    if (!Array.isArray(arr)) {
        return NaN;
    }
    startIndex=Math.max(startIndex,0);
    endIndex=Math.min(endIndex,arr.length-1);
    let sum=0;
    for (let i = startIndex; i <= endIndex; i++) {
        sum+= Number(arr[i])
    }

    return sum;
}

console.log(solve({}, 0, 2))