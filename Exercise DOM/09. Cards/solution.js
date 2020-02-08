function solve() {
   let cards = document.querySelector('.cards');
   let result = document.querySelector('#result').children;
   let history = document.querySelector('#history');
   let firstCard,secondCard;

   cards.addEventListener('click', (e) => {
      let card = e.target.name;
      if (!card) {
         return;
      }
      e.target.src = 'images/whiteCard.jpg';
      if (result[0].innerHTML !== '' && result[2].innerHTML !== '') {
         
         result[0].innerHTML = '';
         result[2].innerHTML = '';
      }

      if (e.target.parentElement.id === 'player1Div') {
         result[0].innerHTML = card;
         firstCard=e.target;
      } else if (e.target.parentElement.id === 'player2Div') {
         result[2].innerHTML = card;
         secondCard=e.target;
      }

      if (result[0].innerHTML !== '' && result[2].innerHTML !== '') {
         if (+result[0].innerHTML > +result[2].innerHTML) {
            firstCard.style.border='2px solid green';
            secondCard.style.border='2px solid red';
         } else {
            secondCard.style.border='2px solid green';
            firstCard.style.border='2px solid red';
         }
         history.innerHTML += `[${result[0].innerHTML} vs ${result[2].innerHTML}] `;
      }
   });
}