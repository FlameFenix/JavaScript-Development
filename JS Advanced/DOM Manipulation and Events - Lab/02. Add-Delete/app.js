function addItem() {
    let newItemInputElement = document.getElementById('newItemText');
    let listOfItemsElement = document.querySelector('#items');
    
    let newItem = document.createElement('li');
    newItem.textContent = newItemInputElement.value;

    let deleteBtn = document.createElement('a');
    deleteBtn.setAttribute('href', '#');
    deleteBtn.textContent = '[Delete]';

    newItem.appendChild(deleteBtn);
    listOfItemsElement.appendChild(newItem);

    deleteBtn.addEventListener('click', () => {
        listOfItemsElement.removeChild(deleteBtn.parentElement);
    });

    newItemInputElement.value = '';
    //TODO...
}