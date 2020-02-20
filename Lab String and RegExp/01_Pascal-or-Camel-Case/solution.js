function solve() {
  let text = document.querySelector('#text').value;
  let selectedCase = document.querySelector('#naming-convention').value;
  let output = document.querySelector('#result');

  output.innerHTML = convert(text, selectedCase);

  function convert(input, currentCase) {
    let result = '';
    let words = input.toLowerCase().split(' ').filter(x => x !== '');
    for (let word of words) {
      result += word.replace(word[0], word[0].toUpperCase());
    }
    if (currentCase === 'Camel Case') {
      result = result.replace(result[0], result[0].toLowerCase());
    } else if (currentCase !== 'Pascal Case') {
      result = 'Error!';
    }
    return result;
  }
}