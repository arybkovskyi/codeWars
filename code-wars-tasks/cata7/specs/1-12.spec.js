const FilterString = require('../task/1-12')
const expect = require('chai').expect

describe('Filter the number', ()=>{
    it('should filter the number in 123', function () {
        expect(FilterString("123")).to.eq(123)
    });

    it('should filter the number in a1b2c3', function () {
        expect(FilterString("a1b2c3")).to.eq(123)
    });

    it('should filter the number in aa1bb2cc3dd', function () {
        expect(FilterString("aa1bb2cc3dd")).to.eq(123)
    });
})