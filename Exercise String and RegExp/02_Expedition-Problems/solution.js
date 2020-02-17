function solve() {
    let string = document.querySelector('#string').value;
    let text = document.querySelector('#text').value;
    let output = document.querySelector('#result');

    output.innerHTML = findCoordinates(string, text);

    function findCoordinates(messageSign, text) {
        let pattern = /(north|east)[\s\S]*?([0-9]{2})[^,]*?,[^,]*?([0-9]{6})/gim;
        let mesagePattern = new RegExp(`${messageSign}([\\s\\S]*)${messageSign}`, 'gim');
    
        let north = '';
        let east = '';
        
        let currnetMatch = pattern.exec(text);
        while (currnetMatch) {
            if (currnetMatch[1].toLowerCase() === 'north') {
                north = `${currnetMatch[2]}.${currnetMatch[3]} N`;
            } else {
                east = `${currnetMatch[2]}.${currnetMatch[3]} E`;
            }
    
            currnetMatch = pattern.exec(text);
        }
    
        let messageContent = 'Message: ' + mesagePattern.exec(text)[1];
    
        let result = [];
            result.push(`<p>${north}</p>`);
            result.push(`<p>${east}</p>`);
            result.push(`<p>${messageContent}</p>`);
        
            return result.join('');
    }
}

