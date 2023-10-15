// Create a function calculator which returns an object that can modify the DOM. The returned object should support the following functionality: 
// •	init (selector1, selector2, resultSelector) - initializes the object to work with the elements corresponding to the supplied selectors. 
// •	add () - adds the numerical value of the element corresponding to selector1 to the numerical value of the element corresponding to selector2 
// and then writes the result in the element corresponding to resultSelector. 
// •	subtract () - subtracts the numerical value of the element corresponding to selector1 from the numerical value of the element 
// corresponding to selector2 and then writes the result in the element corresponding to resultSelector.
// Input 
// There will be no input your function must only provide an object. 
// Output 
// Your function should return an object that meets the specified requirements. 
// Constraints 
// •	All commands will always be valid, there will be no nonexistent or incorrect input. 
// •	All selectors will point to single textbox elements. 
// •	Use the given skeleton to solve this problem. 



function calculator() {

    return {
        init: function (selector1, selector2, selector3) {
            num1 = document.querySelector(selector1);
            num2 = document.querySelector(selector2);
            result = document.querySelector(selector3);
        },
        add: function () {
            // if (num1 && num2 && result) {
            num1 = Number(num1.value);
            num2 = Number(num2.value);
            return result.value = num1 + num2;


        },
        subtract: function () {
            // if (num1 && num2 && result) {
            num1 = Number(num1.value);
            num2 = Number(num2.value);
            return result.value = num2 - num1;

        },


    }


}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');





