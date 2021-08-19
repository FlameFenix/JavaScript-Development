function attachEvents() {
    let url = 'http://localhost:3030/jsonstore/messenger';

    let messageElement = document.getElementById('messages')

    let submitBtn = document.querySelector('#submit');
    let refreshBtn = document.querySelector('#refresh');

    let authorElement = document.querySelector('input[name="author"]');
    let contentElement = document.querySelector('input[name="content"]')

    submitBtn.addEventListener('click', () => {
        let obj = {
            author: authorElement.value,
            content: contentElement.value,
        }
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        })
    })

    refreshBtn.addEventListener('click', () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            for (const obj in data) {
                messageElement.value += `${data[obj].author}: ${data[obj].content}\n`;
            }
            console.log(data);
        })
    })
}

attachEvents();