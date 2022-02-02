//DISCOVER ORIGINAL PRICE (tests)
const expect = require('chai').expect
const discoverOriginalPrice = require ('../task/1-1.js');

describe('DISCOVER ORIGINAL PRICE',()=>{
    it('Original price of 75',()=>{
        expect(discoverOriginalPrice(75,25)).to.equal(100)
    })
    it('Original price of 42',()=>{
        expect(discoverOriginalPrice(42,30)).to.equal(60)
    })
    it('Original price of 21',()=>{
        expect(discoverOriginalPrice(21,44)).to.equal(37.5)
    })
    it.only('Original price of 1',()=>{
        expect(discoverOriginalPrice(1,50)).to.equal(2)
    })
})