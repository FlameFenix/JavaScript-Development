function oddPositions(input) {
    let index = 0;
    console.log(input.filter(x => index++ % 2 != 0).map(x => x * 2).reverse());
}

oddPositions([3, 0, 10, 4, 7, 3]);