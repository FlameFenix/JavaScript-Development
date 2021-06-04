function focused() {
    let inputElement = Array.from(document.querySelectorAll('input'));
    for (const element of inputElement) {
        element.addEventListener('focus', (el) => {
            el.target.parentElement.className = 'focused';
        })

        element.addEventListener('blur', (el) => {
            el.target.parentElement.className = ' ';
        })
    }
}