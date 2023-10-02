function extractText() {

    let needetElement = document.getElementById('items')

    let textAreqElement = document.getElementById('result')
    textAreqElement.textContent = needetElement.textContent;
}