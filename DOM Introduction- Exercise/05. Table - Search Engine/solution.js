function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let search = document.getElementById('searchField')
   let tableNames = document.querySelectorAll('tbody tr')      

   function onClick() {


      for (let el of tableNames) {
         el.classList.remove('select');
         if (search.value !== '' && el.innerHTML.includes(search.value)) {
            el.className = 'select'
         }
      }
   }
   search.value = ''
}