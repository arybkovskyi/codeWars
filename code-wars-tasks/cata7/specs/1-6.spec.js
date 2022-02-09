const roundToNext5 = require ('../task/1-6')
const expect = require ('chai').expect

describe('Round up to the next multiple of 5',()=>{
    it('next multiple of 5(0) ', function () {
        expect(roundToNext5(0)).to.eq(0)
    });

    it('next multiple of 5(1) ', function () {
        expect(roundToNext5(1)).to.eq(5)
    });

    it('next multiple of 5(-1) ', function () {
        expect(roundToNext5(-1)).to.eq(0)
    });

    it('next multiple of 5(7) ', function () {
        expect(roundToNext5(7)).to.eq(10)
    });

    it('next multiple of 5(990) ', function () {
        expect(roundToNext5(990)).to.eq(990)
    });
})

