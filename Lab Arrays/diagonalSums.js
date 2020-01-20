function solve(matrix){
    let firstSum=0;
    let secondSum=0;

    for (let i = 0; i < matrix.length; i++) {
        let line=matrix[i];

        firstSum+=line[i];
        secondSum+=line[line.length-1-i];
    }
    console.log(`${firstSum} ${secondSum}`)
}