var isSymmetric = require('./Check for Symmetry');
var assert = require('chai').assert;

describe('isSymmetric', ()=> {
    it('Should return false if argument is not an array', ()=> {
        assert.equal(isSymmetric(''),false)
    });

    it('Should return false if an array is not symetric', ()=> {
        assert.equal(isSymmetric([1,2,3,4]),false)
    });

    it('Should return false with zero elements', ()=> {
        assert.equal(isSymmetric([]),true)
    });

    it('Should return true if an array is symetric', ()=> {
        assert.equal(isSymmetric([1,2,2,1]),true)
    });

    it('Should return true if an array is symetric', ()=> {
        assert.equal(isSymmetric([1,2,3,2,1]),true)
    });
});