/* const Dom = {
  seletor: 'li',

  element() {
    return document.querySelector(this.seletor);
  },

  ativo() {
    this.element().classList.add('active');
  }
} */

function Dom(seletor) {
  this.element = function() {
    return document.querySelector(seletor);
  }

  this.classe = function(classe) {
    this.element().classList.add(classe);
  }
}

const ul = new Dom('ul');
const li = new Dom('li');
ul.classe('active');
li.classe('anima');
