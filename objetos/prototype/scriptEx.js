// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade; 
}

Pessoas.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
}

const pessoa1 = new Pessoas('Filipe', 'Faralhe', 21);
console.log(pessoa1.nomeCompleto());

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; //Boolean
li.offsetLeft; // Number;
li.click(); // undefined, portanto não há construtores

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String, pois o valor retornado disso é uma string ex "Boolean"
