const onlineStore = require("./onlineStore")
const { assert, expect } = require('chai')


describe('test onlineStore ', () => {
  describe('isProductAvailable ', () => {

    it('test isProductAvailable(Invalid input.") ', () => {
      expect(() => onlineStore.isProductAvailable('phone', "phone")).to.throw("Invalid input.")
      expect(() => onlineStore.isProductAvailable(5, "phone")).to.throw("Invalid input.")
      expect(() => onlineStore.isProductAvailable(5, 5)).to.throw("Invalid input.")

    });
    it('test isProductAvailable valid output', () => {
      expect(onlineStore.isProductAvailable('phone', 0)).to.equal(`Sorry, phone is currently out of stock.`)
      
      expect(onlineStore.isProductAvailable('phone', -2)).to.equal(`Sorry, phone is currently out of stock.`)
      expect(onlineStore.isProductAvailable('phone', 5)).to.equal(`Great! phone is available for purchase.`)
      expect(onlineStore.isProductAvailable('phone', 10)).to.equal(`Great! phone is available for purchase.`)
        
    });
   
  });

  describe('canAffordProduct(productPrice, accountBalance)- ', () => {
    it('A function that accepts two parameters: a number representing the product price and a number representing the account balance', () => {
      expect(onlineStore.isProductAvailable(50, 100)).to.equal("You don't have sufficient funds to buy this product.")
    });
  });

  describe('', () => {
    it('', () => {

    });
  });

});