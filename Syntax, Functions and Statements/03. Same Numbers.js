// Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
// Print on the console true if all numbers are the same and false if not. On the next line print the sum of all digits.
// The input comes as an integer number.
// The output should be printed on the console.

function sameNumbers(numbers) {
    let buff = 0
    let num = numbers.toString().split('')
    let isSame = true
    let firsDigit = num[0]

    for (let i = 0; i < num.length; i++) {
        let el = num[i]
        buff += Number(num[i])
        if (firsDigit !== el) {
            isSame = false
        } else {
            isSame = true
        }

    }
    if (isSame) {
        console.log('true');
    } else {
        console.log(`false`);
    }
    console.log(buff);
}

sameNumbers(2222222)
