function lockedProfile() {

    let buttons = Array.from(document.getElementsByTagName('button'))
    .map(x => x.addEventListener('click', ShowHideBtns));

    function ShowHideBtns(event) {

        let parentDiv = event.target.parentElement;
        let radioBtn = parentDiv.getElementsByTagName('input')[0];
        let hiddenDiv = parentDiv.getElementsByTagName('div')[0];

        if(radioBtn.checked) {

        } else {

            let btnStatus = event.target.textContent;

            if(btnStatus == 'Show more') {
                hiddenDiv.style.display = 'block';
                event.target.textContent = 'Hide it'; 

            } else if(btnStatus == 'Hide it') {
                hiddenDiv.style.display = 'none';
                event.target.textContent = 'Show more'; 
            }
                         
        }
       
    }
}
