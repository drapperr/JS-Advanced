function solve() {
    let text= document.querySelector('#text').value;
    let num= document.querySelector('#number').value;
    let result= document.querySelector('#result');

    result.textContent=splitString(text,num);
    
    function splitString(string, num) {
        let counter=0;
        while (string.length % num > 0) {
            string +=string[counter];
            if (counter===string.length-1) {
                counter=0;
            }else{
                counter++;
            }
        }
        let regx= string.match(new RegExp(`.{${num}}`,'g'))
        return regx.join(' ');
    }
}