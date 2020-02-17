function solve() {
    let input = document.querySelector('#array').value;
    let output = document.querySelector('#result');

    output.innerHTML = decode(JSON.parse(input));

    function decode(arr) {
        let key = arr[0];
        let regex = new RegExp(`(\\s|^)(${key}\\s+)([A-Z!#$%]{8,})(\\.|,|\\s|$)`, 'gi');

        let result=[];
    
        for (let i = 1; i < arr.length; i++) {
            let msg = arr[i];
            let match = regex.exec(msg);

            while (match) {
                let encodeMessage = match[3];
                if (encodeMessage.toUpperCase() !== encodeMessage) {
                    match = regex.exec(msg);
                    continue;
                }
                let decodeMessage = encodeMessage.toLowerCase()
                .replace(/!/g, 1)
                .replace(/%/g, 2)
                .replace(/#/g, 3)
                .replace(/\$/g, 4);
                let message = match[1] + match[2] + decodeMessage + match[4];
                msg = msg.replace(match[0], message);
                match = regex.exec(msg);
            }
            result.push(msg);
        }
        return result.map(x=>`<p>${x}</p>`).join('');
    }
}