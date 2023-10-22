// JS Advanced Exam
// Problem 3. Unit Testing
// Your Task
// Using Mocha and Chai write JS Unit Tests to test a variable named MotorcycleRider, which represents an object. You may use the following code as a template:
// describe("Tests …", function() {
//     describe("TODO …", function() {
//         it("TODO …", function() {
//             // TODO: …
//         });
//      });
//      // TODO: …
// });

// The object that should have the following functionality:				
// •	licenseRestriction (category) - A function that accepts one parameter: string.
// o	If the category is "AM" return the string:
// "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16."
// o	If the category is "A1" return the string:
// "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16."
// o	If the category is "A2" return the string:
// "Motorcycles with maximum power of 35KW. and the minimum age is 18."
// o	If the category is "A" return the string:
// "No motorcycle restrictions, and the minimum age is 24."
// o	If the value of the string type is different from "AM,A1,A2,A", throw an error:
//  " Invalid Information!"
// •	motorcycleShowroom (engineVolume, maximumEngineVolume) - A function that accepts an array and number. The engineVolume array will store the engine volume of a motorcycles in cubic centimeters (["125", "250", "600"…]), you need to check every element in the array and if its less or equal to maximumEngineVolume.
// o	You must add an element (engineVolume) if maximumEngineVolume is less or equal to engineVolume from the array in to new availableBikes array.
// o	Finally, return the array length in following string:
// "There are ${availableBikes.length} available motorcycles matching your criteria!"
// o	There is a need for validation for the input, an array and number may not always be valid. In case of submitted invalid parameters, throw an error "Invalid Information!":
// 	If passed engineVolume or maximumEngineVolume parameter are not an array and number.
// 	If the engineVolume is an empty array, and if maximumEngineVolume is less than 50.

// •	otherSpendings (equipment, consumables, discount) - A function that accepts three parameters: array, array and boolean.
// o	Calculate the total price you are going to pay depending on the purchased equipment and consumables:
// 	The result must be formatted to the second digit after the decimal point.
// o	The bike shop offers two options for equipment and consumables:
// 	The two options for equipment are:
// •	helmet, which costs $200
// •	jacked, which costs $300
// 	The two options for consumables are:
// •	engine oil, which costs $70
// •	oil filter, which costs $30
// o	If the discount is true, 10% discount should be applied. Then return the following message:
// "You spend $${totalPrice} for equipment and consumables with 10% discount!"
// o	Else, return the following message:  
// "You spend $${totalPrice} for equipment and consumables!"
// o	You need to validate the input, if the equipment, consumables and discount are not a array, array and boolean an error: "Invalid information!"
// JS Code
// To ease you in the process, you are provided with an implementation that meets all of the specification requirements for the MotorcycleRider object:
// chooseYourCar.js
// const motorcycleRider = {
//   licenseRestriction(category) {
//     if (category === "AM") {
//       return 'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.'
//     } else if (category === "A1") {
//       return 'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.'
//     } else if (category === "A2") {
//       return 'Motorcycles with maximum power of 35KW. and the minimum age is 18.'
//     } else if (category === "A") {
//       return 'No motorcycle restrictions, and the minimum age is 24.'
//     } else {
//       throw new Error("Invalid Information!");
//     }
//   },
//   motorcycleShowroom(engineVolume, maximumEngineVolume) {
//     if (!Array.isArray(engineVolume) || typeof maximumEngineVolume !== "number" || engineVolume.length < 1 || maximumEngineVolume < 50) {
//       throw new Error("Invalid Information!");
//     }
//     let availableBikes = [];
//     engineVolume.forEach((engine) => {

//       if (engine <= maximumEngineVolume && engine >= 50) {
//         availableBikes.push(engine);
//       }
//     });
//     return `There are ${availableBikes.length} available motorcycles matching your criteria!`;
//   },
//   otherSpendings(equipment, consumables, discount) {
//     if (
//       !Array.isArray(equipment) ||
//       !Array.isArray(consumables) ||
//       typeof discount !== "boolean"
//     ) {
//       throw new Error("Invalid Information!");
//     }
//     let totalPrice = 0;

//     equipment.forEach((element) => {
//       if (element === "helmet") {
//         totalPrice += 200
//       } else if (element === "jacked") {
//         totalPrice += 300
//       }
//     });

//     consumables.forEach((element) => {
//       if (element === "engine oil") {
//         totalPrice += 70
//       } else if (element === "oil filter") {
//         totalPrice += 30
//       }
//     });
//     if (discount) {
//       totalPrice = totalPrice * 0.9;
//       return `You spend $${totalPrice.toFixed(2)} for equipment and consumables with 10% discount!`
//     } else {
//       return `You spend $${totalPrice.toFixed(2)} for equipment and consumables!`
//     }

//   }
// };
//     }
// }
// Submission
// Submit your tests inside a describe() statement, as shown above.
