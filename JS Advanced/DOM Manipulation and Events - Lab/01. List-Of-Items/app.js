function addItem() {
    let listOfItems = document.getElementById('items');
    
    let newItemName = document.getElementById('newItemText');
    let newItem = document.createElement('li');
    newItem.textContent = newItemName.value;
    listOfItems.appendChild(newItem);
}