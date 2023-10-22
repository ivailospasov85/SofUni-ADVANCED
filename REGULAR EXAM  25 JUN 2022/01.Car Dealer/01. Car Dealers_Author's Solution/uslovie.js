// JS Advanced Exam
// Problem 1. Car Dealers
// Environment Specifics
// Please, be aware that every JS environment may behave differently when executing code. Certain things that work in the browser are not supported in Node.js, which is the environment used by Judge.
// The following actions are NOT supported:
// •	.forEach() with NodeList (returned by querySelector() and querySelectorAll())
// •	.forEach() with HTMLCollection (returned by getElementsByClassName() and element.children)
// •	Using the spread-operator (...) to convert a NodeList into an array
// •	append() in Judge (use only appendChild())
// •	replaceWith() in Judge
// •	replaceChildren() in Judge
// •	replaceAll() in Judge
// •	closest() in Judge
// If you want to perform these operations, you may use Array.from() to first convert the collection into an array. 
// Use the provided skeleton to solve this problem.
// Note: You can't and you have no permission to change directly the given HTML code (index.html file).
 
// Your Task
// Write the missing JavaScript code to make the Car Dealer work as expected:
// All fields (make, model, year, fuel, original-cost and selling-price) are filled with the correct input
// and selling price should have bigger value than original price
// o	Make, model, year, fuel, original-cost and selling price are non-empty strings. If any of them are empty, or original price is bigger than selling price the program should not do anything.

// 1.	Getting the information from the form

// When you click the [“Publish”] button, the information from the input fields must be added to the tbody with the id “table-body”. Then, clear all input fields. 
// The HTML structure looks like this:

 

 
 

// 2.	Edit information for posts
// When the ["Edit"] button is clicked, the information from the post must be sent to the input fields and the record should be deleted from the tbody with the id "table-body". 
   
// After editing the information make a new record to the tbody with updated information.
   

// 3.	Sell car
// When you click the ["Sell"] button, the record must be deleted from the tbody with id "table-body" and a new record must be appended to the ul with the id "cars-list"
// 	The new record should be as the following: 
// •	First span should include both car Make and Model as whole string and separated by a single space
// •	Second span should include the Production year
// •	Third span should include the difference between the Selling price and Original price

 

// Total profit made will be the sum from all sold cars profits which should be rounded to the second digit after the decimal point and should be displayed in strong with id "profit"
 
 
// Submission
// Submit only your solve() function.
// GOOD LUCK… 

