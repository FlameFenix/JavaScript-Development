function validate() {
    let textInput = document.querySelector('#email');
    let regex = /^[a-z]+@[a-z]+\.[a-z]+$/gm;
    textInput.addEventListener('change', () => {
        if(textInput.value.match(regex)) {
            textInput.className = '';
        } else {
            textInput.className = 'error';
        }
    })
}