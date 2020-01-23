function sortUsernames(arr) {
    const usernames=arr
    .sort((a, b) => (a.length - b.length) || a.localeCompare(b))
    .reduce((acc,name)=>{
        acc[name]=0;
        return acc;
    },{});
    for (const username in usernames) {
        console.log(username);
    }
}

sortUsernames(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']
)