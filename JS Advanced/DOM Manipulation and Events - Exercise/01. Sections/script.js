function create(words) {
   let divElement = document.getElementById('content');

   for (const element of words) {
      let newDivElement = document.createElement('div');
      let newParagraphElement = document.createElement('p');

      newParagraphElement.textContent = element;
      newParagraphElement.style.display = 'none';

      newDivElement.appendChild(newParagraphElement);
      divElement.appendChild(newDivElement);

      divElement.addEventListener('click', showParagraph)
   }


   function showParagraph(e) {
      e.target.children[0].style.display = '';
   }
}