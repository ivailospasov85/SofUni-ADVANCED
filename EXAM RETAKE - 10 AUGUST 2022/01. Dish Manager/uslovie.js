// JS Advanced Retake Exam
// Problem 1. Dish Manager
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
// Write the missing JavaScript code to make the Dish Manager work as expected:
// All fields (First Name, Last Name, Age and Dish description) are filled with the correct input
// o	First Name, Last Name, Age and Dish description are non-empty strings. If any of them are empty, the program should not do anything.

// 1.	Getting the information from the form

// When you click the ["Submit"] button, the information from the input fields must be added to the ul with the id "in-progress" and then clear input fields. Also the counter with id "progress-count" should be increased by 1.  
// The HTML structure looks like this:

  

  

// 2.	Edit information for posts
// When the ["Edit"] button is clicked, the information from the post must be sent to the input’s fields and the record should be deleted from the ul "in-progress". Also the counter with id "progress-count" should be decreased by 1.  
   
// After editing the information make a new record to the ul with updated information and increase the counter.
   

// 3.	Complete posts
// When you click the ["Mark as complete"] button, the record must be deleted from the ul with id 
// "in-progress" , appended to the ul with the id "finished" and the counter with id "progress-count" should be decreased by 1.  
// The buttons [“Edit”] and [“Mark as complete”] should be removed from the li element.
     
// 4.	Clear posts
// When you click the ["Clear"] button, the record for all posts must be deleted from the ul with the id "finished".

  

// Submission
// Submit only your solve() function.
// GOOD LUCK… 

