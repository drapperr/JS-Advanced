function solve(matrix) {
    let isMagic = true;
    let firstSum = matrix[0].reduce((acc, el) => acc + el, 0)

    for (let i = 0; i < matrix.length; i++) {
        let sum = matrix[i].reduce((acc, el) => acc + el, 0);
        if (sum != firstSum) {
            isMagic = false;
            break;
        }
    }

    for (let i = 0; i < matrix[0].length; i++) {
        let sum = 0;

        for (let j = 0; j < matrix.length; j++) {
            sum += matrix[j][i];
        }

        if (sum != firstSum) {
            isMagic = false;
            break;
        }
    }

    console.log(isMagic)
}