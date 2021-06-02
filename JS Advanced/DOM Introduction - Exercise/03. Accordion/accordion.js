function toggle() {

    let buttonOption = document.querySelector('.button').textContent;

    if(buttonOption === 'Less') {
        document.querySelector('.button').textContent = 'More'
        document.getElementById('extra').style.display = 'none';
    } else {
        document.querySelector('.button').textContent = 'Less'
        document.getElementById('extra').style.display = 'block';
        
    }

}