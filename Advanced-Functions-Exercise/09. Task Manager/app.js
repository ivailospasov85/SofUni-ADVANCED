// Use the index.html and app.js files to solve this problem. You have NO permission to directly change the given HTML code (index.html file).

// Your task
// Write the missing JavaScript code to make the Task Manager Functionality works as follows: 
// When the [Add] button is clicked, first you need to validate the inputs. If any of the input fields are empty, the function doesn’t make anything. 
// After validating the input fields, you need to add the new task (article) in the "Open" section. 
// The HTML structure looks like this:

// The article should have two buttons "Start" and "Delete". Be careful to set the classes for the buttons and the parent-div.
// When the [Start] button is clicked, you need to move the Task in the section "In Progress". Be careful with the buttons! The HTML structure looks like this: 

// When the [Delete] button is clicked, the Task (whole article) should be removed from the HTML. 
// After clicking the [Finish] button, the Task will be completed, and you should move the article to the section "Complete". The buttons with their parent div-element should be removed.

function solve() {

    const formTask = document.querySelector('form')
    formTask.addEventListener('submit', onSubmit)

    let sections = document.querySelectorAll("section")
    let openSection = sections[1]
    let inProgressSection = sections[2]
    let completeSection = sections[3]
    let taskOnSelection1 = document.getElementById('task')
    let descriptionOnSelection1 = document.getElementById('description')
    let dateOnSelection1 = document.getElementById('date')

    function onSubmit(e) {
        e.preventDefault()
        let task = taskOnSelection1.value
        let description = descriptionOnSelection1.value
        let date = dateOnSelection1.value

        if (!task || !description || !date) {
            return
        }

        let myArticle = createArticle(task, description, date)
        openSection.children[1].appendChild(myArticle)

        taskOnSelection1.value = ''
        descriptionOnSelection1.value = ''
        dateOnSelection1.value = ''

    }

    function createArticle(task, description, date) {
        let article = document.createElement("article")
        article.innerHTML =
            `<h3>${task}</h3>
        <p>Description: ${description}</p>
        <p>Due Date: ${date}</p>
        <div class="flex">
            <button class="green">Start</button>
            <button class="red">Delete</button>
        </div>`

        const buttons = article.querySelectorAll('button')
        const startBtn = buttons[0]
        const deleteBtn = buttons[1]

        startBtn.addEventListener('click', moveToProgress)
        deleteBtn.addEventListener('click', deleteFromOpen)

        function deleteFromOpen(e) {
            e.target.parentElement.parentElement.remove()
        }

        function moveToProgress(e) {
            
            const moveArticle = e.target.parentElement.parentElement
            inProgressSection.children[1].appendChild(moveArticle)
            
            startBtn.removeEventListener('click',moveToProgress)
            startBtn.addEventListener('click', deleteFromProgress)
            startBtn.textContent='Delete'
            startBtn.classList.remove('green')
            startBtn.classList.add('red')
            deleteBtn.removeEventListener('click', deleteFromOpen)
            deleteBtn.addEventListener('click', moveToComplete)
            deleteBtn.textContent="Finish"
            deleteBtn.classList.remove('red')
            deleteBtn.classList.add('orange')
           
        }

        function deleteFromProgress(e) {
            const deleteArticle = e.target.parentElement.parentElement
            inProgressSection.children[1].removeChild(deleteArticle)
            // completeSection.removeChild(deleteArticle)
        }

        function moveToComplete(e) {
            const moveArticle = e.target.parentElement.parentElement
            completeSection.children[1].appendChild(moveArticle)
            // moveArticle.removeChild()
            e.target.parentElement.remove()

        }
        return article

    }

debugger

}

