function encodeAndDecodeMessages() {
    let button = document.querySelectorAll('button')
    let textarea = document.querySelectorAll('textarea')

    let encodeButton = button[0]
    let decodeButton = button[1]
    let encodeTextArea = textarea[0]
    let decodeTextArea = textarea[1]

    encodeButton.addEventListener('click', encodingFunction)

    decodeButton.addEventListener('click', decodingFunction)

    function encodingFunction() {
        let encodingMSG = encodeTextArea.value
        let newEncodeMSG = ''

        for (let word of encodingMSG) {
            let charDec = word.charCodeAt()
            charDec++
            newEncodeMSG += String.fromCharCode(charDec)

        }
        decodeTextArea.value = newEncodeMSG
        encodeTextArea.value = ''
    }
    function decodingFunction() {
        let decodedText = decodeTextArea.value
        let newDecodedMSG = ''

        for (word of decodedText) {
            let decChar = word.charCodeAt()
            decChar--
            newDecodedMSG += String.fromCharCode(decChar)
        }
        encodeTextArea.value = newDecodedMSG
        // decodeTextArea.value = ''
    }


}