//HEIGHT E WIDTH
/*
  Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only
*/

const listaAnimais = document.querySelector('.animais-lista');

console.log(listaAnimais.clientHeight); // height + padding
console.log(listaAnimais.offsetHeight); // heigth + padding + border
console.log(listaAnimais.scrollHeight); // heigth total, mesmo dentro do scroll
/*
  Mesma coisa para o Width, clientWidth ...
*/

// OFFSETTOP E OFFSETLEFT

/*
  Distância entre o topo do elemento e o topo da página
*/

console.log(listaAnimais.offsetTop);

/*
Distância entre o canto esquerdo do elemento
e o canto esquerdo da página
*/

console.log(listaAnimais.offsetLeft);


// GETBOUNDINGCLIENTRECT()
/*
  Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.
  e como se tivesse criando um corpo em volta do elemento selecionado
*/
const h2raposa = document.querySelector('h2');
const h2 = h2raposa.getBoundingClientRect();

console.log(h2.top);

const rect = listaAnimais.getBoundingClientRect();
console.log(rect.width);
console.log(rect.height);
console.log(rect.left);
console.log(rect.top);

// WINDOW
console.log(
  window.innerWidth, // width da janela
  window.outerWidth, // soma dev tools também
  window.innerHeight, // height da janela
  window.outerHeight, // soma da barra de endereço
  window.pageYOffset, // distância total do scroll horizontal, referente a posição atual
  window.pageXOffset // distância total do scroll vertical, referente a posição atual
);

if(h2.top < 0) {
  console.log("passou do elemento");
} 

if (window.innerWidth < 600) {
  console.log('tela menor que 600px');
}

//matchMedia();
/*
  Utilize um media-querie como no css para verificar a largura do browser
*/

const small = window.matchMedia('(max-width: 600px)');

if(small.matches) { //matches retorna um boolean
  console.log('Tela menor que 600px');
} else {
  console.log('Tela maior que 600px');
}

/*
Dica

    Selecione o elemento no inspetor (dom)

    Abra o console e digite $0 para selecionar o mesmo

    Os elementos selecionados anteriormente são $1, $2 ...
*/