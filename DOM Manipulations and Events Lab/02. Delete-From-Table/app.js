function deleteByEmail() {
    let inputText = document.querySelector('input[name="email"]').value
    let emailTables = document.querySelectorAll('tr td:nth-of-type(2)')
    let result = document.getElementById('result')

    let arrOfEmailTables = Array.from(emailTables)

    let target = arrOfEmailTables.find(x => x.textContent == inputText)
    if (target) {
        target.parentNode.remove()
        result.textContent = "Deleted."
    } else {
        result.textContent = "Not found."
    }


}