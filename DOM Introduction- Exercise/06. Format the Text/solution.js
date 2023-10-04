function solve() {
  let text = document.getElementById('input')
  let textArr = text.value.split('.').filter(singleSentence => singleSentence !== '')
  let resultDiv = document.getElementById('output')

  while (textArr.length > 0) {
    let sentences = textArr.splice(0, 3).join('.') + '.'
    let p = document.createElement('p')
    p.textContent = sentences
    resultDiv.appendChild(p)
  }
}