// You will receive an array of strings. For each string, create a div with a paragraph with the string in it. Each paragraph is initially 
// hidden (display:none). Add a click event listener to each div that displays the hidden paragraph. 
// Finally, you should append all divs to the element with an id "content".

function create(words) {

   let outputDiv = document.getElementById("content")
   for (const word of words) {

      let divs = document.createElement('div')
      let paragraph = document.createElement('p')
      paragraph.textContent = word
      paragraph.style.display = "none"
      divs.appendChild(paragraph)

      divs.addEventListener('click', function (e) {
         let divsRef = e.currentTarget
         let paragraphRef = divsRef.children[0]
         paragraph.style.display = "block"
      })


      outputDiv.appendChild(divs)
   }


}