// / Write a function that calculates how long it takes a student to get to university. 
// The function takes three numbers:
// •	The first is the number of steps the student takes from their home to the university
// •	Тhe second number is the length of the student's footprint in meters
// •	Тhe third number is the student speed in km/h
// Every 500 meters the student rests and takes a 1-minute break.
// Calculate how long the student walks from home to university and print on the console the result in the following format: `hours:minutes:seconds`.
// The input comes as three numbers.
// The output should be printed on the console.

function timeToWalk(steps, footprintOfTheStudent, speedOfTheStudent) {

    let distanceTaken = steps * footprintOfTheStudent
    let minutesOfBreak = Math.floor(distanceTaken / 500) * 60
    let minetsToWalk = speedOfTheStudent / 3.6
    let result = (distanceTaken / minetsToWalk) + minutesOfBreak

    let hours = Math.floor(result / 3600)
    let minutes = Math.floor(result / 60)
    let seconds = Math.round(result % 60)

    let hoursToPrint = hours < 10 ? `0${hours}` : `${hours}`
    let minutesToPrint = minutes < 10 ? `0${minutes}` : `${minutes}`
    let secondsToPrint = seconds < 10 ? `0${seconds}` : `${seconds}`

    console.log(`${hoursToPrint}:${minutesToPrint}:${seconds}`);
}

timeToWalk(4000, 0.60, 5)