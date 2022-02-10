const numericalTable = require ('../task/1-9')
const expect = require ('chai').expect

describe('NUMERICAL TABLE', function (){
    it('Numerical table 5', function () {
        expect(numericalTable(5)).to.eq("1 1 1 1 1\n2 2 2 2 2\n3 3 3 3 3\n4 4 4 4 4\n5 5 5 5 5")
    });

    it('Numerical table 3', function () {
        expect(numericalTable(3)).to.eq("1 1 1 1 1\n2 2 2 2 2\n3 3 3 3 3")
    });
})