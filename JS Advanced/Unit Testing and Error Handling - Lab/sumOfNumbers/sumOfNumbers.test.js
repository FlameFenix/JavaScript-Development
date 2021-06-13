const { assert } = require('chai');
const sum = require('../sumOfNumbers.js');

describe('testing functionality', () => {

    it('should return expected result', () => {
        let actualResult = sum([5, 6, 5, 6]);
        let expectedResult = 22;
        assert.equal(actualResult, expectedResult);
    });

    it('should return wrong result', () => {
        let actualResult = sum([5, 6, 5, 6]);
        let expectedResult = 12;
        assert.notEqual(actualResult, expectedResult);
    });

    it('should return wrong type', () => {
        let actualResult = sum(['pesho', 'gosho', 'misho', 'stoqn']);
        let expectedResult = typeof(actualResult);
        assert.notEqual(typeof(actualResult), typeof(expectedResult));
    });
});