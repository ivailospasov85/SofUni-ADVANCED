function subtract() {
    let firstNumber = document.getElementById('firstNumber')
    let secondNumber = document.getElementById('secondNumber')

    firstNumber = firstNumber.value
    secondNumber = secondNumber.value

    let sum = Number(firstNumber) - Number(secondNumber)
    let result = document.getElementById('result')

    result.textContent = sum

    return result




}
