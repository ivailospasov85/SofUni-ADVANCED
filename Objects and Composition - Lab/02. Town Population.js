// You have been tasked to create a registry for different towns and their population.
// Input
// The input comes as array of strings. Each element will contain data for a town and its population in the following format: "{townName} <-> {townPopulation}"
// If you receive the same town twice, you should add the given population to the current one.
// Output
// As output, you must print all the towns and their population.


function townPopulation(input) {


    let town = {}
    for (let element of input) {

        [name, population] = element.split('<->')



        if (!town[name]) {
            town[name] = 0
        }

        town[name] += Number(population)
    }
    for (const key in town) {
        console.log(`${key}: ${town[key]}`);
    }

}




townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Sofia <-> 1000000']
)