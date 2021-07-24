async function solution() {

    let accElement = document.querySelector('.accordion')
    accElement.remove();

    let articles = await getArticles();

    let ID = articles.map(id => id._id);

    for (const id of ID) {
        let currentContent = await getContent(id);
        createElement(currentContent._id, currentContent.title, currentContent.content);
    }

    let btns = Array.from(document.getElementsByTagName('button'));
    console.log(btns);
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let divTarget = e.target.parentElement.parentElement.querySelector('.extra');
            divTarget.style.display = divTarget.style.display === 'none' ? 'block' : 'none';
            e.target.textContent = e.target.textContent === 'More' ? 'Less' : 'More';
        })
    });

}

solution()



function createElement(id, title, content) {

    let divElement = document.createElement('div');
    divElement.classList.add('accordion');

    let divHeadElement = document.createElement('div');
    divHeadElement.classList.add('head');

    let spanElement = document.createElement('span');
    spanElement.textContent = title;
    let buttonElement = document.createElement('button');
    buttonElement.classList.add('button');
    buttonElement.setAttribute('id', `${id}`);
    buttonElement.textContent = 'More';

    divHeadElement.appendChild(spanElement);
    divHeadElement.appendChild(buttonElement);
    divElement.appendChild(divHeadElement);

    let divExtraElement = document.createElement('div');
    divExtraElement.classList.add('extra');
    divExtraElement.style.display = 'none';
    let pElement = document.createElement('p');
    pElement.textContent = content;

    divExtraElement.appendChild(pElement);
    divElement.appendChild(divExtraElement);
    let mainElement = document.getElementById('main');
    mainElement.appendChild(divElement);
}

async function getArticles() {
    let url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    let response = await fetch(url);
    let data = await response.json();

    return data;
}

async function getContent(ID) {
    let url = 'http://localhost:3030/jsonstore/advanced/articles/details/' + ID;
    let response = await fetch(url);
    let data = await response.json();

    return data;

}