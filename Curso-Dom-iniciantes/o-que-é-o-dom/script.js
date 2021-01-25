/* DOM É uma interface que representa documentos HTML e XML através de objetos. 
   Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos. 
*/
console.log(window);

// window é o objeto global do browser
// possui diferentes métodos e propriedades

//Alguns metodos
let endereço = window.location.href;
console.log(endereço);

if(endereço === "http://127.0.0.1:5500/o-que-%C3%A9-o-dom/") {
  console.log("Você está na página certa")
}

console.log(window.innerHeight); //retorna a altura do browser

//WINDOW E DOCUMENT
/*
  São os objetos principais do DOM, boa parte da manipulação 
  é feita através dos seus métodos e propriedades.
*/
/*
  window é o objeto global, 
  por isso não precisamos chamar ele na frente dos seus métodos e propriedades.
*/
window.alert("Falaaa Galera");
alert("Falaaaaa meu povo");

const h1Selecionado = document.querySelector('h1');//retorna a tag selecionada
console.log(h1Selecionado);
const bodyHtml = document.body //retorna o body do meu html;
console.log(bodyHtml);

// Node
/*
  Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. 
  Element é um tipo de objeto Node.
*/

const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo



