function solve() {
    let input=document.getElementsByTagName('input')[0];
    let list=document.getElementsByTagName('li');
    
    document.getElementsByTagName('button')[0]
    .addEventListener('click',()=>{
        let firstChar=input.value[0].toUpperCase();
        let lastChars=input.value.slice(1).toLowerCase();
        let index=firstChar.charCodeAt(0)-65;

        if (list[index].innerHTML!=='') {
            list[index].innerHTML+=', ';
        }
        list[index].innerHTML+=firstChar+lastChars;
    });
}