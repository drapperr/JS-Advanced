function solve() {
   const avaibleProducts = document.querySelector('#products ul');
   const inputName = document.querySelectorAll('#add-new input')[0];
   const inputQuantity = document.querySelectorAll('#add-new input')[1];
   const inputPrice = document.querySelectorAll('#add-new input')[2];
   const addBtn = document.querySelector('#add-new button');

   addBtn.addEventListener('click', addProduct);

   function addProduct(e){
      e.preventDefault();
      let newLi=document.createElement('li');

      let spanElement=document.createElement('span');
      spanElement.innerHTML=inputName.value;

      let strongElement=document.createElement('strong');
      strongElement.innerHTML=`Avaible: ${inputQuantity.value}`;

      let divElement=document.createElement('div');

      let strElement=document.createElement('strong');
      strElement.innerHTML=inputPrice.value;
      
      let addToListBtn=document.createElement('button');
      addToListBtn.innerHTML="Add to Clint's List"
      addToListBtn.addEventListener('click',addToList);

      divElement.appendChild(strElement);
      divElement.appendChild(addToListBtn);

      newLi.appendChild(spanElement);
      newLi.appendChild(strongElement);
      newLi.appendChild(divElement);

      avaibleProducts.appendChild(newLi);
   }

   function addToList(){
      
   }
}