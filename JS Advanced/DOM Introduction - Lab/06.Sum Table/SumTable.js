function sumTable() {
    let arr = Array.from(document.querySelectorAll('td:nth-child(2)'));
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        sum += Number(arr[i].textContent);
    }

    document.getElementById('sum').textContent = sum;
}