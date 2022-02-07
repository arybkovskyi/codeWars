const sumTriangularNumbers = require ('../task/1-2')
const expect = require('chai').expect

describe('Sum of Triangular Numbers', ()=>{
    it('sumTriangularNumbers(6)',()=>{
        expect(sumTriangularNumbers(6)).to.eq(56)
    })
    it('sumTriangularNumbers(34)',()=>{
        expect(sumTriangularNumbers(34)).to.eq(7140)
    })
    it('sumTriangularNumbers(-291)',()=>{
        expect(sumTriangularNumbers(-291)).to.eq(0)
    })
    it('sumTriangularNumbers(17)',()=>{
        expect(sumTriangularNumbers(17)).to.eq(969)
    })
    it('sumTriangularNumbers(38)',()=>{
        expect(sumTriangularNumbers(38)).to.eq(9880)
    })
    it('sumTriangularNumbers(943)',()=>{
        expect(sumTriangularNumbers(943)).to.eq(140205240)
    })
})