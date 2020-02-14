var PaymentPackage = require('./Payment Package');
var assert = require('chai').assert;

describe('PaymentPackage', () => {
    describe('constructor', () => {
        it('should throw error with wrong params', () => {
            assert.throw(() => new PaymentPackage({}, 10), 'Name must be a non-empty string');
            assert.throw(() => new PaymentPackage('', 10), 'Name must be a non-empty string');
            assert.throw(() => new PaymentPackage('test', []), 'Value must be a non-negative number');
            assert.throw(() => new PaymentPackage('test', -10), 'Value must be a non-negative number');

        });
        it('should set correct values', () => {
            let payment = new PaymentPackage('test', 10);
            assert.equal(payment._name, 'test');
            assert.equal(payment._value, 10);
            assert.equal(payment._VAT, 20);
            assert.equal(payment._active, true);
            let expectedResult = [
                `Package: test`,
                `- Value (excl. VAT): 10`,
                `- Value (VAT 20%): 12`
            ].join('\n');
            assert.equal(payment.toString(), expectedResult);
        });
    });
    
    describe('VAT', () => {
        it('should throw error',()=>{
            let payment = new PaymentPackage('test', 10);
            assert.throw(()=>payment.VAT=[],'VAT must be a non-negative number');
            assert.throw(()=>payment.VAT=-10,'VAT must be a non-negative number');
        });
        it('VAT set correctly',()=>{
            let payment = new PaymentPackage('test', 10);
            payment.VAT=50;
            assert.equal(payment.VAT,50);
            assert.equal(payment._name, 'test');
            assert.equal(payment._value, 10);
            assert.equal(payment._active, true);
            
            let expectedResult = [
                `Package: test`,
                `- Value (excl. VAT): 10`,
                `- Value (VAT 50%): 15`
            ].join('\n');
            assert.equal(payment.toString(), expectedResult);
        });
    });
    
    describe('active', () => {
        it('should throw error',()=>{
            let payment = new PaymentPackage('test', 10);
            assert.throw(()=>payment.active=[],'Active status must be a boolean');
        });
        it('active set correctly',()=>{
            let payment = new PaymentPackage('test', 10);
            payment.active=false;
            assert.equal(payment._name, 'test');
            assert.equal(payment._value, 10);
            assert.equal(payment._VAT, 20);

            assert.equal(payment._active,false);
            let expectedResult = [
                `Package: test (inactive)`,
                `- Value (excl. VAT): 10`,
                `- Value (VAT 20%): 12`
            ].join('\n');
            assert.equal(payment.toString(), expectedResult);
        });
    });
});