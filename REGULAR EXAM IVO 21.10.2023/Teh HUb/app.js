window.addEventListener('load', solution);
function solution() {
const employee = document.getElementById('employee');
const category = document.getElementById('category');
const urgency = document.getElementById('urgency');
const team = document.getElementById('team');
const description = document.getElementById('description');
const addButton = document.getElementById('add-btn');
const previewList = document.getElementById('preview-list');
// const editButton = document.getElementById('edit');
// const continueButton = document.getElementById('continue-btn');
const pendingList = document.querySelector('.pending-list');
const resolvedList = document.querySelector('.resolved-list');
const preview = document.querySelector("#preview > div > div")

addButton.addEventListener('click', onAddFunction)

function onAddFunction(e) {
  if (employee.value !== '' && category.value !== '' && urgency.value !== '' && team.value !== '' && description.value !== '') {
    
    
    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.className = "edit";
    editButton.addEventListener('click', function () {
      onEditFunction(listItem);
    });

    const continueButton = document.createElement('button');
    continueButton.textContent = "Continue";
    continueButton.className = "continue";
    continueButton.addEventListener('click', function () {
      onContinueFunction(listItem);
    });

    listItem.appendChild(article);
    listItem.appendChild(editButton);
    listItem.appendChild(continueButton);
    previewList.appendChild(listItem);
    

  }
}

function onEditFunction(listItem) {
  const article = listItem.querySelector('article');
  const pEmployee = article.querySelector('p');
  const pCategory = pEmployee.nextElementSibling;
  const pUrgency = pCategory.nextElementSibling;
  const pTeam = pUrgency.nextElementSibling;
  const pDescription = pTeam.nextElementSibling;

  employee.value = pEmployee.textContent.split(': ')[1];
  category.value = pCategory.textContent.split(': ')[1];
  urgency.value = pUrgency.textContent.split(': ')[1];
  team.value = pTeam.textContent.split(': ')[1];
  description.value = pDescription.textContent.split(': ')[1];

  listItem.remove();
}

function onContinueFunction(listItem) {
  const resolvedButton = document.createElement('button');
  resolvedButton.textContent = "Resolved";
  resolvedButton.className = "resolved";
  resolvedButton.addEventListener('click', function () {
    onResolveFunction(listItem);
  });

  listItem.appendChild(resolvedButton);
  pendingList.appendChild(listItem);
}

function onResolveFunction(listItem) {
  const clearButton = document.createElement('button');
  clearButton.textContent = "Clear";
  clearButton.className = "clear";
  clearButton.addEventListener('click', function () {
    onClearFunction(listItem);
  });

  listItem.removeChild(listItem.querySelector('.resolved'));
  resolvedList.appendChild(listItem);
}

function onClearFunction(listItem) {
  listItem.remove();
}



}




 
  