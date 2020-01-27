function solve(){
    const elements={};

    for (const element of arguments) {
        let typeofElement=typeof(element);

        console.log(`${typeofElement}: ${element}`)

        if (!elements[typeofElement]) {
            elements[typeofElement]=0;
        }
        elements[typeofElement]++;
    }
    Object.keys(elements).sort((a,b)=>elements[b]-elements[a]).forEach(key => {
        console.log(`${key} = ${elements[key]}`);
    });
}



solve({ name: 'bob'}, 3.333, 9.999);


// var expectedOutput = [
//     'object:',
//     'number: 3.333',
//     'number: 9.999',
//     'number = 2',
//     'string = 1'
// ];

// expect(output.length).to.equal(expectedOutput.length, "Incorrect number of arguments parsed.");
// for (var i = 0; i < output.length; i++) {
//     var current = output[i];
//     expect(current).to.contains(expectedOutput[i], "Incorrect number of arguments parsed.");
// }