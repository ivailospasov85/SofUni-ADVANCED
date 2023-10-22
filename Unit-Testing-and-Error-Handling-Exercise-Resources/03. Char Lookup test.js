
const lookupChar = require('./03. Char Lookup')

const { assert } = require('chai');



describe('test lookupChar function ', () => {
    it('If the first parameter is number a  second parameter is string return undefined.', () => {
        assert.equal(lookupChar(1, '2'), undefined)
    });
    it('If the first parameter is number a  second parameter is string return undefined.', () => {
        assert.equal(lookupChar(0, 1), undefined)
    });
    it('If the first parameter is number a  second parameter is string return undefined.', () => {
        assert.equal(lookupChar("hai", "hui"), undefined)
    });
    it('If the first parameter is array a  second parameter is string return undefined.', () => {
        assert.equal(lookupChar([], ''), undefined)
    });
    it('If the first parameter is object a  second parameter is array return undefined.', () => {
        assert.equal(lookupChar({}, []), undefined)
    });
    it('If the first parameter is zero a  second parameter is object return undefined.', () => {
        assert.equal(lookupChar(5, {}), undefined)
    });
    it('If the first parameter is zero a  second parameter is array return undefined.', () => {
        assert.equal(lookupChar(5, []), undefined)
    });
    it('If the first parameter is object a  second parameter is zero return undefined.', () => {
        assert.equal(lookupChar({}, 5), undefined)
    });
    it('If the first parameter is arrey a  second parameter is zero return undefined.', () => {
        assert.equal(lookupChar([], 5), undefined)
    });
    it('If the first parameter is arrey a  second parameter is zero return undefined.', () => {
        assert.equal(lookupChar([], "hello"), undefined)
    });
    it('If the first parameter is arrey a  second parameter is zero return undefined.', () => {
        assert.equal(lookupChar({}, {}), undefined)
    });
    it('If the first parameter is arrey a  second parameter is zero return undefined.', () => {
        assert.equal(lookupChar([], []), undefined)
    });
    it('If the first parameter is arrey a  second parameter is zero return undefined.', () => {
        assert.equal(lookupChar("", ""), undefined)
    });
    it('If the first parameter is arrey a  second parameter is zero return undefined.', () => {
        assert.equal(lookupChar("", []), undefined)
    });
    it('If the first parameter is arrey a  second parameter is zero return undefined.', () => {
        assert.equal(lookupChar("", {}), undefined)
    });
    it('If the first parameter is arrey a  second parameter is zero return undefined.', () => {
        assert.equal(lookupChar("", '.'), undefined)
    });

});

describe('if the parametars are correct but the value of the index is incorrect bigger than or equal to the string length or a negative number ". ', () => {
    it('value of the index is incorrect bigger than the string length', () => {
        assert.equal(lookupChar('string', 10), "Incorrect index")
    });
    it('value of the index is incorrect equal than the string length', () => {
        assert.equal(lookupChar('string', 6), "Incorrect index")
    });
    it('value of the index is incorrect a negative number', () => {
        assert.equal(lookupChar('', -10), "Incorrect index")
    });
    it('value of the index is incorrect a negative number', () => {
        assert.equal(lookupChar('str', -10, 2), "Incorrect index")
    });
    it('value of the index is incorrect a negative number', () => {
        assert.equal(lookupChar('s', 10, 2), "Incorrect index")
    });
    it('charAt -10 index', () => {
        assert(lookupChar('', 2), "Incorrect index")
    });

});

describe('if the  bold of the parameters are correct return atChart at index', () => {
    it('charAt 1 index', () => {
        assert(lookupChar('string', 1) === "t")
    });
    it('charAt -1 index', () => {
        assert(lookupChar('string', - 1), "Incorrect index")
    });
    it('charAt 0 index', () => {
        assert(lookupChar('String', 0) == "S")
    });
    it('charAt 10 index', () => {
        assert(lookupChar('string', 10), "Incorrect index")
    });
    it('charAt -10 index', () => {
        assert(lookupChar('string', -10), "Incorrect index")
    });
    it('charAt 3 index', () => {
        assert(lookupChar('string', 3) === 'i')
    });
    it('charAt "" index', () => {
        assert(lookupChar('S', 0) == 'S')
    });
});