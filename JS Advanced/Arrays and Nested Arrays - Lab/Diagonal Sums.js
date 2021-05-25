function diagonalSums(input) {
    let firstDiag = 0;
    let secondDiag = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if(i == j) {
                firstDiag += input[i][j];
            }
            
            if(j == input[i].length - 1 - i){
                secondDiag += input[i][j];
            }
        }
    }

    console.log(firstDiag, secondDiag);
}

diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );