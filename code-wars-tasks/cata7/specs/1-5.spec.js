const SeriesSum = require('../task/1-5')
const expect = require('chai').expect

describe('Sum of the first nth term of Series',()=>{
    it('SeriesSum(1) ', function () {
        expect(SeriesSum(1)).to.eq("1.00")
    });
    it('SeriesSum(2) ', function () {
        expect(SeriesSum(2)).to.eq("1.25")
    });
    it('SeriesSum(3) ', function () {
        expect(SeriesSum(3)).to.eq("1.39")
    });
    it('SeriesSum(4) ', function () {
        expect(SeriesSum(4)).to.eq("1.49")
    });
    it('SeriesSum(5) ', function () {
        expect(SeriesSum(5)).to.eq("1.57")
    });
})
