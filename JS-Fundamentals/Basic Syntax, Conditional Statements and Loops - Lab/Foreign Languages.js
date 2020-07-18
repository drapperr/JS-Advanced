function solve(country){
    let result;

    if (country=='England'||country=='USA') {
        result='English';
    } else if (country=='Spain'||country=='Argentina'||country=='Mexico') {
        result='Spanish';
    } else{
        result='unknown'
    }

    console.log(result)
}