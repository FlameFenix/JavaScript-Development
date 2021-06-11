function lockedProfile() {

    let profileElements = Array.from(document.querySelectorAll('.profile'));

    for (const profile of profileElements) {
        let inputElements = Array.from(profile.querySelectorAll('input:checked'))
            .filter(x => x.type == 'radio');
        for (const radioBtns of inputElements) {
            {
                
            }
        }
    }

}
