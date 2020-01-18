function solve(arr) {
    let matrixRows = arr[0];
    let matrixCols = arr[1];
    let pointRow = arr[2];
    let pointCol = arr[3];

    const matrix = [];

    for (let i = 0; i < matrixRows; i++) {
        let line = [];
        for (let j = 0; j < matrixCols; j++) {
            line.push(-1);
        }
        matrix.push(line);
    }
    matrix[pointRow][pointCol] = 1;
    let num = 1;

    while (matrix.flat().some(x => x === -1)) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (matrix[row][col] === num) {
                    for (let i = -1; i <= 1; i++) {
                        for (let j = -1; j <= 1; j++) {
                            if ((row + i) >= 0 && (col + j) >= 0 && matrix[row + i][col + j] === -1) {
                                matrix[row + i][col + j] = num + 1;
                            }
                        }
                    }
                }
            }
        }
        num++;
    }

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}