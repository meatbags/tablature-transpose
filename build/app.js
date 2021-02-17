/** App entry point */

class App {
  constructor() {
    fetch('../example/synapse.txt')
      .then(res => res.text())
      .then(text => {
        this.parse(text);
      });
  }

  parse(text) {
    let rows = text.split('\n');

    // 1. split rows
    // 2. find numbers (up to 2-digits)
    // 3. get index, check up/down to assign string,
    // get props i.e. semis till next string
    // 4. reform text

    document.querySelector('#tab').innerText = chars.join('');
  }
}

window.addEventListener('load', () => {
  let app = new App();
});
