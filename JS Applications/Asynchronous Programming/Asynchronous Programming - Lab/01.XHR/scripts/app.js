function loadRepos() {

   let baseUrl = 'https://api.github.com/users/testnakov/repos';

   let div = document.getElementById('res');

   const httpRequest = new XMLHttpRequest();

   httpRequest.addEventListener('readystatechange', function () {

      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
         div.textContent = httpRequest.responseText;
      }

   });

   httpRequest.open("GET", baseUrl);
   httpRequest.send();
   
}