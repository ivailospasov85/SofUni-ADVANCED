// // Write a class Company, which following these requirements:
// // The constructor takes no parameters:
// //     You could initialize an object:
// // •	departments - empty object
// // addEmployee({name}, {salary}, {position}, {department})
// // This function should add a new employee to the department with the given name.
// // •	If one of the passed parameters is an empty string (""), undefined or null, this function should throw an error with the following message: "Invalid input!"
// // •	If salary is less than 0, this function should throw an error with the following message: "Invalid input!"
// // •	If the new employee is hired successfully, you should add him into the departments object with the current name of the department and return the following message:
//  `New employee is hired. Name: {name}. Position: {position}`
// // bestDepartment()
// // This function should return the department with the highest average salary rounded to the second digit after the decimal point and its employees 
// sorted by their salary by descending order and by their name in ascending order as a second criterion:
// // `Best Department is: {best department's name}
// // Average salary: {best department's average salary}
// // {employee1} {salary} {position}
// // {employee2} {salary} {position}
// // {employee3} {salary} {position}
// // …`
// // Submission
// // Submit only the Company class definition.
// // Examples
// // This is an example of how the code is intended to be used:


class Company {
    departmentData = {
        
    }
    constructor() {
        this.department = {}
    }

    addEmployee(name, salary, position, department) {
        if (!name || !position || !department || !salary || salary < 0) {
            throw new Error("Invalid input!")
        }

        if (!this.department.hasOwnProperty(department)) {
            this.department[department] = []
            this.departmentData[department] = {
                sumSalary: 0,
                averageSalary: 0,
            }
        }
        let employee = { name, salary, position }
        this.department[department].push(employee)
        this.departmentData[department].sumSalary += salary
        this.departmentData[department].averageSalary = this.departmentData[department].sumSalary / this.department[department].length
        return `New employee is hired. Name: ${employee.name}. Position: ${employee.position}`
    }
    bestDepartment() {
        let [bestDepartment, totalSalary] = Object.entries(this.departmentData).sort((a, b) => b.totalSalary - a.totalSalary)[0]
        

        let buff = `Best Department is: ${bestDepartment}\n`
        buff += `Average salary: ${totalSalary.averageSalary.toFixed(2)}\n`

        let sortedBestDepartment = this.department[bestDepartment].sort((objA, objB) => {
            return objB.salary - objA.salary || objA.name.localeCompare(objB.name)
        })
        sortedBestDepartment.forEach(Object => {
            buff += `${Object.name} ${Object.salary} ${Object.position}\n`
        });

        return buff.trim()
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());


/* 
Unexpected error: not equal: expected 'Best Department is: Construction\nAverage salary: 1500.00\nStanimir 2000 engineer\nStan 2000 architect\nPesho 1500 electrical engineer\nSlavi 500 dyer' 
                             to equal 'Best Department is: Construction\nAverage salary: 1500.00\nStan 2000 architect\nStanimir 2000 engineer\nPesho 1500 electrical engineer\nSlavi 500 dyer'

*/ 