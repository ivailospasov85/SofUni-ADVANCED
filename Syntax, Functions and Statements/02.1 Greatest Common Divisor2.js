// Write a function that takes two positive numbers as input and compute the greatest common divisor.	
// The input comes as two positive integer numbers.
// The output should be printed on the console.

function GCD(a, b) {
    let gcd = a % b
    while (gcd !== 0) {
        a = b
        b = gcd
        gcd = a % b
    }
    console.log(b);

}

GCD(2154, 458)