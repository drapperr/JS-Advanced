function solve() {
    let string = document.querySelector('#string').value;
    let text = document.querySelector('#text').value;
    let output = document.querySelector('#result');

    output.innerHTML = findCoordinates(string, text);

    function findCoordinates(keyword, data) {
        let regexCoordinate = /(north|east)[^\d]*(\d{2})[^,]*,[^,]*?(\d{6})/igm;
                                    
        let matches = data.match(regexCoordinate);
        matches.reverse();
        let northElements =/north[^\d]*(\d{2})[^,]*,[^,]*?(\d{6})/igm.exec(matches.find(x => x.toLowerCase().startsWith('north')));
        let eastElements = /east[^\d]*(\d{2})[^,]*,[^,]*?(\d{6})/igm.exec(matches.find(x => x.toLowerCase().startsWith('east')));
        
        let north=northElements[1]+'.'+northElements[2];
        let east=eastElements[1]+'.'+eastElements[2];
    
        let regexText = new RegExp(`${keyword}(.+)${keyword}`);
        let text = data.match(regexText)[1];
    
        let result = [];
        result.push(`<p>${north} N</p>`)
        result.push(`<p>${east} E</p>`)
        result.push(`<p>Message: ${text}</p>`)
    
        return result.join('');
    }
}

findCoordinates('<>','o u%&lu43t&^ftgv><nortH4276hrv756dcc,  jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b')