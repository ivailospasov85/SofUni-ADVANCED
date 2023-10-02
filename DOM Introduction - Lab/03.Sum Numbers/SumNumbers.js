function calc() {
    let num1 = document.getElementById('num1')
    let num2 = document.getElementById('num2')

    num1 = Number(num1.value)
    num2 = Number(num2.value)


    let sum = num1 + num2

    let result = document.getElementById('sum')
    result.value = sum

    // return sum = num1 + num2

}