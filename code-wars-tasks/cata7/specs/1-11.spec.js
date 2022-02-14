const totalBanknotes = require ('../task/1-11')
const expect = require('chai').expect

describe('ATM. FIND Minimum needed number of banknotes', ()=>{
    it('should find minimum number for 1250', function () {
        expect(totalBanknotes(1250)).to.eq(4)
    });

    it('should find minimum number for 770', function () {
        expect(totalBanknotes(770)).to.eq(4)
    });

    it('should find minimum number for 550', function () {
        expect(totalBanknotes(550)).to.eq(2)
    });

    it('should find minimum number for 42', function () {
        expect(totalBanknotes(42)).to.eq(-1)
    });
})