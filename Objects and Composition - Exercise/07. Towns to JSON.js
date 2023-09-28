// // You're tasked to create and print a JSON from a text table. You will receive input as an array of strings, where each string represents a row of a table,
//  with values on the row encompassed by pipes "|" and optionally spaces. The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". 
//  The Latitude and Longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
// // Input
// // The input comes as an array of strings – the first string contains the table’s headings, each next string is a row from the table.
// // Output
// •	The output should be an array of objects wrapped in JSON.stringify(). 
// •	Latitude and Longitude must be parsed to numbers, and represented till the second digit after the decimal point!


function townToJSON(data) {

    let result = []
    let obj = [Town, Latitude, Longitude] = data.shift().split('|').filter(x => x.length > 1)
    // let obj = {
    //     Town,
    //     Latitude,
    //     Longitude,
    // }

    for (let element of data) {

        let splittedByPipe = element.split('|')
        let flirted = splittedByPipe.filter(x => x.length > 1)

        town = flirted[0].trim()
            latitude = Number(flirted[1]).toFixed(2)
        longitude = Number(flirted[2]).toFixed(2)

        obj = {
            Town:town,
            Latitude:Number(latitude),
            Longitude:Number(longitude),
        }
        result.push(obj)
    }
    console.table(JSON.stringify(result));

}

townToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']

)