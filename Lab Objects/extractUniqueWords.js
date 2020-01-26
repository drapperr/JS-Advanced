function solve(arr){
    const uniWords={};

    let text=arr.join(' ');
    let regex=/\w+/g;
    let results=text.matchAll(regex);
    const words=Array.from(results);

    for (let word of words) {
        word=word.toString().toLowerCase()
        uniWords[word]=0;
    }

    console.log(Object.keys(uniWords).join(', '));
}

solve(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Pellentesque quis hendrerit dui.', 
'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.', 
'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.', 
'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.', 
'Morbi in ipsum varius, pharetra diam vel, mattis arcu.', 
'Integer ac turpis commodo, varius nulla sed, elementum lectus.', 
'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']
)