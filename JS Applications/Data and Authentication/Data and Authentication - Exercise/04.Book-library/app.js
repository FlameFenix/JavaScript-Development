let baseUrl = 'http://localhost:3030/jsonstore/collections/books';
let loadBtn = document.getElementById('loadBooks');
let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    let title = formData.get('title');
    let author = formData.get('author');

    if (title.trim() == '' || author.trim() == '') {
        return;
    }

    let obj = {
        author,
        title
    }

    request(baseUrl, 'post', obj);
})

loadBtn.addEventListener('click', (e) => {
    request(baseUrl, 'Get', null);
})

function request(url, method, obj) {
    if (method.toLowerCase() == 'get') {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let tbody = document.querySelector('tbody');
                tbody.textContent = '';
                console.log(data);

                for (const book in data) {

                    let tr = document.createElement('tr');
                    let authorTd = document.createElement('td');
                    let titleTd = document.createElement('td');
                    let editBtn = document.createElement('button');
                    editBtn.textContent = 'Edit';
                    let deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';

                    deleteBtn.addEventListener('click', (e) => {
                        request(baseUrl + `/${data[book]._id}`, 'DELETE', null);
                    })

                    editBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        let editForm = document.getElementById('editForm');
                        editForm.style.display = 'block';
                        form.style.display = 'none';
                        editForm.addEventListener('submit', (e) => {

                            e.preventDefault();

                            let formData = new FormData(e.currentTarget);
                            let title = formData.get('title');

                            let author = formData.get('author');

                            if (title.trim() == '' || author.trim() == '') {
                                return;
                            }

                            let obj = {
                                author,
                                title
                            }

                            request(baseUrl + `/${data[book]._id}`, 'put', obj);

                            editForm.style.display = 'none';
                            form.style.display = 'block';
                        });
                    });

                    let btnsTd = document.createElement('td');
                    btnsTd.appendChild(deleteBtn);
                    btnsTd.appendChild(editBtn);
                    authorTd.textContent = data[book].author;
                    titleTd.textContent = data[book].title;
                    tr.appendChild(authorTd);
                    tr.appendChild(titleTd);
                    tr.appendChild(btnsTd);
                    tbody.appendChild(tr);
                }
            });
    } else if (method.toLowerCase() == 'post') {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        })
    } else if (method.toLowerCase() == 'delete') {
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    } else if (method.toLowerCase() == 'put') {
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
    }
}