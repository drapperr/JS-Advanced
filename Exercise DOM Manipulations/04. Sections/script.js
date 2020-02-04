function create(words) {
   const content=document.querySelector('#content');
   words.forEach(word => {
      let newDiv=document.createElement('div');
      let newPar=document.createElement('p');
      newPar.textContent=word;
      newPar.style.display='none';
      newDiv.appendChild(newPar);
      newDiv.addEventListener('click',()=>{
         newPar.style.display='block';
      });
      content.appendChild(newDiv);
   });
}