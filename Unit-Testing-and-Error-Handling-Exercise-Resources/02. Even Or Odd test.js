const { assert } = require('chai');
const isOddOrEven = require('./02. Even Or Odd'); // Import the function you want to test
const { describe } = require('mocha');

describe('Testing isOddOrEven function is not a string', () => {

    it('Should return undefined for Number', () => {
        assert.equal(isOddOrEven(10), undefined);
    });

    it('Should rreturn undefined for Array', () => {
        assert.equal(isOddOrEven([]), undefined);
    });

    it('Should return undefined for zero', () => {
        assert.equal(isOddOrEven(0), undefined);
    });

    it('Should return undefined for an object', () => {
        assert.equal(isOddOrEven({}), undefined);
    });
    it('Should return undefined for an minus Number', () => {
        assert.equal(isOddOrEven(-2), undefined);
    });

});

describe('Testing isOddOrEven function length % 2 to be even ', () => {

    it('testing isOddOrEven function should return even ', () => {
        assert.equal(isOddOrEven('hi'), 'even');
    });
    it('testing isOddOrEven function should return even  ', () => {
        assert.equal(isOddOrEven(''), 'even');
    });
    it('testing isOddOrEven function should return even ', () => {
        assert.equal(isOddOrEven('10'), 'even');
    });
    it('testing isOddOrEven function should return even  ', () => {
        assert.equal(isOddOrEven('20'), 'even');
    });
   
});

describe('Testing isOddOrEven function length % 2 to be  odd', () => {

    it('testing isOddOrEven function should return odd ', () => {
        assert.equal(isOddOrEven('hii'), 'odd');
    });
    it('testing isOddOrEven function should return odd  ', () => {
        assert.equal(isOddOrEven('1'), 'odd');
    });
    it('testing isOddOrEven function should return odd', () => {
        assert.equal(isOddOrEven('0'), 'odd');
    });
    it('testing isOddOrEven function should return odd  ', () => {
        assert.equal(isOddOrEven('-20'), 'odd');
    });
   
});
