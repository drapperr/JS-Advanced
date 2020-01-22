function solve(input) {
    const components = input.reduce((acc, data) => {
        let [systemName, componentName, subcomponentName] = data.split('|').map(x => x.trim());
        if (!acc[systemName]) {
            acc[systemName] = {};
        }
        if (!acc[systemName][componentName]) {
            acc[systemName][componentName] = [];
        }
        acc[systemName][componentName].push(subcomponentName);

        return acc;
    }, {});

    const sortedNames = Object.keys(components)
        .sort((a, b) => (Object.keys(components[b]).length - Object.keys(components[a]).length) || a.localeCompare(b));

    sortedNames.forEach(sysName => {
        console.log(sysName);

        Object.keys(components[sysName]).sort((a, b) =>
            components[sysName][b].length - components[sysName][a].length)
            .map(x=>{
                console.log(`|||${x}`);
                components[sysName][x].forEach(element => {
                    console.log(`||||||${element}`);
                });
            })
    });


}

solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']
)