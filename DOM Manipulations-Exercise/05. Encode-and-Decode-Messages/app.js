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
console.log("-----------------------------------------------------------------------------")



function encodeAndDecodeMessages() {
    document.getElementById('main').addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') {
            return;
        }
 
        let decodedMessage = document.getElementsByTagName('textarea')[0];
        let encodedMessage = document.getElementsByTagName('textarea')[1];
 
        if (e.target.textContent.includes('Encode')) {
            let message = decodedMessage.value;
            let encoded = [];
            for (let i = 0; i < message.length; i++) {
                let currSymbol = message.charCodeAt(i);
                encoded.push(String.fromCharCode(currSymbol + 1));
            }
            decodedMessage.value = '';
            encodedMessage.value = encoded.join('');
        } else if (e.target.textContent.includes('Decode')) {
            let message = encodedMessage.value;
            let decoded = [];
            for (let i = 0; i < message.length; i++) {
                let currSymbol = message.charCodeAt(i);
                decoded.push(String.fromCharCode(currSymbol - 1));
            }
            encodedMessage.value = decoded.join('');
        }
    });
}