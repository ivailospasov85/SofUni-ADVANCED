// Write a function that takes two positive numbers as input and compute the greatest common divisor.	
// The input comes as two positive integer numbers.
// The output should be printed on the console.


function gcd(a, b) {
    let firstNumber = a
    let secondNumber = b

    while (firstNumber !== secondNumber) {

        if (firstNumber > secondNumber) {
            firstNumber -= secondNumber
        } else {
            secondNumber -= firstNumber
        }
    }
    console.log(firstNumber);
}

gcd(15, 28)