function solve(string1, char, string2){
    string1=string1.replace('_',char);
    if (string1==string2) {
        console.log('Matched');
    } else{
        console.log('Not Matched');
    }
}