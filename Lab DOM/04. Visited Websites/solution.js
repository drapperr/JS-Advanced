function solve() {
  document.querySelector('.middled').addEventListener('click',(e)=>{
    let p=e.target.parentElement.parentElement.children[1];
    let count=Number(p.innerHTML.split(' ')[1]);
    p.innerHTML=`visited ${++count} times`;
  });
}