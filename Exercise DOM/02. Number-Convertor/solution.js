function solve() {
    let binnaryElement = document.createElement('option');
    binnaryElement.setAttribute('value', 'binary');
    binnaryElement.innerText = 'Binary';

    let hexaElement = document.createElement('option');
    hexaElement.setAttribute('value', 'hexadecimal');
    hexaElement.innerText = 'Hexadecimal';

    let menuTo = document.getElementById('selectMenuTo');
    menuTo.appendChild(binnaryElement);
    menuTo.appendChild(hexaElement);

    let button = document.getElementsByTagName('button')[0];
    let input=document.getElementById('input');
    let resultBox = document.getElementById('result');

    button.addEventListener('click', (e) => {
        switch (menuTo.value) {
            case 'binary':
                resultBox.value= (+input.value).toString(2);
                break;
            case 'hexadecimal':
                resultBox.value= (+input.value).toString(16).toUpperCase();
                break;
        }
    });
}