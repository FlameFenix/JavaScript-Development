function deleteByEmail() {
    let tableElements = document.querySelectorAll('td:nth-child(2)');
    let deleteByEmailInputElement = document.getElementsByName('email');
    let divResultElement = document.getElementById('result');
    let isFound = false;

    for (const element of tableElements) {
        if (element.textContent == deleteByEmailInputElement[0].value) {
            element.parentElement.remove(element);
            divResultElement.textContent = 'Deleted';
            isFound = true;
        }
    }

    if(!isFound) {
        divResultElement.textContent = 'Not found.';
    }

    deleteByEmailInputElement[0].value = ''
}