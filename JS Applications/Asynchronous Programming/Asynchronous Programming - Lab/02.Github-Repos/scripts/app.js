function loadRepos() {
	let reposUrl = 'https://api.github.com/users';
	let username = document.getElementById('username');
	
	fetch(reposUrl + `/${username.value}/repos`)
	.then(response => response.json())
	.then(data =>
		data.forEach(el => {
			console.log(el);
			let ulElement = document.getElementById('repos');
			let liElement = document.createElement('li');
			let aElement = document.createElement('a');
			aElement.textContent = el['full_name'];
			aElement.href = el['html_url'];
			liElement.appendChild(aElement);
			ulElement.appendChild(liElement);
		})
	);
}