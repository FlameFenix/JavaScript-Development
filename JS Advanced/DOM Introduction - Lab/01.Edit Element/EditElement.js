function editElement(documentElement, stringToReplace, newString) {

    let currentText = documentElement.textContent;
    
    while(currentText.includes(stringToReplace)){
        currentText = currentText.replace(stringToReplace, newString);
    }

    documentElement.textContent = currentText;
    // TODO
}