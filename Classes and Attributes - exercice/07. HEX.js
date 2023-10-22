// class Hex {
//     // TODO: implement this class...
// }
// Write a class Hex, having the following functionality:
// •	The constructor takes one parameter value, which is a number
// •	valueOf() This function should return the value property of the hex class.
// •	toString() This function will show its hexadecimal value starting with "0x"
// •	plus({number}) This function should add a number or Hex object and return a new Hex object.
// •	minus({number}) This function should subtract a number or Hex object and return a new Hex object.
// •	parse({string}) Create a parse class method that can parse Hexadecimal numbers and convert them to standard decimal numbers.
// Submission
// Submit only your Hex class.
// Examples
// This is an example of how the code is intended to be used:


class Hex {
    constructor(value) {
        this.value = value


    }
    toString() {
        return '0x'+`${this.value.toString(16)}`.toUpperCase()
    }

    valueOf() {
        return this.value
    }
    plus(input) {
        if (typeof (input) === 'object') {
            let result = this.value + input.value
            return new Hex(result)
        } else {
            let result = this.value + input
            return new Hex(result)
        }
    } minus(input) {
        if (typeof (input) === 'object') {
            let result = this.value - input.value
            return new Hex(result)
        } else {
            let result = this.value - input
            return new Hex(result)
        }
    } parse(data) {
        return parseInt(data, 16)
    }

}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));
