function solve(arr) {
    let speed = arr[0];
    let area = arr[1];

    let limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    }

    let result='';

    if (speed <= limits[area]) {
        result='';
    } else if ((speed-limits[area])<=20) {
        result='speeding';
    } else if((speed-limits[area])<=40){
        result='excessive speeding';
    } else {
        result='reckless driving';
    }

    console.log(result);
}