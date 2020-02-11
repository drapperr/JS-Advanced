var mathEnforcer = require('./Math Enforcer');
var assert = require('chai').assert;

describe('MathEnforcer', ()=> {
    it('addFive should return undefined', ()=> {
        assert.equal(mathEnforcer.addFive('aaa'),undefined);
    });
    it('addFive with valid args', ()=> {
        assert.equal(mathEnforcer.addFive(5),10);
        assert.equal(mathEnforcer.addFive(-5),0);
        assert.equal(mathEnforcer.addFive(1.15),6.15);
    });
    it('subtractTen should return undefined', ()=> {
        assert.equal(mathEnforcer.subtractTen('aaa'),undefined);
    });
    it('subtractTen with valid args', ()=> {
        assert.equal(mathEnforcer.subtractTen(20),10);
        assert.equal(mathEnforcer.subtractTen(-10),-20);
        assert.equal(mathEnforcer.subtractTen(20.25),10.25);
    });
    it('sum should return undefined', ()=> {
        assert.equal(mathEnforcer.sum('aaa',2),undefined);
    });
    it('sum should return undefined', ()=> {
        assert.equal(mathEnforcer.sum(3,'aaa'),undefined);
    });
    it('sum with valid args', ()=> {
        assert.equal(mathEnforcer.sum(5,5),10);
        assert.equal(mathEnforcer.sum(-5,-5),-10);
        assert.equal(mathEnforcer.sum(5.26,5.26),10.52);
    });
});