function solve() {
    let word=document.querySelector('#word').value;
    let arr=document.querySelector('#text').value;
    let output=document.querySelector('#result');

    output.innerHTML=replace(word,JSON.parse(arr));

    function replace(word,arr){
        let expectedWord=arr[0].split(' ')[2];
        let regex=new RegExp(`${expectedWord}`,'gi')
        let result=[];
    
        arr.forEach(el => {
            result.push(el.replace(regex,word));
        });
    
        return result.map(x=>`<p>${x}</p>`).join('');
    }
}

