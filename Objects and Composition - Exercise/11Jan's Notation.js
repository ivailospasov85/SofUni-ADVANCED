// Write a program that parses a series of instructions written in postfix notation and executes them (postfix means the operator is written after the operands). 
// You will receive a series of instructions – if the instruction is a number, save it; otherwise, the instruction is an arithmetic operator(+-*/) 
// and you must apply it to the most two most recently saved numbers. Discard these two numbers and in their place, save the result of the operation 
// – this number is now eligible to be an operand in a subsequent operation. Keep going until all input instructions have been exhausted, or you encounter an error.
// In the end, if you’re left with a single saved number, this is the result of the calculation and you must print it. If there are more numbers saved, then the user-supplied 
// too many instructions and you must print "Error: too many operands!". If at any point during the calculation you don’t have two numbers saved, the user-supplied too few instructions and you must
//  print "Error: not enough operands!".  See the examples for more details.
// Input
// You will receive an array with numbers and strings – the numbers will be operands and must be saved; the strings will be arithmetic operators that must be applied to the operands.
// Output
// Print on the console on a single line the final result of the calculation or an error message, as instructed above.
// Constraints
// •	The numbers (operands) will be integers
// •	The strings (operators) will always be one of +-*/
// •	The result of each operation will be in the range [-253…253-1] (MAX_SAFE_INTEGER will never be exceeded)


function janNotation(input) {

    let result = []
    let operands = {}
    let numbers = []
    let operators = []
    for (let iterator of input) {
        let type = typeof (iterator)
        if (type === "number") {
            numbers.push(iterator)
        } else {
            operators.push(iterator)
        }

    }

    if (operators.length === 0 || numbers.length - 1 > operators.length) {
        console.log("Error: too many operands!");
        return;
    } else if (numbers.length <= operators.length) {
        console.log('Error: not enough operands!')
        return
    }
    operands = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
    }
    for (const el of input) {
        if (typeof (el) === "number") {
            result.push(el)
        } else {
            let b = result.pop()
            let a = result.pop()
            let res = operands[el](a, b)
            result.push(res)
        }
    }
    if (result.length === 1) {
        console.log(result.join());
        return
    }

}






janNotation([31,
    2,
    '+',
    11,
    '/',]
)