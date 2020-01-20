function solve(matrix){
    let count=0;

    for (let i = 0; i < matrix.length; i++) {
        const line=matrix[i];
        for (let j = 0; j < line.length-1; j++) {
            if (line[j]===line[j+1]) {
                count++;
            }
        }
    }

    for (let i = 0; i < matrix.length-1; i++) {
        const firstLine=matrix[i];
        const secontLine=matrix[i+1];

        for (let j = 0; j < firstLine.length; j++) {
            if (firstLine[j]===secontLine[j]) {
                count++;
            }
        }
    }

    console.log(count);
}