function solve() {
  let inputElement = document.getElementById('input');

  let text = Array.from(inputElement.value.split('.'));

  let clearedText = text.filter(x => x);

  while (clearedText.length > 0) {
    let output = clearedText.splice(0, 3).join('.') + '.';
    paragraph = `<p>${output}</p>`;
    document.getElementById('output').innerHTML += paragraph;
  }
  //TODO
}