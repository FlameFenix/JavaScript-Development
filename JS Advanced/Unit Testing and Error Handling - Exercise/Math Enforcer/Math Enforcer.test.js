const { assert } = require('chai');
let mathEnforcer = require('../Math Enforcer.js');

describe('testing functionality of mathEnforcer', () => {
    describe('testing AddFive functionality', () => {

        it('should return correct answer for addFive', () => {
            assert.equal(mathEnforcer.addFive(5), 10);
            assert.equal(mathEnforcer.addFive(-5), 0);
            assert.equal(mathEnforcer.addFive(2.5), 2.5 + 5);
        })

        it('should return undefined if input is not a number', () => {
            assert.equal(mathEnforcer.addFive('5'), undefined);
            assert.equal(mathEnforcer.addFive([]), undefined);
            assert.equal(mathEnforcer.addFive(null), undefined);
            assert.equal(mathEnforcer.addFive(undefined), undefined);
        })

    });

    describe('testing subtractTen functionality', () => {

        it('should return correct answer for subtractTen', () => {
            assert.equal(mathEnforcer.subtractTen(25), 15);
            assert.equal(mathEnforcer.subtractTen(-25), -35);
            assert.equal(mathEnforcer.subtractTen(25.5), 25.5 - 10);
        })

        it('should return undefined if input is not a number', () => {
            assert.equal(mathEnforcer.subtractTen('5'), undefined);
            assert.equal(mathEnforcer.subtractTen([]), undefined);
            assert.equal(mathEnforcer.subtractTen(null), undefined);
            assert.equal(mathEnforcer.subtractTen(undefined), undefined);
        })

    });

    describe('testing sum functionality', () => {

        it('should return correct answer for sum both numbers', () => {
            assert.equal(mathEnforcer.sum(5, 5), 10);
            assert.equal(mathEnforcer.sum(-5, -5), -10);
            assert.equal(mathEnforcer.sum(2.5, 2.5), 2.5 + 2.5);
        })

        it('should return undefined if input is not a number', () => {
            assert.equal(mathEnforcer.sum('5', 5), undefined);
            assert.equal(mathEnforcer.sum(5, '5'), undefined);
            assert.equal(mathEnforcer.sum('5', '5'), undefined);
            assert.equal(mathEnforcer.sum(null, null), undefined);
            assert.equal(mathEnforcer.sum(undefined, undefined), undefined);
        })

    });
    
});