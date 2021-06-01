function extract(content) {
    let arr = document.getElementById(content).textContent;
    let regex = /\([A-Za-z ]+\)/g;
    let result = arr.match(regex);
    return result.join('; ');
}