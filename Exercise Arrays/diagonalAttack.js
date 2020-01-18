function solve(input){
    const matrix=[];

    for (let i = 0; i < input.length; i++) {
        const line = input[i].split(' ');

        matrix.push(line);
    }

    let firstSum=0;
    let secondSum=0;

    for (let i = 0; i < matrix.length; i++) {
        let line=matrix[i];

        firstSum+= +line[i];
        secondSum+= +line[line.length-1-i];
    }
    
    if (firstSum===secondSum) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (i!==j&&i!==matrix[i].length-1-j) {
                    matrix[i][j]=firstSum;
                }
            }
        }
    }
    
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '))
    }
}