let Parser = require("./solution.js");
let assert = require("chai").assert;

describe("MyTests", () => {
    it('constructor',()=>{
        let parser= new Parser('{"Nancy":"architect"}');

        assert.deepEqual(parser._data,{
            Nancy:"architect"
        });
        assert.deepEqual(parser._log,[]);
    });

    it('getData',()=>{
        let parser=new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
        parser.removeEntry('Nancy');

        assert.deepEqual(JSON.stringify(parser.data),'[{"John":"developer"},{"Kate":"HR"}]')
    });

    it('print',()=>{
        let parser=new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');

        assert.equal(parser.print(),'id|name|position\n0|Nancy|architect\n1|John|developer\n2|Kate|HR');
        assert.deepEqual(parser._log,['0: print'])

        parser.removeEntry('Nancy')
        assert.equal(parser.print(),'id|name|position\n0|John|developer\n1|Kate|HR');
        assert.deepEqual(JSON.stringify(parser._log),'["0: print","1: removeEntry","2: print"]')
    })

    it('addEntries',()=>{
        let parser=new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
        assert.equal(parser.addEntries("Steven:tech-support Edd:administrator"),"Entries added!");

        assert.deepEqual(JSON.stringify(parser._data),'[{"Nancy":"architect"},{"John":"developer"},{"Kate":"HR"},{"Steven":"tech-support"},{"Edd":"administrator"}]')
        assert.deepEqual(parser._log,['0: addEntries'])
    })

    it('removeEntry',()=>{
        let parser=new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');

        assert.throws(()=>parser.removeEntry('aa'),"There is no such entry!")

        assert.equal(parser.removeEntry("Nancy"),"Removed correctly!");

        assert.deepEqual(parser._log,['0: removeEntry'])

        assert.throws(()=>parser.removeEntry('Nancy'),"There is no such entry!")

        assert.deepEqual(JSON.stringify(parser._data),'[{"Nancy":"architect","deleted":true},{"John":"developer"},{"Kate":"HR"}]')
    })

    it('addToLog',()=>{
        let parser=new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');

        assert.equal(parser._addToLog("print"),"Added to log");
        assert.deepEqual(JSON.stringify(parser._log),'["0: print"]')

        assert.equal(parser._addToLog("addEntries"),"Added to log");
        assert.deepEqual(JSON.stringify(parser._log),'["0: print","1: addEntries"]')
    })
});