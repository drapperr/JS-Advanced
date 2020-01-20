function solve(input) {
    const dashboard =
        [
            [false, false, false],
            [false, false, false],
            [false, false, false]
        ];
    let winner = '';
    let cuurentPlayer = 'X';
    let endGame=false;

    for (let i = 0; i < input.length; i++) {
        let coordinates = input[i].split(' ');
        let row = coordinates[0];
        let col = coordinates[1];

        if (dashboard[row][col] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        dashboard[row][col] = cuurentPlayer;

        if ((dashboard[0][0] === cuurentPlayer && dashboard[1][1] === cuurentPlayer && dashboard[2][2] === cuurentPlayer) ||
            (dashboard[0][2] === cuurentPlayer && dashboard[1][1] ===cuurentPlayer && dashboard[2][0] === cuurentPlayer)) {
            winner = cuurentPlayer;
            break;
        }

        if ((dashboard[0][0] === cuurentPlayer && dashboard[1][0] === cuurentPlayer && dashboard[2][0] === cuurentPlayer) ||
            (dashboard[0][1] === cuurentPlayer && dashboard[1][1] ===cuurentPlayer && dashboard[2][1] === cuurentPlayer)||
            (dashboard[0][2] === cuurentPlayer && dashboard[1][2] ===cuurentPlayer && dashboard[2][2] === cuurentPlayer)) {
                winner = cuurentPlayer;
                break;
        }

        

        if ((dashboard[0][0] === cuurentPlayer && dashboard[0][1] === cuurentPlayer && dashboard[0][2] === cuurentPlayer) ||
            (dashboard[1][0] === cuurentPlayer && dashboard[1][1] ===cuurentPlayer && dashboard[1][2] === cuurentPlayer)||
            (dashboard[2][0] === cuurentPlayer && dashboard[2][1] ===cuurentPlayer && dashboard[2][2] === cuurentPlayer)) {
                winner = cuurentPlayer;
                break;
        }
        
        let counter=0;
        for (let i = 0; i < dashboard.length; i++) {
            
            if (dashboard[i].every(x => x !== false)) {
               counter++;
            }
            if (counter===3) {
                console.log('The game ended! Nobody wins :(');
                endGame=true;
                break;
            }
        }
        if (winner!==''||endGame) {
            break;
        }

        if (cuurentPlayer === 'X') {
            cuurentPlayer = 'O'
        } else {
            cuurentPlayer = 'X';
        }
    }

    if (winner!=='') {
        console.log(`Player ${winner} wins!`)
    } 
   
    for (let i = 0; i < dashboard.length; i++) {
        console.log(dashboard[i].join('	'))
    }

}