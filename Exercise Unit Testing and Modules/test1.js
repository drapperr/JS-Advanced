var isOddOrEven = require('./Even Or Odd');
var assert = require('chai').assert;

describe('Odd or Even', ()=> {
    it('Should return undefined if parameter is not string', ()=> {
        assert.equal(isOddOrEven([]),undefined);
    });
    it('Should return even', ()=> {
        assert.equal(isOddOrEven('abcd'),'even');
    });
    it('Should return odd', ()=> {
        assert.equal(isOddOrEven('abcde'),'odd');
    });
});