// OBJETOS

/*
  Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. 
  Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior? 
  É possível com o Object.create, mas veremos ele mais tarde.
*/

const carro = {
  marca: 'Marca',
  preco: 0,
}

const honda = carro;
honda.marca = 'Honda';
honda.preco = 3000;

const fiat = carro;
fiat.marca = 'Fiat';
fiat.preco = 4000;

console.log(fiat);
console.log(honda);

/*
  carro, fiat e honda apontam para o mesmo objeto.
*/

// CONSTRUCTOR FUNCTIONS
function Champion() {
  this.nome = 'nome';
  this.ap = 0;
  this.ad = 0;
}

const jinx = new Champion();
jinx.nome = "jinx";
jinx.ap = 20;
jinx.ad = 76;


const lucian = new Champion();
lucian.nome = 'lucian';
lucian.ap = 20;
lucian.ad = 78

console.log(lucian);
console.log(jinx);

/* 
  Usar Pascal Case, ou seja, começar com letra maiúscula. 
*/

// NEW KEYWORD 

/* 
const honda = new Carro()

// 1 Cria uma novo objeto
honda = {};

// 2 Define o protótipo
honda.prototype = Carro.prototype

// 3 Aponta a variável this para o objeto
this = honda;

// 4 Executa a função, substituindo this pelo objeto
honda.marca = 'marca';
honda.preco = 0;

// 5 Retorna o novo objetos
return honda = {
  marca: 'marca',
  preco: 0,
};

*/

// PARÂMETROS E ARGUMENTOS

function Anime(nome, nota, genero) {
  this.nome = nome;
  this.nota = nota;
  this.genero = genero;
} 

const anime1 = new Anime('Naruto', 9.5, 'shounen');
const anime2 = new Anime('Erased', 9.8, 'suspense');

console.log(anime1);
console.log(anime2);

// THIS KEYWORD
function Comida(nome, precoInicial) {
  const taxa = 1.2; // consigo acessar somento dentro da função
  const precoFinal = taxa * precoInicial // consigo acessar somento dentro da função
  this.nome = nome; // consigo acessar fora
  console.log(this);
  this.preco = precoFinal; //consigo acessar fora 
  console.log(this);
}

const queijo = new Comida('Queijo', 10);

/*
  Variáveis dentro da Constructor estão "protegidas".
*/