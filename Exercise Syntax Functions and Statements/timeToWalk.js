function solve(steps,stepLengthInMeters,speed){
    let totalMeters=steps*stepLengthInMeters;
    let breakTimeInMinutes=Math.floor(totalMeters/500);
    let walkTimeInHours=totalMeters/1000/speed;
    let totalTimeInSeconds=breakTimeInMinutes*60+walkTimeInHours*60*60;
    let hours=(Math.floor(totalTimeInSeconds/60/60)).toString().padStart(2, '0');
    let minutes=(Math.floor(totalTimeInSeconds/60)).toString().padStart(2, '0');
    let seconds=(Math.ceil(totalTimeInSeconds%60)).toString().padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}