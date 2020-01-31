function solve() {
    let exOutput = document.getElementById('expressionOutput');
    let resultOutput = document.getElementById('resultOutput');
    let operators = ['+', '-', '*', '/'];

    document.querySelector('.clear')
        .addEventListener('click', () => {
            exOutput.innerHTML = '';
            resultOutput.innerHTML = '';
        });

    document.querySelector('.keys')
        .addEventListener('click', (e) => {
            let value = e.target.value;

            if (!value) {
                return;
            }

            if (value === '=') {
                let parts = exOutput.innerHTML
                    .split(' ')
                    .filter(x => x !== '');
                let result;

                if (parts.length === 2) {
                    result = 'NaN';
                } else {
                    switch (parts[1]) {
                        case '+':
                            result = +parts[0] + +parts[2];
                            break;
                        case '-':
                            result = +parts[0] - +parts[2];
                            break;
                        case '*':
                            result = +parts[0] * +parts[2];
                            break;
                        case '/':
                            result = +parts[0] / +parts[2];
                            break;
                    }
                }
                resultOutput.innerHTML = result;
                return;
            }

            if (operators.includes(value)) {
                exOutput.innerHTML = exOutput.innerHTML + ` ${value} `;
                return;
            }

            exOutput.innerHTML = exOutput.innerHTML + value;
        });
}
