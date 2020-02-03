function addItem() {
    const menu = document.querySelector('#menu');
    const itemText = document.querySelector('#newItemText');
    const itemValue = document.querySelector('#newItemValue');

    let newOption = document.createElement('option');
    newOption.value = itemValue.value;
    newOption.textContent = itemText.value;

    menu.appendChild(newOption);
    itemText.value = '';
    itemValue.value = '';
}