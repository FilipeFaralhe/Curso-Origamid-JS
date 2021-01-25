// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img');
console.log(primeiraImg.offsetTop);

// Retorne a soma da largura de todas as imagens
function SomaDasImgs() {
  const imgs = document.querySelectorAll('img');
  let recebe = 0;
  
  imgs.forEach((item, index) => {
    recebe += item.offsetWidth;
  });

  console.log(recebe);
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
function verificaLinks() {
  const links = document.querySelectorAll('a');
  console.log(links);
  links.forEach((item) => {
    if(item.offsetHeight >= 48 && item.offsetWidth >= 48) {
      console.log("dentro do recomendado");
    } else {
      console.log("fora do recomendado");
    }
  });
}

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
function verificaMenu() {
  const menuMax = window.matchMedia('(max-width: 720px)');

  if(menuMax.matches) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
  } else {
    
  }
}

//espera toda a página carregar, para ai sim executar o javascript
window.onload = function() {
  SomaDasImgs();
  verificaLinks();
  verificaMenu();
}