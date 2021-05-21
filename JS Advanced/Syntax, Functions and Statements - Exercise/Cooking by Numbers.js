function cookingByNumbers(number, caseOne, caseTwo, caseThree, caseFour, caseFive) {

    console.log(operation(caseOne));
    console.log(operation(caseTwo));
    console.log(operation(caseThree));
    console.log(operation(caseFour));
    console.log(operation(caseFive));

    function operation(input) {
        switch (input) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number *= 0.80;
                break;
            default:
                break;
        }
        return number;
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');