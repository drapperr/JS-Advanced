function solve() {
   let rows = document.getElementsByTagName('tbody')[0]
      .getElementsByTagName('tr');

   let searchField = document.getElementById('searchField');

   document.getElementById('searchBtn')
      .addEventListener('click', () => {
         for (let i = 0; i < Array.from(rows).length; i++) {
            rows[i].removeAttribute('class');
            let elements = rows[i].getElementsByTagName('td');
            let isFound = false;

            for (let j = 0; j < Array.from(elements).length; j++) {
               if (elements[j].innerHTML.toLowerCase()
                  .includes(searchField.value.toLowerCase())) {
                  isFound = true;
                  break;
               }
            }

            if (isFound) {
               rows[i].setAttribute('class','select');
            }
         }
         searchField.value='';
      });
}