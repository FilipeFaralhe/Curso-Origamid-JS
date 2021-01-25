// Retorne o url da página atual utilizando o objeto window
const url = window.location.href;
console.log(url);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const primeiroElementoAtivo = document.querySelector('h1');
console.log(primeiroElementoAtivo);

// Retorne a linguagem do navegador
const linguagemDoNavegador = window.navigator.language;
console.log(linguagemDoNavegador);

// Retorne a largura da janela 
const larguraJanela = window.innerWidth;
console.log(larguraJanela);