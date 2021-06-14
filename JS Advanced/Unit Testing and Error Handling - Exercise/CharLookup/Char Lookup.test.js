const { assert } = require('chai');
let lookupChar = require('../Char Lookup.js');

describe('testing functionality of lookupchar', () => {

    it('should work return undefined', () => {
        assert.equal(lookupChar(1, 5), undefined);
        assert.equal(lookupChar('protocol', 2.5), undefined);
    });

    it('should work return incorrect index', () => {
        assert.equal(lookupChar('elements', 15), "Incorrect index");
        assert.equal(lookupChar('protocol', -3), "Incorrect index");
    });

    it('should work correct', () => {
        assert.equal(lookupChar('elements', 3), 'elements'[3]);
    });
})
