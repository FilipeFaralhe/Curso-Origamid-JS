// ADDEVENTLISTENER
/* 
  Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento.
*/

const img = document.querySelector('img');

// elemento.addEventListener(event, callback, options);
/* O terceiro parâmetro é opcional. */
img.addEventListener('click', function(){
  console.log('Clicou');
});


// CALLBACK

/*  
  É boa prática separar a função de callback do addEventListener, ou seja, 
  declarar uma função ao invés de passar diretamente uma função anônima 
*/

function callback() {
  console.log("clicou função fora!");
}

img.addEventListener('click', callback); // rodou normal

img.addEventListener('click', callback()); // undefined

img.addEventListener('click', function() {
  console.log('Clicou normal');
}); 

img.addEventListener('click', () => {
  console.log('Clicou Arrow Function');
});


//EVENT
/*
  O primeiro parâmetro do callback é referente ao evento que ocorreu.
*/
/*
  Geralmente utilizam 'e' como nome do parâmetro
*/
function callbackEvent(event) {
  console.log(event);
}

img.addEventListener('click', callbackEvent);


// PROPRIEDADES DO EVENT
const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this, referente ao elemento passado no antes do addEventListener
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo do evento
  const path = event.path; // retorna um array com o caminho do elemento que clicou até o ultimo objeto que é o Window

  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallback);


// EVENT.PREVENTDEFAULT()
/*
  Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, 
  irá previnir que o link seja ativado.
*/

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  event.preventDefault();
  console.log('previniu que o link mude de página');
}

linkExterno.addEventListener('click', handleLinkExterno);

// THIS 
/*
  A palavra chave this é uma palavra especial de JavaScript, 
  que pode fazer referência a diferentes objetos dependendo do contexto. 
  No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.
*/

function callbackThis(e) {
  console.log(this); // retorna a imagem
  console.log(this.getAttribute('src'));
}

img.addEventListener('click', callbackThis);
/*
  Geralmente igual ao event.currentTarget
*/

// Diferentes Eventos
/*
  Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais. 
  Eventos podem ser adicionados a diferentes elementos, como o window e document também.
*/

const h1 = document.querySelector('h1');


// function callbackH1(e) {
//   console.log(e.type, e);
// }

// h1.addEventListener('click', callbackH1); // evento quando clica no elemento
// h1.addEventListener('mouseenter', callbackH1); // evento ocorre quando passo o mouse por cima do elemento
// window.addEventListener('scroll', callbackH1); // evento ocorre quando acontece o scroll no elemento selecionado
// window.addEventListener('resize', callbackH1); // evento ocorre quando redimensiona o elemento
// window.addEventListener('keydown', callbackH1); // event para quando aperta a tecla
// /* 
//   lista de eventos
  https://developer.mozilla.org/en-US/docs/Web/Events
//*/

// KEYBOARD

/*
  Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard.
*/

function handleKeyboard(e) {
  if(e.key === 'a') {
    document.body.classList.toggle('Azul');
  } else if (e.key === 'v'){
    document.body.classList.toggle('Vermelho');
  }
}

window.addEventListener('keydown', handleKeyboard);

// FOREACH E EVENTOS
/*
  O método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles.
*/
const imgs = document.querySelectorAll('img');


function imgSrc(e) {
  const src = e.currentTarget.getAttribute('src');
  console.log(src);
}


imgs.forEach((item) => {
  item.addEventListener('click', imgSrc)
});