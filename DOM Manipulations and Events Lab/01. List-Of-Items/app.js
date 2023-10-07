function addItem() {
    let items = document.getElementById('items')
    let inputText = document.getElementById('newItemText').value
    let newElement = document.createElement('li')
    newElement.textContent = inputText
    items.appendChild(newElement)
}