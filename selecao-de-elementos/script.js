// Seleção por ID
// Seleciona elemento po ID
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');
console.log(animaisSection);
console.log(contatoSection);

// Retorna null caso não exista o ID
const naoExiste = document.getElementById('teste');
console.log(naoExiste);

// Seleção por Classe e Tag
/* 
  getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. 
  A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.
*/

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');
console.log(gridSection);
console.log(contato);

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');
console.log(ul);

// Retorna o Primeiro elemento
console.log("Classes e Tag", gridSection[0]);


// Seletor Geral Único
/*
  querySelector retorna o primeiro elemento que 
  combinar com o seu seletor CSS(bastante utilizado)
*/
const animais = document.querySelector('.animais'); // classes
const contato1 = document.querySelector('#contato'); // id
const ultimoItem = document.querySelector('.animais-lista li:last-child'); // ultimo li da classe animais-lista
const linkCSS = document.querySelector('[href^="https://"]'); // seleciona o href que começa com https://
const linkInterno = document.querySelector('[href^="#faq"]');
const primeiroUl = document.querySelector('ul'); // seleciona a tag ul
console.log(animais);
console.log(contato1);
console.log(ultimoItem);
console.log(linkCSS);
console.log(linkInterno);
console.log(primeiroUl);

// Buscando dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');
console.log(navItem);

// Seletor Geral Lista
/*
  querySelectorAll retorna todos os elementos compatíveis 
  com o seletor CSS em uma NodeList
  obs: caso ocorra uma atualização de algum elemento, o querySelectorAll não retorna o elemento atuazalido, 
  diferente do getElementsByClassName e getElementsByTagName
*/

const gridSection1 = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');
console.log(gridSection1);
console.log(listas);
console.log(titulos);
console.log(fotosAnimais);

// Retorna o primeiro elemento
console.log(listas[0]);

// HTMLCollection vs NodeList
/*
  A diferença está nos métodos e propriedades de ambas. 
  Além disso a NodeList retornada com querySelectorAll é estática.
*/

const primeiraUl = document.querySelector('ul');

const gridHTMLColletion = document.getElementsByClassName('grid-section');
const gridNodeList = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

console.log(primeiraUl);
console.log(gridHTMLColletion); // retornar uma HTMLCollection com 4 elementos
console.log(gridNodeList); // retornar uma NodeList com 3 elementos

//ARRAY-LIKE
/*
  HTMLCollection e NodeList são array-like, parecem uma array mas não são. 
  O método de Array forEach() por exemplo, existe apenas em NodeList.
*/

gridNodeList.forEach(function(item, index, array){
  console.log(item);
  //console.log(index);
  //console.log(array);
});

// É possível transformar array-like em uma Array real, utilizando o método Array.from(nome do array-like);
const arrayHTML = Array.from(gridHTMLColletion) // transformando em array
console.log(arrayHTML);


