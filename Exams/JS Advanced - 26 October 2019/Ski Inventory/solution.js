function solve() {
   const avaibleProducts = document.querySelector('#products ul');
   const inputName = document.querySelectorAll('#add-new input')[0];
   const inputQuantity = document.querySelectorAll('#add-new input')[1];
   const inputPrice = document.querySelectorAll('#add-new input')[2];
   const addBtn = document.querySelector('#add-new button');
   const myProducts=document.querySelector('#myProducts ul');
   const filterBtn=document.querySelector('.filter button');
   const filterInput=document.querySelector('#filter');
   const totalElement=document.querySelectorAll('h1')[1];
   const buyBtn=document.querySelector('#myProducts button')

   addBtn.addEventListener('click', addProduct);

   filterBtn.addEventListener('click',filter);

   buyBtn.addEventListener('click',clear);

   function clear(){
      myProducts.innerHTML='';
      totalElement.innerHTML='Total Price: 0.00'
   }

   function addProduct(e){
      e.preventDefault();
      let newLi=document.createElement('li');

      let spanElement=document.createElement('span');
      spanElement.innerHTML=inputName.value;

      let strongElement=document.createElement('strong');
      strongElement.innerHTML=`Available: ${inputQuantity.value}`;

      let divElement=document.createElement('div');

      let strElement=document.createElement('strong');
      strElement.innerHTML=Number(inputPrice.value).toFixed(2);
      
      let addToListBtn=document.createElement('button');
      addToListBtn.innerHTML="Add to Client's List"
      addToListBtn.addEventListener('click',addToList);

      divElement.appendChild(strElement);
      divElement.appendChild(addToListBtn);

      newLi.appendChild(spanElement);
      newLi.appendChild(strongElement);
      newLi.appendChild(divElement);

      avaibleProducts.appendChild(newLi);

      inputName.value='';
      inputQuantity.value='';
      inputPrice.value='';
   }


   function addToList(e){
      let price=Number(e.target.parentNode.querySelector('strong').innerHTML);
      let name=e.target.parentNode.parentNode.querySelector('span').innerHTML;
      let avaibleElement=e.target.parentNode.parentNode.querySelector('strong');

      let count=Number(avaibleElement.innerHTML.replace('Available: ',''));
      if (count===1) {
         e.target.parentNode.parentNode.remove();
      }else{
         count--;
         avaibleElement.innerHTML=`Available: ${count}`;
      }
      let current=Number(totalElement.innerHTML.replace('Total Price: ',''));
      current+=price;
      totalElement.innerHTML=`Total Price: ${current.toFixed(2)}`;

      let myLi=document.createElement('li');
      myLi.innerHTML=name;
      let strongElement=document.createElement('strong');
      strongElement.innerHTML=price.toFixed(2);
      myLi.appendChild(strongElement);

      myProducts.appendChild(myLi); 
   }

   function filter(){
      Array.from(avaibleProducts.children).forEach(element => {
         let name =element.querySelector('span').innerText.toLowerCase();

         if (name.includes(filterInput.value.toLowerCase())) {
            element.style.display='block';
         }else{
            element.style.display='none';
         }
      });
      filterInput.value='';
   }
}