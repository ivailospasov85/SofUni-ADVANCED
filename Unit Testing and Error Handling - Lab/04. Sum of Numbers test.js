
const { should, expect } = require('chai');
const sum = require('./04. Sum of Numbers')


describe('Sum of Numbers', () => {

    it('should return the sum of the  numbers in the Array', () => {
        let numbers = [1, 2, 3, 4, 5]
        let expectedSum = 15
        let actualSum = sum(numbers)

        expect(actualSum).to.equal(expectedSum)
    })

    it('should return the sum of negative numbers only ', () => {
        let numbers = [1, 2, 3, 4, 5]
        let expectedSum = 15
        let actualSum = sum(numbers)

        expect(actualSum).to.equal(expectedSum)
    })

})


