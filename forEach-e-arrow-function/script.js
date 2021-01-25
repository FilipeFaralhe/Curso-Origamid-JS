// FOREACH
/*
  Constantemente vamos selecionar uma lista de itens do dom. 
  A melhor forma para interagirmos com os mesmos é utilizando o método forEach, 
  pois ele anda em todos os elementos.
*/
const imgs = document.querySelectorAll('img');
console.log(imgs);

imgs.forEach(function(item, index, array){
  console.log(item); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // o Array completo
});


// FOREACH E ARRAY
/*
  forEach é um método de Array, alguns objetos array-like possuem este método. 
  Caso não possua, o ideal é transformá-los em uma array.
*/
const titulos = document.getElementsByClassName('titulo');
console.log(titulos);

const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item, index, array){
  console.log(item)
});

// Arrow Function
/*
  Sintaxe curta em relação a function expression. Basta remover a palavra chave function e 
  adicionar a fat arrow => após os argumentos.
*/

const animais = document.querySelectorAll('.animais-descricao h2');
console.log(animais);

animais.forEach((item, index, array) => {
  console.log(item.innerText);
});

// argumento único não precisa de parênteses
animais.forEach(item => {
  console.log(item.innerText);
});

// multiplos argumentos precisam de parênteses
animais.forEach((item, index, array) => {
  console.log(item.innerText);
});

// sem argumentos precisa dos parênteses, mesmo vazio
animais.forEach(() => {
  console.log("arrow sem argumentos");
});

// return em arrow function
// É possível omitir as chaves {} para uma função que retorna uma linha.
// Não é permitido fechar a linha com;
animais.forEach((item, index, array) => console.log(item.innerText));