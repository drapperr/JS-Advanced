var StringBuilder = require('./StringBuilder');
var assert = require('chai').assert;

describe('StringBuilder', () => {
    describe('Constructor', () => {
        it('Create empty array with undefined', () => {
            let sb = new StringBuilder(undefined);
            let result = sb.toString();
            let expectedResult = '';
            assert.equal(result, expectedResult);
        });

        it('Should throw error with wrong parameter', () => {
            assert.throw(() => new StringBuilder({}),'Argument must be string');
        });

        it('Set array with correct parameter', () => {
            let sb = new StringBuilder('abcd');
            let result = sb.toString();
            let expectedResult = 'abcd';
            assert.equal(result, expectedResult);
        });
    });
    describe('append', () => {
        it('Should throw error with wrong parameter', () => {
            let sb = new StringBuilder('abcd');
            assert.throw(() => sb.append({}), 'Argument must be string');
        });
        it('Should append correctly',()=>{
            let sb = new StringBuilder('abcd');
            sb.append('efg');
            let result = sb.toString();
            let expectedResult = 'abcdefg';
            assert.equal(result, expectedResult);
        });
    });
    describe('prepend', () => {
        it('Should throw error with wrong parameter', () => {
            let sb = new StringBuilder('abcd');
            assert.throw(() => sb.prepend({}), 'Argument must be string');
        });
        it('Should prepend correctly',()=>{
            let sb = new StringBuilder('abcd');
            sb.prepend('efg');
            let result = sb.toString();
            let expectedResult = 'efgabcd';
            assert.equal(result, expectedResult);
        });
    });
    describe('insertAt', () => {
        it('Should throw error with wrong parameter', () => {
            let sb = new StringBuilder('abcd');
            assert.throw(() => sb.insertAt({},10), 'Argument must be string');
        });
        it('test insertAt', () => {
            let sb = new StringBuilder('ad');
            sb.insertAt('bc', 1);
     
            assert.deepEqual(sb._stringArray, ['a','b', 'c', 'd']);
        });
    });
    describe('remove', () => {
        it('Should remove correctly',()=>{
            let sb = new StringBuilder('abcd');
            sb.remove(1,2);
            let result = sb.toString();
            let expectedResult = 'ad';
            assert.equal(result, expectedResult);
        });
        it('Should remove correctly',()=>{
            let sb = new StringBuilder('abcd');
            sb.remove(-10,20);
            let result = sb.toString();
            let expectedResult = '';
            assert.equal(result, expectedResult);
        });
    });
    describe('_vrfyParam', () => {
        it('Should throw error',()=>{
            assert.throw(()=>StringBuilder._vrfyParam({}),'Argument must be string')
        });
        it('Should not throw error',()=>{
            assert.equal(StringBuilder._vrfyParam('sa'),undefined)
        });
    });
});