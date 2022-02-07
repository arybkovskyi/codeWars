const isPronic = require('../task/1-4')
const expect = require ('chai').expect

describe('Figurate Numbers #2 - Pronic Number', ()=>{
    it('isPronic(0)',()=>{
        expect(isPronic(0)).to.eq(true)
    })
    it('isPronic(1)',()=>{
        expect(isPronic(1)).to.eq(false)
    })
    it('isPronic(2)',()=>{
        expect(isPronic(2)).to.eq(true)
    })
    it('isPronic(3)',()=>{
        expect(isPronic(3)).to.eq(false)
    })
    it('isPronic(4)',()=>{
        expect(isPronic(4)).to.eq(false)
    })
    it('isPronic(5)',()=>{
        expect(isPronic(5)).to.eq(false)
    })
    it('isPronic(6)',()=>{
        expect(isPronic(6)).to.eq(true)
    })
})