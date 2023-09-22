// Write a JS function that adds and removes numbers to/from an array. You will receive a command which can either be "add" or "remove". 
// The initial number is 1. Each input command should increase that number, regardless of what it is.
// Upon receiving an "add" command you should add the current number to your array. 
// Upon receiving the "remove" command you should remove the last entered number, currently existent in the array.
// The input comes as an array of strings. Each element holds a command. 
// The output is the element of the array, each printed on a new line. In case of an empty array, just print "Empty".


function addOrRemove(command) {

    let initialNumber = 0
    let result = []
    command.map((x) => {

        initialNumber += 1

        if (x === 'add') {
            result.push(initialNumber)
        } else if (x === 'remove') {

            result.pop(initialNumber)
        }
    })
    if(result.length>0){
        console.log(result.join('\n'));
    }else{
        console.log('Empty');
    }
    
}

addOrRemove(['add',
    'add',
    'remove',
    'add',
    'add']

)