const halvingSum = require ('../task/1-7')
const expect = require ('chai').expect

describe('Halving Sum',function(){
    it('halving sum of 25', function () {
        expect(halvingSum(25)).to.eq(47)
    });

    it('halving sum of 39', function () {
        expect(halvingSum(39)).to.eq(74)
    });

    it('halving sum of 61', function () {
        expect(halvingSum(61)).to.eq(117)
    });

    it('halving sum of 64', function () {
        expect(halvingSum(64)).to.eq(127)
    });

    it('halving sum of 1', function () {
        expect(halvingSum(1)).to.eq(1)
    });

    it('halving sum of -7', function () {
        expect(halvingSum(-7)).to.eq(0)
    });
})