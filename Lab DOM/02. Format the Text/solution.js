function solve() {
  let input=document.getElementById('input');
  let text=input.innerHTML;
  let sentences=text.split('.');
  let output=document.getElementById('output');

  for (let i = 0; i < sentences.length-1; i+=3) {
    let currentText=sentences[i]+'. ';

    if (i+1<sentences.length-1) {
      currentText+=sentences[i+1]+'. ';
    }

    if (i+2<sentences.length-1) {
      currentText+=sentences[i+2]+'.';
    }

    let paragraph=document.createElement('p');
    paragraph.innerHTML=currentText;
    output.appendChild(paragraph);
  }
}