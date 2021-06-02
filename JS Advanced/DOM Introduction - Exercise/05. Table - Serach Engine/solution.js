function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   function onClick() {
      //   TODO:
      let list = Array.from(document.querySelectorAll('tbody tr'));
      let search = document.getElementById('searchField').value;

      list.forEach(row => {
         row.className = '';
      });

      for (const row of list) {
            if (row.textContent.includes(search)) {
               row.className = 'select';
            }
      }

      document.getElementById('searchField').value = '';
   }
}