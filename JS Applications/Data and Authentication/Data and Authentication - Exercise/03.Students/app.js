let url = 'http://localhost:3030/jsonstore/collections/students';

let form = document.getElementById('form');
let submitBtn = document.getElementById('submit');

let table = document.querySelector('#results tbody');

request(url, 'get', null);

submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    let formData = new FormData(form);

    let firstName = formData.get('firstName');
    let lastName = formData.get('lastName');
    let facultyNumber = formData.get('facultyNumber');
    let grade = Number(formData.get('grade'));

    if (firstName.trim() == '' || lastName.trim() == ''
        || facultyNumber.trim() == '' || isNaN(grade)) {
        return;
    }

    let obj = {
        firstName,
        lastName,
        facultyNumber,
        grade,
    }

     request(url, 'POST', obj);
     request(url, 'get', null);

})



function request(url, method, obj) {
    if (method.toLowerCase() == 'get') {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                table.textContent = '';
                for (const student in data) {
                    let tableRow = document.createElement('tr');
                    let firstName = document.createElement('td');
                    let lastName = document.createElement('td');
                    let facultyNumber = document.createElement('td');
                    let grade = document.createElement('td');

                    firstName.textContent = data[student].firstName;
                    lastName.textContent = data[student].lastName
                    facultyNumber.textContent = data[student].facultyNumber;
                    grade.textContent = Number(data[student].grade).toFixed(2);
                    tableRow.appendChild(firstName);
                    tableRow.appendChild(lastName)
                    tableRow.appendChild(facultyNumber)
                    tableRow.appendChild(grade);
                    table.appendChild(tableRow);
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
    }
}
