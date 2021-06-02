function solve() {

  let text = document.getElementById('text').value;
  let textConvention = document.getElementById('naming-convention').value;

  let output = '';

  if(textConvention === 'Camel Case') {

    let convertedText = text.toLowerCase().split(' ');

    for (let i = 1; i < convertedText.length; i++) {

      convertedText[i] = convertedText[i].substr(0, 1).toUpperCase() + convertedText[i].substr(1);

    }

    output = convertedText.join('');

  } else if (textConvention === 'Pascal Case') {
    
    let convertedText = text.toLowerCase().split(' ');

    for (let i = 0; i < convertedText.length; i++) {

      convertedText[i] = convertedText[i].substr(0, 1).toUpperCase() + convertedText[i].substr(1);

    }
    output = convertedText.join('');

  } else {

    output = 'Error!';
  }

  document.getElementById('result').textContent = output;
  //TODO...
}