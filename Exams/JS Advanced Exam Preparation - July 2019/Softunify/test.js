let SoftUniFy = require('./03. Softunify_Ресурси');
let assert = require('chai').assert;

describe("SoftUniFy", function () {
    it('constructor',()=>{
        let softUniFy=new SoftUniFy();

        assert.deepEqual(softUniFy.allSongs,{});
    });

    it('downloadSong',()=>{
        let softUniFy=new SoftUniFy();
        softUniFy.downloadSong('artist', 'song', 'lyrics');

        assert.deepEqual(softUniFy.allSongs,{
            'artist':{
                rate: 0, 
                votes: 0, 
                songs: ['song - lyrics']
            }
        });

        softUniFy.downloadSong('artist', 'song2', 'lyrics2');

        assert.deepEqual(softUniFy.allSongs,{
            'artist':{
                rate: 0, 
                votes: 0, 
                songs: ['song - lyrics','song2 - lyrics2']
            }
        });
    });
    
    it('playSong',()=>{
        let softUniFy=new SoftUniFy();
        softUniFy.downloadSong('artist', 'song', 'lyrics');
        softUniFy.downloadSong('artist2', 'song', 'lyrics');

        assert.equal(softUniFy.playSong('something'),`You have not downloaded a something song yet. Use SoftUniFy's function downloadSong() to change that!`);
        let expected='artist:\nsong - lyrics\nartist2:\nsong - lyrics\n';
        assert.equal(softUniFy.playSong('song'),expected);
    });

    it('songsList',()=>{
        let softUniFy=new SoftUniFy();

        assert.equal(softUniFy.songsList,'Your song list is empty');
        softUniFy.downloadSong('artist', 'song', 'lyrics');
        softUniFy.downloadSong('artist2', 'song', 'lyrics');

        assert.equal(softUniFy.songsList,'song - lyrics\nsong - lyrics');
    });

    it('rateArtist',()=>{
        let softUniFy=new SoftUniFy();

        assert.equal(softUniFy.rateArtist('a'),`The a is not on your artist list.`);
        softUniFy.downloadSong('artist', 'song', 'lyrics');
        softUniFy.downloadSong('artist2', 'song', 'lyrics');

        assert.equal(softUniFy.rateArtist('artist2','as'),0);
        assert.equal(softUniFy.allSongs['artist2']['votes'],1)

        assert.equal(softUniFy.rateArtist('artist','20'),20);
        assert.equal(softUniFy.allSongs['artist']['rate'],20)
        assert.equal(softUniFy.allSongs['artist']['votes'],1)
    });
}); 