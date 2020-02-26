function solve() {
    let input=document.querySelector('#arr').value;
    let output=document.querySelector('#result');

    output.innerHTML=validate(JSON.parse(input));

    function validate(arr){
        let result=[];
        let regex=/^([A-Z][a-z]* [A-Z][a-z]*) (\+359( |-)[0-9]{1}\3[0-9]{3}\3[0-9]{3}) ([a-z\d]+@[a-z]+\.[a-z]{2,3})$/;
        arr.forEach(el => {
            let matched=el.match(regex);
            if (!matched) {
                result.push('Invalid data'); 
                result.push('- - -');
            } else{
                result.push(`Name: ${matched[1]}`)
                result.push(`Phone Number: ${matched[2]}`)
                result.push(`Email: ${matched[4]}`)
                result.push('- - -')
            }
        });
        return result.map(x=>`<p>${x}</p>`).join('');
    }
}



validate(["George Smith +359 2 123 456 George@gmail.com", "G Sa +359-5-759-684 valid@gmail.com", "Smith +359-5 789 654 smith@gmail.com"])