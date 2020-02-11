var lookupChar = require('./Char Lookup');
var assert = require('chai').assert;

describe('LookupCharn', ()=> {
    it('Should return undefined if first parameter is not string', ()=> {
        assert.equal(lookupChar(5,5),undefined);
    });
    it('Should return undefined if second parameter is not a integer', ()=> {
        assert.equal(lookupChar('abcd',1.5),undefined);
    });
    it('Should return undefined if second parameter is not a number', ()=> {
        assert.equal(lookupChar('abcd',{}),undefined);
    });
    it('Should return incorrectIndex', ()=> {
        assert.equal(lookupChar('abcde',100),'Incorrect index');
    });
    it('Should return incorrectIndex', ()=> {
        assert.equal(lookupChar('abcde',-100),'Incorrect index');
    });
    it('Should return c', ()=> {
        assert.equal(lookupChar('abcde',2),'c');
    });
});