function solve(arr){
    console.log(sum(arr));
    console.log(sumInv(arr));
    console.log(concat(arr));

    function sum(arr){
        let sum=0;
        for (let i = 0; i < arr.length; i++) {
            sum+=arr[i];
        }
        return sum;
    }

    function sumInv(arr){
        let sum=0;
        for (let i = 0; i < arr.length; i++) {
            sum+=1/arr[i];
        }
        return sum;
    }

    function concat(arr){
        let result='';
        for (let i = 0; i < arr.length; i++) {
            result+=arr[i].toString();
        }
        return result;
    }
}