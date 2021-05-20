function mathOperations(first, second, sign) {
    let result = 0;
    switch (sign) {

        case '+':
            result = first + second;
            break;
        case '-':
            result = first - second;
            break;
        case '*':
            result = first * second;
            break;
        case '/':
            result = first / second;
            break;
        case '%':
            result = first % second;
            break;
        case '**':
            result = first ** second;
            break;
        default:
            break;
    }

    console.log(result);
}

mathOperations(3, 5.5, '*');