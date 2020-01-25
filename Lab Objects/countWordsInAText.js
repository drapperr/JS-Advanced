function getWordsCount(arr){
    const counts={};

    let text=arr.join(' ');
    let regex=/\w+/g;
    let results=text.matchAll(regex);
    
    const words=Array.from(results);

    for (let i = 0; i < words.length; i++) {
        let word=words[i];
        if (Object.keys(counts).some(x=>x==word)) {
            counts[word]++;
        } else{
            counts[word]=1;
        }
    }

    console.log(JSON.stringify(counts));
}

getWordsCount(["Far too slow, you're far too slow."])