function solve(arr) {
    const soretedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(soretedArr.join('\n'));
}