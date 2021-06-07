function addItem() {
    let textElement = document.querySelector('#newItemText');
    let valueElement = document.querySelector('#newItemValue');
    let dropDownSelection = document.querySelector('#menu');

    let optionElement = document.createElement('option');

    optionElement.value = valueElement.value;
    optionElement.textContent = textElement.value;

    dropDownSelection.appendChild(optionElement);

    textElement.value = '';
    valueElement.value = '';
}