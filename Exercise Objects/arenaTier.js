function solve(input) {
    const gladiators = input.splice(0, input.length - 1)
        .reduce((acc, element) => {
            if (element.includes('->')) {
                let [gladiator, technique, skill] = element.split(' -> ');

                if (!acc[gladiator]) {
                    acc[gladiator] = {};
                    acc[gladiator].total = 0;
                }

                if (!acc[gladiator][technique]) {
                    acc[gladiator][technique] = +skill;
                    acc[gladiator].total += +skill;
                } else if (acc[gladiator][technique] < +skill) {
                    acc[gladiator].total += +skill - acc[gladiator][technique];
                    acc[gladiator][technique] = +skill;
                }

            } else {//attack
                let [gladiator1, gladiator2] = element.split(' vs ');
                if (acc[gladiator1] && acc[gladiator2] && acc[gladiator1].total && acc[gladiator2].total) {
                    for (const key of Object.keys(acc[gladiator1])) {
                        if (Object.keys(acc[gladiator2]).includes(key) && key !== 'total') {
                            if (acc[gladiator1][key] > acc[gladiator2][key]) {
                                delete acc[gladiator2][key];
                            } else {
                                delete acc[gladiator1][key];
                            }
                        }
                    }
                    if (Object.keys(acc[gladiator1]).length==1) {
                        delete acc[gladiator1];
                    }
                    if (Object.keys(acc[gladiator2]).length==1) {
                        delete acc[gladiator2];
                    }
                }
            }
            return acc;
        }, {});

    Object.keys(gladiators)
        .sort((a, b) => (gladiators[b].total - gladiators[a].total) || a.localeCompare(b))
        .forEach(x => {
            console.log(`${x}: ${gladiators[x].total} skill`);
            Object.keys(gladiators[x]).sort((a, b) => (gladiators[x][b] - gladiators[x][a]) || a.localeCompare(b))
                .forEach(y => {
                    if (y !== 'total') console.log(`- ${y} <!> ${gladiators[x][y]}`);
                })
        });
}

solve([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'
])