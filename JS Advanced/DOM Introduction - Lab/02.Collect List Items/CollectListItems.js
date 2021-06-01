function extractText() {
    let arr = Array.from(document.querySelectorAll('#items li'));
    for (const item of arr) {
        document.getElementById('result').textContent += item.textContent + '\n';
    }
    // TODO
}