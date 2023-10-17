function notify(message) {

  const content = document.getElementById('notification')
  content.innerText = message
  content.style.display = "block"

  content.addEventListener('click', (e) => {
    e.target.style.display = "none"
   
  })


}