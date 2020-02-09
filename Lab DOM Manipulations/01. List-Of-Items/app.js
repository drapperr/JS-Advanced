function addItem() {
    let $input=document.querySelector('#newItemText');
    let $items=document.querySelector('#items');

    let element=document.createElement('li');
    element.textContent=$input.value;
    $items.appendChild(element);
    $input.value='';
}