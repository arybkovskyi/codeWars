const numericalTriangle = require('../task/1-10')
const expect = require('chai').expect

describe('numericalTriangle of digits', function () {
    it('numericalTriangle of 5', function () {
        expect(numericalTriangle(5)).to.eq('1\n2 2\n3 3 3\n4 4 4 4\n5 5 5 5 5')
    });

    it('numericalTriangle of 7', function () {
        expect(numericalTriangle(7)).to.eq('1\n2 2\n3 3 3\n4 4 4 4\n5 5 5 5 5\n6 6 6 6 6 6\n7 7 7 7 7 7 7')
    });
})