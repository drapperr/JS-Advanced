function solve(number){
    for (let i = 1; i <= number; i++) {
        let line='';
        for (let j = 1; j <= i; j++) {
            line+=i+' ';
        }
        console.log(line);
    }
}