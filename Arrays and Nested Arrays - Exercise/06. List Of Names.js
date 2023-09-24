// You will receive an array of names. Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.

function listOfNames(input) {


    let positions = 0

    let sorted = input.sort((a, b) => a.localeCompare(b))
    sorted.forEach(element => {
        positions++
        console.log(`${positions}.${element}`);

    });

}

listOfNames(["John", "Bob", "Christina", "Ema"])