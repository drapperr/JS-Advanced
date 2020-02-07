function encodeAndDecodeMessages() {
    const buttons = document.querySelectorAll('button');
    const encodeButton = buttons[0];
    const decodeButton = buttons[1];

    const textAreas = document.querySelectorAll('textarea');
    const firstArea = textAreas[0];
    const secondArea = textAreas[1];

    encodeButton.addEventListener('click', () => {
        secondArea.value = firstArea.value.split('')
            .map(x => String.fromCharCode(x.charCodeAt(0) + 1))
            .reduce((a, b) => a + b);
        firstArea.value = '';
    });

    decodeButton.addEventListener('click', () => {
        secondArea.value = secondArea.value.split('')
            .map(x => String.fromCharCode(x.charCodeAt(0) - 1))
            .reduce((a, b) => a + b);
        firstArea.value = '';
    })
}