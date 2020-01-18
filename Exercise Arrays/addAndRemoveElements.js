function solve(arr) {
    const resultArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            resultArr.push(i + 1);
        } else if (arr[i] == 'remove') {
            resultArr.pop();
        }
    }

    if (resultArr.length === 0) {
        console.log('Empty');
    } else {
        for (let i = 0; i < resultArr.length; i++) {
            console.log(resultArr[i]);
        }
    }
}