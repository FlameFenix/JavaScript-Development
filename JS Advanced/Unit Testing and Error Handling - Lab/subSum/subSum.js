function subSum(arr, startIdx, endIdx) {

    if(!Array.isArray(arr)) {
        return NaN;
    }
    
    let result = 0;

    for (let i = startIdx; i <= endIdx; i++) {
        if (i >= 0 && i < arr.length) {
            result += Number(arr[i]);
        }
    }

    return result;
}

console.log(subSum([10, 'twenty', 30, 40], 0, 2));