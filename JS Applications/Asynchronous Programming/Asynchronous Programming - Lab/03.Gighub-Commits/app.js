function loadCommits() {

    let username = document.getElementById('username');
    let repo = document.getElementById('repo');
    let commits = document.getElementById('commits');
    let liErrorElement = document.createElement('li');

    let url = `https://api.github.com/repos/${username.value}/${repo.value}/commits`;
    // Try it with Fetch API
    fetch(url)
        .then(response => {
            if (response.status == 404) {
                throw new Error(`Error: ${response.status} (Not Found)`);
            }
            return response.json();
        })
        .then(data =>

            data.forEach(el => {
                let liElement = document.createElement('li');
                liElement.textContent = `${el.commit.author.name}: ${el.commit.message}`;
                commits.appendChild(liElement);
            }))
        .catch(error => {
            liErrorElement.textContent = error.message
            commits.appendChild(liErrorElement);
        })
}