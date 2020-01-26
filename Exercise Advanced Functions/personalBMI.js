function calculateBMI(name, age, weight, height) {
    const peronInfo = {
        name,
        personalInfo: {
            age,
            weight,
            height
        },
        BMI: Math.round(weight / Math.pow(height / 100, 2))
    };

    if (peronInfo.BMI < 18.5) {
        peronInfo.status = 'underweight';
    } else if (peronInfo.BMI < 25) {
        peronInfo.status = 'normal';
    } else if (peronInfo.BMI < 30) {
        peronInfo.status = 'overweight';
    } else {
        peronInfo.status = 'obese';
        peronInfo.recommendation = 'admission required';
    }

    return peronInfo;
}

var chart = calculateBMI('Peter', 29, 75, 182);

console.log(chart)

expect(chart.name).to.equal('Peter');
expect(chart.personalInfo.age).to.equal(29);
expect(chart.personalInfo.weight).to.equal(75);
expect(chart.personalInfo.height).to.equal(182);
expect(chart.BMI).to.equal(23);
expect(chart.status).to.equal('normal');
expect(chart.recommendation).to.be.undefined;