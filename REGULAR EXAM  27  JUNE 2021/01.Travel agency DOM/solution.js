window.addEventListener('load', solution);

function solution() {
  const submitButton = document.getElementById('submitBTN')
  const editButton = document.getElementById('editBTN')
  const continueButton = document.getElementById('continueBTN')
  const block = document.getElementById('block')
  const preview = document.getElementById('infoPreview')
  submitButton.disabled = false
  editButton.disabled = true
  continueButton.disabled = true

  const allInputValues = Array.from(document.getElementById('form').querySelectorAll('input'))
  const allLabelValues = Array.from(document.getElementById('form').querySelectorAll('label'))
  allInputValues.pop()

  submitButton.addEventListener('click', onSubmitButton)

  function onSubmitButton(e) {

    const fullName = allInputValues[0]
    const email = allInputValues[1]

    if (fullName.value || email.value !== '') {

      for (let i = 0; i < allInputValues.length; i++) {
        const liElement = document.createElement('li')
        liElement.textContent = `${allLabelValues[i].textContent} ${allInputValues[i].value}`
        preview.appendChild(liElement)

      }
      for (const inputs of allInputValues) {
        inputs.value = ''
      }

    }
    submitButton.disabled = true
    editButton.disabled = false
    continueButton.disabled = false

  }

  editButton.addEventListener('click', onEditButton)

  function onEditButton(e) {
    const listItem = Array.from(preview.childNodes)

    for (let i = 0; i < allInputValues.length; i++) {
      allInputValues[i].value = listItem[i].textContent.split(': ')[1]
      listItem[i].remove()
    }


    submitButton.disabled = false
    editButton.disabled = true
    continueButton.disabled = true

  }
  continueButton.addEventListener('click', onContinueBTn)
  function onContinueBTn(e) {
    block.innerHTML = ''
    h3 = document.createElement('h3')
    h3.textContent = "Thank you for your reservation!"
    block.appendChild(h3)
  }
}


