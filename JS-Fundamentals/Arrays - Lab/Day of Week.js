function solve(number){
    let arr=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    if (number>=1&&number<=7) {
        console.log(arr[number-1]);
    } else {
        console.log('Invalid day!');
    }
}