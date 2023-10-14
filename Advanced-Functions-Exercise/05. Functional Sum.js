// Write a function that adds a number passed to it to an internal sum and returns itself with its internal sum set to the new value, so it can be chained functionally. 
// Hint: Overwrite toString() of the function. 
 
// Input
// Your function needs to take one numeric argument.
// Output
// Your function needs to return itself with an updated context.
// // 


function add(initialSum = 0) {
    // Create a variable to store the current sum
    let currentSum = initialSum;
  
    // Create a new function that takes a number and adds it to the current sum
    function addNumber(num) {
      currentSum += num;
      return addNumber; // Return itself for chaining
    }
  
    // Override the toString method to return the current sum
    addNumber.toString = function () {
      return currentSum;
    };
  
    return addNumber; // Return the function for chaining
  }
  
  // Usage:
  console.log(add(1)); // Output: 1
  console.log(add(1)(6)(-3)); // Output: 4
  