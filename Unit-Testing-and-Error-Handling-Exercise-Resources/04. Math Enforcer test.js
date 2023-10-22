const { assert } = require("chai");

const { mathEnforcer } = require('./04. Math Enforcer')

describe('mathEnforcer functional test', () => {

    describe('mathEnforcer addFive functional test ', () => {

        it('If the parameter is NOT a number i a string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.addFive("10"), undefined)
        });
        it('If the parameter is NOT a number i a array, the function should return undefined.', () => {
            assert.equal(mathEnforcer.addFive([]), undefined)
        });
        it('If the parameter is NOT a number is an object, the function should return undefined.', () => {
            assert.equal(mathEnforcer.addFive({}), undefined)
        });
        it('If the parameter is NOT a number is a null, the function should return undefined.', () => {
            assert.equal(mathEnforcer.addFive(null), undefined)
        });
        it('If the parameter is NOT a number i undefined, the function should return undefined.', () => {
            assert.equal(mathEnforcer.addFive(undefined), undefined)
        });
        it('If the parameter is NOT a number i a empty string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.addFive(''), undefined)
        });
        it('If the parameter is NOT a number i a empty string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.addFive('Hello'), undefined)
        });


        it('If the parameter is  A number 5 i a empty string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.addFive(5), 10)
        });
        it('If the parameter is A a number -15 i a empty string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.addFive(-15), -10)
        });
        it('If the parameter is A a number 0 i a empty string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.addFive(0), 5)
        });
        it('If the parameter is A a number 0 i a empty string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.addFive(1.5), 6.5)
        });
        it('If the parameter is A a number 0 i a empty string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.addFive(1.1), 6.1)
        });
        it('If the parameter is A a number 0 i a empty string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.addFive(-5), 0)
        });
        it('If the parameter is A a number 0 i a empty string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.addFive(-1.5), 3.5)
        });
        it('If the parameter is A a number 0 i a empty string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.addFive(-1.1), 3.9)
        });
       



    });
    describe('mathEnforcer subtractTen', () => {
        it('If the parameter is NOT a number i a string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.subtractTen("10"), undefined)
        });
        it('If the parameter is NOT a number i a array, the function should return undefined.', () => {
            assert.equal(mathEnforcer.subtractTen([]), undefined)
        });
        it('If the parameter is NOT a number is an object, the function should return undefined.', () => {
            assert.equal(mathEnforcer.subtractTen({}), undefined)
        });
        it('If the parameter is NOT a number is a null, the function should return undefined.', () => {
            assert.equal(mathEnforcer.subtractTen(null), undefined)
        });
        it('If the parameter is NOT a number i undefined, the function should return undefined.', () => {
            assert.equal(mathEnforcer.subtractTen(undefined), undefined)
        });
        it('If the parameter is NOT a number i a empty string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.subtractTen(''), undefined)
        });

        it('If the parameter is  A number 5 i a empty string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.subtractTen(5), -5)
        });
        it('If the parameter is A a number -15 i a empty string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.subtractTen(-15), -25)
        });
        it('If the parameter is A a number 0 i a empty string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.subtractTen(0), -10)
        });
        it('If the parameter is A a number 0 i a empty string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.subtractTen(1.5), -8.5)
        });
        it('If the parameter is A a number 0 i a empty string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.subtractTen(-5), -15)
        });
        it('If the parameter is A a number 0 i a empty string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.subtractTen(-5.2), -15.2)
        });
        it('If the parameter is A a number 0 i a empty string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.subtractTen(150), 140)
        });
        it('If the parameter is A a number 0 i a empty string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.subtractTen(15), 5)
        });
        it('If the parameter is A a number 0 i a empty string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.subtractTen(15.1), 5.1)
        });
        it('If the parameter is A a number 0 i a empty string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.subtractTen(10), 0)
        });
        it('If the parameter is A a number 0 i a empty string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.subtractTen(15.5), 5.5)
        });
        it('If the parameter is A a number 0 i a empty string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.subtractTen(null), null)
        });
       


    });
    describe('mathEnforcer sum(num1, num2) ', () => {
        it('If the parameter is NOT a number i a string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.sum("10", []), undefined)
        });
        it('If the parameter is NOT a number i a array, the function should return undefined.', () => {
            assert.equal(mathEnforcer.sum([], "10"), undefined)
        });
        it('If the parameter is NOT a number is an object, the function should return undefined.', () => {
            assert.equal(mathEnforcer.sum({}, "10"), undefined)
        });
        it('If the parameter is NOT a number is a null, the function should return undefined.', () => {
            assert.equal(mathEnforcer.sum(null, {}), undefined)
        });
        it('If the parameter is NOT a number i undefined, the function should return undefined.', () => {
            assert.equal(mathEnforcer.sum(undefined, {}), undefined)
        });
        it('If the parameter is NOT a number i a empty string, the function should return undefined.', () => {
            assert.equal(mathEnforcer.sum('', {}), undefined)
        });
        it('If the parameter is NOT a number is a null, the function should return undefined.', () => {
            assert.equal(mathEnforcer.sum(null, []), undefined)
        });
        it('If the parameter is NOT a number i undefined, the function should return undefined.', () => {
            assert.equal(mathEnforcer.sum(undefined, []), undefined)
        });
        it('If the parameter is NOT a number is a null, the function should return undefined.', () => {
            assert.equal(mathEnforcer.sum({}, []), undefined)
        });
        it('If the parameter is NOT a number i undefined, the function should return undefined.', () => {
            assert.equal(mathEnforcer.sum("10", {}), undefined)
        });
        it('If the parameter is NOT a number is a null, the function should return undefined.', () => {
            assert.equal(mathEnforcer.sum({}, 5), undefined)
        });
        it('If the parameter is NOT a number i undefined, the function should return undefined.', () => {
            assert.equal(mathEnforcer.sum(5, []), undefined)
        });
        it('If the parameter is NOT a number is a null, the function should return undefined.', () => {
            assert.equal(mathEnforcer.sum(1, 2), 3)
        });
        it('If the parameter is NOT a number i undefined, the function should return undefined.', () => {
            assert.equal(mathEnforcer.sum(10, -5), 5)
        });
        it('If the parameter is NOT a number is a null, the function should return undefined.', () => {
            assert.equal(mathEnforcer.sum(0, 5), 5)
        });
        it('If the parameter is NOT a number i undefined, the function should return undefined.', () => {
            assert.equal(mathEnforcer.sum(1.5, 3.5), 5)
        });
        it('If the parameter is NOT a number i undefined, the function should return undefined.', () => {
            assert.equal(mathEnforcer.sum(1.7, 3.5), 5.2)
        });
        it('If the parameter is NOT a number is a null, the function should return undefined.', () => {
            assert.equal(mathEnforcer.sum(100, 500), 600)
        });
        it('If the parameter is NOT a number i undefined, the function should return undefined.', () => {
            assert.equal(mathEnforcer.sum(-100, -200), -300)
        });
        it('If the parameter is NOT a number i undefined, the function should return undefined.', () => {
            assert.equal(mathEnforcer.sum(0, 0), 0)
        });
        it('If the parameter is NOT a number i undefined, the function should return undefined.', () => {
            assert.equal(mathEnforcer.sum(-10, 10), 0)
        });
        it('If the parameter is NOT a number i undefined, the function should return undefined.', () => {
            assert.equal(mathEnforcer.sum(-1.5, -3.5), -5)
        });
        it('If the parameter is NOT a number i undefined, the function should return undefined.', () => {
            assert.equal(mathEnforcer.sum(-1.3, -3.5), -4.8)
        });
        it('If the parameter is NOT a number i undefined, the function should return undefined.', () => {
            assert.equal(mathEnforcer.sum(undefined, undefined), undefined)
        });
       
    });

});