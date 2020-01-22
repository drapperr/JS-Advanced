function sortNumbers(input) {
    let uniquArr = input.reduce((acc, str) => {
        const arr = str
            .slice(1, -1)
            .split(', ')
            .map(x => Number(x))
            .sort((a, b) => b - a);

        let name = `[${arr.join(', ')}]`;

        acc[name] = arr.length;

        return acc;
    }, {});

    Object.keys(uniquArr)
        .sort((a, b) => (uniquArr[a] - uniquArr[b]))
        .forEach(x => console.log(x));
}

sortNumbers(["[]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]
)