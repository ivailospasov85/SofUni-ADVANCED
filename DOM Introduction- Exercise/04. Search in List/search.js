// An HTML page holds a list of towns, a search box, and a [Search] button. 
// Implement the search function to bold and underline the items from the list which include the text from the search box. 
// Also, print the number of items the current search matches in the format `${matches} matches found`.
// Note: It is necessary to clear the results of the previous search.
// Write your JavaScript code in this file:


function search() {

   let towns = Array.from(document.querySelectorAll('#towns li'))
   let search = document.getElementById('searchText').value
   let result = document.getElementById('result')


   let match = 0
   for (let town of towns) {

      if (town.textContent.includes(search) && search.length > 0) {

         town.style.fontWeight = 'bold'
         town.style.textDecoration = 'underline'

         match++

      } else {
         town.style.fontWeight = 'normal'
         town.style.textDecoration = 'none'

      }

   }

   result.textContent = `${match} matches found`
}