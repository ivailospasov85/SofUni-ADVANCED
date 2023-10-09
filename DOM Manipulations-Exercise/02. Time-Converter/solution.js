// Create a program that converts different time units. Your task is to add a click event listener to all [CONVERT] buttons. 
// When a button is clicked, read the corresponding input field, convert the value to the three other time units and display it in the input fields.


function attachEventsListeners() {


    // let daysInputText = document.getElementById('days').value
    // let hoursInputText = document.getElementById('hours').value
    // let minutesInputText = document.getElementById('minutes').value
    // let secondsInputText = document.getElementById('seconds').value

    // let daysButton = document.getElementById('daysBtn')
    // let hoursButton = document.getElementById('hoursBtn')
    // let minutesButton = document.getElementById('minutesBtn')
    // let secondsButton = document.getElementById('secondsBtn')

    let allButtons = Array.from(document.querySelectorAll("input[type=button]"))
    allButtons.forEach(button => button.addEventListener('click', getValue))

    let inputs = document.querySelectorAll('"input[type=text]"')


    function getValue(event) {
        let value = Number(event.target.parentElement.children[1].value)
        let units = event.target.parentElement.children[1].id

        switch (units) {
            case 'days': calculates
                break;

            case 'hours': calculates
                break;

            case 'minutes': calculates
                break;

            case ' seconds': calculates
                break;


        }

        function calculates(value) {
            inputs[0] = Number(value)
            let cure
            for (let i = 1; i < inputs.length; i++) {


            }


        }

        // daysButton.addEventListener("click", calculates)
        // hoursButton.addEventListener("click", calculates)
        // minutesButton.addEventListener("click", calculates)
        // secondsButton.addEventListener("click", calculates)
    }
}