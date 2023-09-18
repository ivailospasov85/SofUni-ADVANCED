// Write a program that extracts all words from a passed-in string and converts them to upper case. The extracted words in the upper case must be printed on a single line separated by ", ".
// The input comes as a single string argument - the text to extract and convert words from.
// The output should be a single line containing the converted string.


function wordsUpperCase(input) {
    let text = input.split(/[^a-zA-Z0-9]+/mg)

    for (let index = 0; index < text.length; index++) {
        text[index] = text[index].toUpperCase()
        if (!text[text.length - 1]) {
            text.pop()
        }

    }
    console.log(text.join(', '));
}

wordsUpperCase('Hi, how are you?')