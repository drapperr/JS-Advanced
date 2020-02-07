function solve() {
   let output = document.getElementsByTagName('textarea')[0];
   let total = 0;
   let list = {};

   function event(e) {
      let button = e.target;
      if (button.getAttribute('class') === 'add-product') {
         let productName = button.parentElement.parentElement.querySelector('.product-title').innerHTML;
         let price = button.parentElement.parentElement.querySelector('.product-line-price').innerHTML;

         output.innerHTML += `Added ${productName} for ${price} to the cart.\n`;
         total += +price;
         list[productName] = 0;

      } else if (button.getAttribute('class') === 'checkout') {
         output.innerHTML += `You bought ${Object.keys(list).join(', ')} for ${total.toFixed(2)}.`;
         shoppingCard.removeEventListener('click',event);
      }
   }

   let shoppingCard = document.getElementsByClassName('shopping-cart')[0];
   shoppingCard.addEventListener('click', event);
}