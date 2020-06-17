function solve(userNames){
    let userName = userNames[0];
    let correctPassword = userName.split('').reverse().join('');
    let counter = 0;

    for (let i = 1; i < userNames.length; i++) {
        let password = userNames[i];

        if (password==correctPassword) {
            console.log(`User ${userName} logged in.`);
            break;
        } else{
            counter++;

            if (counter==4) {
                console.log(`User ${userName} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
        }
    }
}