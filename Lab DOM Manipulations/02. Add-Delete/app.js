function addItem() {
    let $input=document.querySelector('#newText');
    let $items=document.querySelector('#items');

    let element=document.createElement('li');
    element.textContent=$input.value+' ';

    let deleteLink=document.createElement('a');
    deleteLink.textContent='[Delete]';
    deleteLink.href='#';
    deleteLink.addEventListener('click', deleteItem);

    element.appendChild(deleteLink);
    $items.appendChild(element);
    $input.value='';

    function deleteItem() {
        $items.removeChild(element);
    }
}