function validate() {

    let emailInput = document.getElementById('email');  
    emailInput.addEventListener('change', (e) => {
        let emailRegex = /\w+@\w+\.\w+/;
        let isValid = emailRegex.test(e.target.value);
        console.log(isValid);
        console.log(e.target.value);
        if(isValid) {   
            emailInput.classList.remove('error');
        } else {
            emailInput.classList.add('error');
        }
    });
    // TODO
}