function search() {
   let elements = Array.from(document.querySelectorAll('li'));
   let letters = document.getElementById('searchText').value;
   let count = 0;

   for (const element of elements) {
      if(element.textContent.includes(letters)) {
         element.style.textDecoration = 'underline';
         element.style.fontWeight = 'bold';
         count++;
      }
   }

   document.getElementById('result').textContent = `${count} matches found`;
   // TODO
}
