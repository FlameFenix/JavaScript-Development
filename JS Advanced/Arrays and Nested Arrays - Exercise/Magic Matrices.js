function magicMatrix(matrix) {
    let magicSum = 0;
    let isMagic = true;

    for (let rows = 0; rows < matrix.length; rows++) {
        let sumRows = 0;
        let sumCols = 0;
        for (let cols = 0; cols < matrix[rows].length; cols++) {
            sumRows += matrix[rows][cols];
            
            if(cols < matrix.length) {
                sumCols += matrix[cols][rows];
            }
        }
        
        if(magicSum === 0) {
            magicSum = sumRows;
        }

        if(magicSum !== sumRows || magicSum != sumCols) {
            isMagic = false;
            break;
        }
    }

    return isMagic;
}

console.log(magicMatrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
));