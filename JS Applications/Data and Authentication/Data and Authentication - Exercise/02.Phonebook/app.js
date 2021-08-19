function attachEvents() {
    let btnLoad = document.getElementById('btnLoad');
    let btnCreate = document.getElementById('btnCreate');

    let personElement = document.getElementById('person');
    let phonelement = document.getElementById('phone');

    let phoneBookElement = document.getElementById('phonebook');

    let urlGetandPost = 'http://localhost:3030/jsonstore/phonebook';

    btnCreate.addEventListener('click', () => {

        let obj = {
            "person": personElement.value,
            "phone": phonelement.value
        }

        fetch(urlGetandPost, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        })

        personElement.value = '';
        phonelement.value = '';
    })

    btnLoad.addEventListener('click', () => {
        fetch(urlGetandPost)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                for (const obj in data) {
                    let personElement = document.createElement('li');
                    let deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';

                    deleteBtn.addEventListener('click', () => {
                        fetch(urlGetandPost + `/${data[obj]._id}`, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        })
                    })

                    personElement.textContent = `${data[obj].person}: ${data[obj].phone}`;
                    personElement.appendChild(deleteBtn);
                    phoneBookElement.appendChild(personElement);
                }


            })
    })
}

attachEvents();