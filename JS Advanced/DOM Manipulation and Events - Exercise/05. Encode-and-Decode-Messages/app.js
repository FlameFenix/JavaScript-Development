function encodeAndDecodeMessages() {
    let buttonsElements = Array.from(document.querySelectorAll('button'));
    buttonsElements[0].addEventListener('click', () => {

            let parrentTag = buttonsElements[0].parentElement;
            let textArea = parrentTag.querySelector('textarea');
            let codedMessage = '';

            let secondButton = buttonsElements[1];
            let textAreaTwo = secondButton.parentElement.querySelector('textarea');

            for (let i = 0; i < textArea.value.length; i++) {
                let number = textArea.value.charCodeAt(i);
                codedMessage += String.fromCharCode(number + 1);
            }

            textArea.value = '';
            textAreaTwo.value = codedMessage;

        })

        buttonsElements[1].addEventListener('click', () => {

            let codedMessage = '';
            let secondButton = buttonsElements[1];
            let textAreaTwo = secondButton.parentElement.querySelector('textarea');

            for (let i = 0; i < textAreaTwo.value.length; i++) {
                let number = textAreaTwo.value.charCodeAt(i);
                codedMessage += String.fromCharCode(number - 1);
            }
            textAreaTwo.value = codedMessage;
        })
}