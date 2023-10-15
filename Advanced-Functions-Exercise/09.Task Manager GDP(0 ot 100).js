function solve() {
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.querySelector("form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            // Get input values
            const taskInput = document.getElementById("task");
            const descriptionInput = document.getElementById("description");
            const dateInput = document.getElementById("date");

            const taskValue = taskInput.value.trim();
            const descriptionValue = descriptionInput.value.trim();
            const dateValue = dateInput.value.trim();

            if (!taskValue || !descriptionValue || !dateValue) {
                return; // If any of the input fields are empty, do nothing
            }

            // Create a new article element for the task
            const article = document.createElement("article");
            article.innerHTML = `
        <h3>${taskValue}</h3>
        <p>Description: ${descriptionValue}</p>
        <p>Due Date: ${dateValue}</p>
        <div class="flex">
          <button class="green">Start</button>
          <button class="red">Delete</button>
        </div>
      `;

            const openTasks = document.querySelector("#open-tasks");
            openTasks.appendChild(article);

            // Clear input fields
            taskInput.value = "";
            descriptionInput.value = "";
            dateInput.value = "";

            // Add event listeners to the buttons (Start, Delete)
            const startButton = article.querySelector(".green");
            const deleteButton = article.querySelector(".red");

            startButton.addEventListener("click", () => moveTaskToInProgress(article));
            deleteButton.addEventListener("click", () => deleteTask(article));
        });

        function moveTaskToInProgress(taskArticle) {
            const inProgressTasks = document.querySelector("#in-progress-tasks");
            inProgressTasks.appendChild(taskArticle);

            // Remove the "Start" and "Delete" buttons
            const buttons = taskArticle.querySelector(".flex");
            buttons.remove();

            // Add the "Finish" button
            const finishButton = document.createElement("button");
            finishButton.className = "orange";
            finishButton.textContent = "Finish";
            finishButton.addEventListener("click", () => moveTaskToComplete(taskArticle));
            taskArticle.appendChild(finishButton);
        }

        function deleteTask(taskArticle) {
            taskArticle.remove();
        }

        function moveTaskToComplete(taskArticle) {
            const completeTasks = document.querySelector("#completed-tasks");
            completeTasks.appendChild(taskArticle);
        }
    });
}