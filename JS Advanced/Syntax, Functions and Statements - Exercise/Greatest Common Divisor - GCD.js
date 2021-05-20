function greatestDivisor(first, second) {

    let biggestDivisor = 0;

    for (let i = 1; i <= 10; i++) {
        if(first % i == 0 &&  second % i == 0 && i > biggestDivisor) {
            biggestDivisor = i;
        }   
    }

    console.log(biggestDivisor);
}

greatestDivisor(2154, 458);