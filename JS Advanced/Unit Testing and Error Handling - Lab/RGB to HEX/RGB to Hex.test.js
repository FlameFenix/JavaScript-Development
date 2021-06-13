const { assert } = require('chai');
let rgbToHexColor = require('../RGB to Hex.js');

describe('rgb to hex converter functionality', () => {

    it('should return expected output', () => {

        let actualValue = rgbToHexColor(255,255,255);
        let expectedValue = "#FFFFFF";

        assert.equal(actualValue, expectedValue);

        actualValue = rgbToHexColor(0,0,0);
         expectedValue = "#000000";

        assert.equal(actualValue, expectedValue);
    });

    it('should return wrong output', () => {

        let actualValue = rgbToHexColor(50,25,50);
        let expectedValue = '#321652';
        assert.notEqual(actualValue, expectedValue);

    });
    
    it('should return expected output type', () => {

        let actualValue = rgbToHexColor(50,25,50);
        let expectedValue = '#321932';
        assert.equal(typeof(actualValue), typeof(expectedValue));

    });

    it('should return undefined output for wrong type in array', () => {

        let actualValueRedColor = rgbToHexColor('5',25,50);
        assert.equal(actualValueRedColor, undefined);
        actualValueRedColor = rgbToHexColor(50,'5',50);
        assert.equal(actualValueRedColor, undefined);
        actualValueRedColor = rgbToHexColor(50,25,'5');
        assert.equal(actualValueRedColor, undefined);

    });

    it('should return undefined output for higher value than allowed', () => {

        let actualValueRed = rgbToHexColor(256,25,50);
        assert.equal(actualValueRed, undefined);
        actualValueRed = rgbToHexColor(50,256,50);
        assert.equal(actualValueRed, undefined);
        actualValueRed = rgbToHexColor(50,25,256);
        assert.equal(actualValueRed, undefined);

    });

    it('should return undefined output for lower value than allowed', () => {

        let actualValueRed = rgbToHexColor(50,25,-5);
        assert.equal(actualValueRed, undefined);
        actualValueRed = rgbToHexColor(50,-5,50);
        assert.equal(actualValueRed, undefined);
        actualValueRed = rgbToHexColor(-5,25,50);
        assert.equal(actualValueRed, undefined);

    });

})