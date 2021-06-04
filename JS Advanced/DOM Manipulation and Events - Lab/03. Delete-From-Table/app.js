function deleteByEmail() {
    let tableElements = document.querySelectorAll('td:nth-child(2)');
    let deleteByEmailInputElement = document.getElementsByName('email');
    let divResultElement = document.getElementById('result');

    for (const element of tableElements) {
        if (element.textContent == deleteByEmailInputElement[0].value) {
            console.log(element.textContent);
            element.parentElement.remove(element);
            divResultElement.textContent = 'Deleted';
        } else {
            divResultElement.textContent = 'Not found.';
        }
    }


    deleteByEmailInputElement[0].value = ''
}