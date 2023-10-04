// When the [Send] button is clicked:
// •	Display the best restaurant of all the added restaurants with its average salary and best salary. 
// •	If there is a restaurant in the input array that is added more than once, you need to add new workers to the old ones and update the values of the average salary and the best salary.
// •	The best restaurant is the restaurant with the highest average salary. If two restaurants have the same average salary the best restaurant is the first one added.
// •	Display all workers in the best restaurant with their salaries.
// The best restaurant's workers should be sorted by their salaries in descending order.




function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      let input = JSON.parse(document.querySelectorAll('#inputs textarea'))
      let outputBestRestaurant = document.querySelector('#bestRestaurant p')
      let outputBestWorkers = document.querySelector('#workers p')
      debugger
      let obj = {}
      let totalSalary = 0
      let averageSalary = 0
      let haetsSalary = 0
      for (let el of input) {
         let res = el.split(' - ')
         let restaurantName = res.shift()
         let workersAndSalary = res[0].split(', ')

         for (let element of workersAndSalary) {
            let [workerName, salary] = element.split(' ')
            if (!obj.hasOwnProperty(restaurantName)) {
               obj[restaurantName] = {}
            }
            if (obj.hasOwnProperty(restaurantName)) {
               obj[restaurantName][workerName] = Number(salary)
            }
         }
      }
      let eitherNameAndSalary = Object.entries(obj)
      for (let [restaurantName, nameAndValues] of eitherNameAndSalary) {
         let nameAmdSalary = Object.entries(nameAndValues)

         for (let [name, salary] of nameAmdSalary) {
            totalSalary += Number(salary)
            if (salary > haetsSalary) {
               haetsSalary = salary
            }
         }
         averageSalary = totalSalary / nameAmdSalary.length
      }

      console.log(averageSalary);


   }
}