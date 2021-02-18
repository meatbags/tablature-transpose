/** App entry point */

class App {
  constructor() {
    this.el = {};
    this.el.tab = document.querySelector('#tab');
    this.el.inputTranspose = document.querySelector('input[name="transpose"]');

    // bind
    this.transpose = 0;
    this.el.inputTranspose.addEventListener('change', () => {
      this.transpose = parseInt(this.el.inputTranspose.value);
    });

    // get example tab
    fetch('../example/synapse.txt')
      .then(res => res.text())
      .then(text => {
        this.parse(text);
      });
  }

  parse(text) {
    this.tab = [];
    
    this.rows = text.split('\n');
    this.rows.forEach((row, index) => {
      let i = 0;
      while (i < row.length) {
        // check if number
        if (isNaN(row[i])) {
          i += 1;
          continue;
        }
        // check is in tab
        let isTab = (i > 0 && row[i-1] )
      }
    });

    this.tab = text.split('\n').map(row => {
      return row.split('').map(char => {

      });
    });

    // 1. split rows
    // 2. find numbers (up to 2-digits)
    // 3. get index, check up/down to assign string,
    // get props i.e. semis till next string
    // 4. reform text

    this.render();
  }

  render() {
    let text =
  }
}

window.addEventListener('load', () => {
  let app = new App();
});
