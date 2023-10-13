// Create a program that converts different time units. Your task is to add a click event listener to all [CONVERT] buttons. 
// When a button is clicked, read the corresponding input field, convert the value to the three other time units and display it in the input fields.


function attachEventsListeners() {
    let inputsButton = Array.from(document.querySelectorAll('div input[type=button]'))
    let inputsText = Array.from(document.querySelectorAll('div input[type=text]'))
    inputsButton.forEach(button => button.addEventListener('click', onclickButton))


    function onclickButton(event) {
        let value = Number(event.target.parentElement.children[1].value)
        let units = event.target.parentElement.children[1].id

        switch (units) {
            case 'days': valueConversion(value)

                break;
            case 'hours': valueConversion(value / 24)

                break;
            case 'minutes': valueConversion(value / 24 / 60)

                break;
            case 'seconds': valueConversion(value / 24 / 60 / 60)

                break;
        }

        function valueConversion(value) {
            inputsText[0].value = value
            let currentValue = value * 24

            for (let i = 1; i < inputsText.length; i++) {
                let textOutput = inputsText[i]
                textOutput.value = currentValue
                currentValue *= 60

            }
        }

    }

}