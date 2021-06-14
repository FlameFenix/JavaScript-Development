const { assert } = require('chai');
let isOddOrEven = require('../EvenOrOdd.js');

describe('testing odd or even functionality', () => {
    it('should return correct result odd', () => {
        assert.equal(isOddOrEven('bye'), 'odd');
    });

    it('should return correct result even', () => {
        assert.equal(isOddOrEven('volume'), 'even');
    });

    it('should return undefined', () => {
        assert.equal(isOddOrEven([1, 2, 3]), undefined);
        assert.equal(isOddOrEven(2.5), undefined);
        assert.equal(isOddOrEven(null), undefined);
    });
})