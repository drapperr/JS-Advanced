function solve(arr = []) {
    const result = arr.reduce((acc, el) => {
        if (acc[0] === undefined || el >= acc[acc.length - 1]) {
            acc.push(el);
        }
        return acc;
    }, []);

    console.log(result.join('\n'));
}