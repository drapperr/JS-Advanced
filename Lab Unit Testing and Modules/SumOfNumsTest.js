var sum = require('./Sum of Numbers');
var assert = require('chai').assert;

describe('Sum function', function () {
  it('should return 2', function () {
    assert.equal(sum([1,1]),2);
  });
  it('should return -2', function () {
    assert.equal(sum([-1,-1]),-2);
  });
  it('should return 0', function () {
    assert.equal(sum([]),0);
  });
});
