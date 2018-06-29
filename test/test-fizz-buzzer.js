const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    //normal cases
    it('should return fizz-buzz if divisible by 15, fizz for 3 and buzz for 5', function () {
        const normalCases = [
            [6, 'fizz'],
            [10, 'buzz'],
            [30, 'fizz-buzz']
        ];
        normalCases.forEach(normalCase => {
            const answer = fizzBuzzer(normalCase[0]);
            expect(answer).to.equal(normalCase[1]);
        });
    });

    it('should throw an error if input not an number', function () {
        const badInputs = ['z', true, 'eleven'];
        badInputs.forEach(input => {
            expect(() => {
                fizzBuzzer(input)
            }).to.throw(Error);
        });
    });
});

