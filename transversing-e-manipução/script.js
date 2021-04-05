// OUTHERHTML, INNERHTML E INNERTEXT
/*
  Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um 
  novo valor para as mesmas element.innerText = 'Novo Texto'.
*/

const menu = document.querySelector('.menu');

console.log(menu.outerHTML); //retorna em string todos os elementos do menu
console.log(menu.innerHTML); // retorna em string o html interno
console.log(menu.innerText); // retorna em string o texto do elemento

menu.innerText = '<p> texto aqui </p>'//adiciona '<p> texto aqui </p>' como texto no menu
menu.innerHTML = '<p> texto html aqui </p>'//adiciona a tag + texto

console.log(menu);

//TRANSVERSING
/*
  Como navegar pelo DOM, utilizando suas propriedades e métodos.
*/

const lista = document.querySelector('.animais-lista');

console.log(lista.parentElement); //retorna o elemento pai
console.log(lista.parentElement.parentElement); // retorna o elemento pai do pai
console.log(lista.previousElementSibling); //retorna o elemento acima 
console.log(lista.nextElementSibling); //retorna o elemento abaixo

console.log(lista.children); //retorna uma HTMLCollection com todos os elementos filhos
console.log(lista.children[0]); //retorna o primeiro filho
console.log(lista.children[--lista.children.length]); //retorna o último elemento filho

console.log(lista.querySelectorAll('li'));//pega todas as li's
console.log(lista.querySelector('li:last-child'));//pega a última li

//ELEMENT VS NODE
/*
  Element's represetam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento 
  (Element), texto, comentário, quebra de linha e mais.
*/

console.log(lista.nextElementSibling) //retorna a proxima tag html
console.log(lista.nextSibling); //retorna  o próximo node, ou sendo pode ser retornar até uma quebra de linha

console.log(lista.children); // retorna uma HTMLCollection com todas as tag filhas
console.log(lista.childNodes); // retorna um nodeLista com todos os nos como quebra de linhas comentários e etc

/*
  Geralmente estamos atrás de um elemento e não de qualquer node em si.
*/

//MANIPULANDO ELEMENTOS
/*
 É possível mover elementos no dom com métodos de Node.
*/

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const faq = document.querySelector('.faq');
const tituloContato = contato.querySelector('.titulo');
const tituloFaq = faq.querySelector('.titulo');
const tituloPrincipal = animais.querySelector('.titulo');
const mapa = contato.querySelector('.mapa');

animais.appendChild(tituloContato);//move para o último elemento filho da classe animais

/* o segundo parametro precisa ser filho do elemento onde foi inserido o insertBefore*/
faq.insertBefore(tituloPrincipal, tituloFaq); //Elemento para onde irá mover.(o que irá mover, antes de que elemento irá mover)

faq.removeChild(tituloFaq); //remove o titulo do elemento com a class faq
contato.replaceChild(lista, mapa);//substitui o mapa pela lista

//NOVOS ELEMENTOS
/* Podemos criar novos elementos com o método createElement() */

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

animais.appendChild(novoH1);

// CLONAR ELEMENTOS
/* 
  Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, 
  é necessário utilizar o método cloneNode() 
*/

const titulo = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo;
// titulo, titulo2 e novoTitulo são iguais

const cloneTitulo = titulo.cloneNode(true);
const contato1 = document.querySelector('.contato');
contato1.appendChild(cloneTitulo);

/* true sinaliza para incluir os filhos */
















