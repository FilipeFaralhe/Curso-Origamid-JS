// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('[href^="#"]');

function callbackLinks(e){
  e.preventDefault();
  
  linksInternos.forEach((links) => {
    links.classList.remove('ativo');
  });

  // for(let links = 0; links < linksInternos.length; links++){
  //   linksInternos[links].classList.remove('ativo');
  // }
  
  e.currentTarget.classList.add('ativo');
}



linksInternos.forEach((item) => {
  item.addEventListener('click', callbackLinks);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *');
console.log(todosElementos);

function callbackElementos(e) {
  console.log(e.currentTarget);
}

todosElementos.forEach((item) => {
  item.addEventListener('click', callbackElementos);
});


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// function callbackBody(e) {
//   e.currentTarget.remove();
// }

// todosElementos.forEach((item) => {
//   item.addEventListener('click', callbackBody);
// });



// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function fontUp(e) {
  if(e.key === "t"){
    document.documentElement.classList.toggle('fontUp'); // documentElement é todo html
  }
}

window.addEventListener('keydown', fontUp);
