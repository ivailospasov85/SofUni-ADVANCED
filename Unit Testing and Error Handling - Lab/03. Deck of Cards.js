// Write a function that takes a deck of cards as an array of strings and prints them as a sequence of cards (space separated). 
// Use the solution from the previous task to generate the cards. 
// Print `Invalid card: ${card}` when an invalid card definition is passed as input. 
// Input / Output
// The function takes an array of strings as a parameter. Print the list of cards as string, separated by space


function printDeckOfCards(cards) {

    let result = []
    for (const card of cards) {

        if (card.length > 2) {
            let tokens = card.split('')
            let face = tokens[0].concat(tokens[1])
            let suit = tokens[2]

            cardFactory(face, suit)

        } else {
            let [face, suit] = card.split('')
            cardFactory(face, suit)
        }

        function cardFactory(face, suit) {
            const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
            const suits = {
                S: '♠',
                H: '♥',
                D: '♦',
                C: '♣',
            };

            if (!faces.includes(face) || !suits[suit]) {
                throw new Error(`Invalid card: ${card}${suit}`);
            }

            let card = {
                face,
                suit: suits[suit],
                toString() {
                    return this.face + this.suit;
                }
            };

            result.push(card)
        }
    }
   
    return result.map(card => card.toString()).join(' ')
}

const myDeck = printDeckOfCards(['AS', '10D', 'KH', '2C']);
console.log(myDeck); // Output: A♠ 10♦ K♥ 2♣
