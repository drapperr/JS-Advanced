function solve(arr) {
    let number = +arr[0];

    for (let i = 1; i < arr.length; i++) {
        const operation = arr[i];

        switch (operation) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number, 2);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number*=3;
                break;
            case 'fillet':
                number*=0.8;
                break;
            default:
                break;
        }
        console.log(number);
    }
}