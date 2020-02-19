let SkiResort = require('./solution');
let assert = require('chai').assert;

describe('SkiResort', function () {
    it('constructor',()=>{
        let skiResort=new SkiResort('name');
        assert.equal(skiResort.name,'name');
        assert.equal(skiResort.voters,0);
        assert.deepEqual(skiResort.hotels,[]);
    });

    it('build',()=>{
        let skiResort=new SkiResort('name');

        assert.throws(()=>skiResort.build('',10),'Invalid input');
        assert.throws(()=>skiResort.build('name',0),'Invalid input');
        assert.throws(()=>skiResort.build('name',-10),'Invalid input');

        assert.equal(skiResort.build('name',10),`Successfully built new hotel - name`);
        let hotel = {
            name:'name',
            beds:10,
            points: 0
        }
        assert.deepEqual(skiResort.hotels[0],hotel);
    });

    it('book',()=>{
        let skiResort=new SkiResort('name');
        skiResort.build('Hotel',10);

        assert.throws(()=>skiResort.book('',10),'Invalid input');
        assert.throws(()=>skiResort.book('valid',0),'Invalid input');
        assert.throws(()=>skiResort.book('valid',-10),'Invalid input');

        assert.throws(()=>skiResort.book('Hotel2',10),'There is no such hotel');
        assert.throws(()=>skiResort.book('Hotel',11),'There is no free space');

        assert.equal(skiResort.book('Hotel',10),'Successfully booked');

        let hotel = skiResort.hotels.find(hotel => hotel.name === 'Hotel');

        assert.equal(hotel.beds,0)
    });

    it('leave',()=>{
        let skiResort=new SkiResort('name');
        skiResort.build('Hotel',10);

        assert.throws(()=>skiResort.leave('',10,20),"Invalid input");
        assert.throws(()=>skiResort.leave('name',0,20),"Invalid input");
        assert.throws(()=>skiResort.leave('name',-10,20),"Invalid input");

        assert.throws(()=>skiResort.leave('name',10,20),"There is no such hotel");
        
        assert.equal(skiResort.leave('Hotel',10,20),`10 people left Hotel hotel`);

        let hotel = skiResort.hotels.find(hotel => hotel.name === 'Hotel');

        assert.equal(hotel.points,200);
        assert.equal(hotel.beds,20);
        assert.equal(skiResort.voters,10);
    });

    it('averageGrade',()=>{
        let skiResort=new SkiResort('name');
        skiResort.build('Hotel',10);
        skiResort.build('Hotel2',10);
        assert.equal(skiResort.averageGrade(),"No votes yet");

        skiResort.leave('Hotel',10,20);
        skiResort.leave('Hotel2',10,10);

        assert.equal(skiResort.averageGrade(),`Average grade: 15.00`);

    });

    it('bestHotel',()=>{
        let skiResort=new SkiResort('name');
        skiResort.build('Hotel',10);
        skiResort.build('Hotel2',10);
        assert.equal(skiResort.bestHotel,"No votes yet");

        skiResort.leave('Hotel',10,20);
        skiResort.leave('Hotel2',10,10);

        assert.equal(skiResort.bestHotel,`Best hotel is Hotel with grade 200. Available beds: 20`);


    });
});
