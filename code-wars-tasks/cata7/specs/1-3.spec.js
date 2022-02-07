const getSum = require('../task/1-3')
const expect = require('chai').expect

describe('Beginner Series #3 Sum of Numbers',()=>{
    it('Sum of integers for -7 and 5',()=>{
        expect(getSum(-7,5)).to.eq(-13)
    })
    it('Sum of integers for -1 and 0',()=>{
        expect(getSum(-1,0)).to.eq(-1)
    })
    it('Sum of integers for 0 and 1',()=>{
        expect(getSum(0,1)).to.eq(1)
    })
})