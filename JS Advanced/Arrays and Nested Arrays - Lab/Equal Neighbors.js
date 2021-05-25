function equalNeighbors(input) {
    let counter = 0;
    let isValid = false;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {

            if (CheckIndex(i - 1, j, input) && input[i][j] == input[i - 1][j]) {
                counter++;
            }

            if (CheckIndex(i , j + 1, input) && input[i][j] == input[i][j + 1]) {
                counter++;
            }

        }
    }
    
    function CheckIndex(rows, cols, input) {
        return rows >= 0 && rows < input.length && cols >= 0 && cols < input[rows].length;
    }

    return counter;

}

console.log(equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]));