const { assert } = require('chai');
let isSymmetric = require('../checkSymmetry.js');

describe('checking an array for symmetry', () => {

    it('should return true when array is symmetric', () => {
        let result = isSymmetric([1, 2, 3, 2, 1])
        let expectedResult = true;
        assert.equal(result, expectedResult);
    });

    it('should return true when array is symmetric with negative numbers', () => {
        let result = isSymmetric([-1, -2, -3, -2, -1])
        let expectedResult = true;
        assert.equal(result, expectedResult);
    });

    it('should return false when array is not symmetric', () => {
        let result = isSymmetric([1, 1, 3, 2, 1])
        let expectedResult = false;
        assert.equal(result, expectedResult);
    });

    it('should return false when array is wrong type', () => {
        let result = isSymmetric('Im string')
        let expectedResult = false;
        assert.equal(result, expectedResult);
    });

    it('should return false when array is wrong multiple types', () => {
        let result = isSymmetric(['1', 1]);
        let expectedResult = false;
        assert.equal(result, expectedResult);
    });

})