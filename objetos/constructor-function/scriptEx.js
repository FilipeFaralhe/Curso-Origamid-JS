// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  this.andar = function() {
    console.log(this.name + ' andou');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const pessoa1 = new Pessoa('João', 20);
const pessoa2 = new Pessoa('Maria', 25);
const pessoa3 = new Pessoa('Bruno', 15);
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom(seletor) {
  this.elements = document.querySelectorAll(seletor);

  this.addClass = function(classe) {
    return this.elements.forEach((element) => {
      element.classList.add(classe);
    });
  }

  this.removeClass = function(classe) {
    return this.elements.forEach((element) => {
      element.classList.remove(classe)
    });
  }

}

const element = new Dom('li');
element.addClass("pokas")
element.removeClass("pokas")