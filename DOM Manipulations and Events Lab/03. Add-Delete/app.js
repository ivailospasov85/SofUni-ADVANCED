// Extend the previous problem to display a [Delete] link after each list item. Clicking it should delete the item with no confirmation.
// You have to add href="#" to the link element.


function addItem() {
    let items = document.getElementById("items")
    let text = document.getElementById("newItemText")

    let newItems = document.createElement('li')
    newItems.textContent = text.value
    text.value = ''

    let deleteElement = document.createElement('a')
    deleteElement.href = '#'
    deleteElement.textContent = '[Delete]'

    deleteElement.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    });

    newItems.appendChild(deleteElement);
    items.appendChild(newItems)


}