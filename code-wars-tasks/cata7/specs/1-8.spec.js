const sumsInArray = require ('../task/1-8')
const expect = require ('chai').expect

describe('FIND SUMS of Arrays inside of array', ()=>{
    it('sums of array ([[1, 2], [2, -3, 1, 1], [3, 5, 10], [3, 7]])', ()=> {
        expect(sumsInArray([[1, 2], [2, -3, 1, 1], [3, 5, 10], [3, 7]])).to.equal([3, 1, 18, 10])
    });

    it('sums of array ([[1, 2], [2, -3, 1, 1], [3, 5, 10], [3, 7]])', ()=> {
        expect(sumsInArray([[1, 2], [2, 0], [4, 1], [3, 5]])).to.equal([3, 2, 5, 8])
    });
})