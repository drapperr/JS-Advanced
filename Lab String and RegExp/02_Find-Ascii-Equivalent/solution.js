function solve() {
  let input=document.querySelector('#text').value;
  let output=document.querySelector('#result');

  output.innerHTML=find(input);

  function find(input){
    let args=input.split(' ');
    let result=[];
    let word='';
  
    args.forEach(e => {
      let num= Number(e);
      if (isNaN(num)) {
        let chars=[];
        for (let c of e) {
          chars.push(c.charCodeAt(0));
        }
        result.push(chars.join(' '));
      }else{
        word+= String.fromCharCode(num);
      }
    });
    result.push(word);
  
    return result.map(x=>`<p>${x}</p>`).join('');
  }
}

