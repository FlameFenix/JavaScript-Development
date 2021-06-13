const { assert } = require('chai');
let createCalculator = require('../AddSubtract.js');

describe('obj add/subtract functionality', () => {
    
    it('should return correct result when adding num', () => {
        let obj = createCalculator();
        obj.add(2);
        obj.add(3);
        let expectedValue = 5;
        assert.equal(obj.get(), expectedValue);
    })

    it('should return correct result when subtract num', () => {
        let obj = createCalculator();
        obj.subtract(2);
        obj.subtract(3);
        let expectedValue = -5;
        assert.equal(obj.get(), expectedValue);
    })

    it('should return correct sum', () => {
        let obj = createCalculator();
        obj.add(10);
        obj.subtract(5);
        let expectedValue = 5;
        assert.equal(obj.get(), expectedValue);
    })

    it('should return correct result when getting value', () => {
        let obj = createCalculator();
        let expectedValue = 0;
        assert.equal(obj.get(), expectedValue);
    })

    it('should return NaN if add something which is cannot be parsed as a number', () => {
        let obj = createCalculator();
        obj.add('pesho')
        assert.isNaN(obj.get());
    })

    it('should return NaN if subtract something which is cannot be parsed as a number', () => {
        let obj = createCalculator();
        obj.subtract('pesho')
        assert.isNaN(obj.get());
    })
    
    it('should return correct answer when parsing string to number', () => {
        let obj = createCalculator();
        obj.add('10');
        obj.subtract(3);
        obj.add(3);
        obj.subtract('3');
        let expectedResult = 7;
        assert.equal(obj.get(), expectedResult);
    })
});
