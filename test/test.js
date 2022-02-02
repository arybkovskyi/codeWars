const expect = require('chai').expect;
const {getSum, getDivisorsCnt, discoverOriginalPrice} = require('../functions/functions_basic');

it('should sum 2 + 3 equal 5' , function () {
    expect(getSum(2,3)).to.equal(5)
});


describe('Count the divisors of a number',()=>{
    it('Count the divisors of a number 1 ', function () {
        expect(getDivisorsCnt(1)).to.equal(1)
    });

    it('Count the divisors of a number 10 ', function () {
        expect(getDivisorsCnt(10)).to.equal(4)
    });

    it('Count the divisors of a number 11 ', function () {
        expect(getDivisorsCnt(11)).to.equal(2)
    });

    it('Count the divisors of a number 54 ', function () {
        expect(getDivisorsCnt(54)).to.equal(8)
    });
})



describe('DISCOVER ORIGINAL PRICE',()=>{
    it('Original price of 75',()=>{
        expect(discoverOriginalPrice(75,25)).to.equal(100)
    })
})