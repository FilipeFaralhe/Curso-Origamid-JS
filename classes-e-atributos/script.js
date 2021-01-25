// CLASSLIST
/*
  Retorna uma lista com as classes do elemento. Permite adicionar, 
  remover e verificar se contém.
*/

const menu = document.querySelector('.menu');
console.log(menu.className); // string
console.log(menu.classList); // lista de classes
menu.classList.add('ativo'); // adiciona uma classe
menu.classList.add('ativo', 'mobile'); // adiciona duas ou mais classes separando por vírgula
menu.classList.remove('ativo'); // remove uma classe
console.log(menu.classList.toggle('ativo')); // remove se ela já existir, caso o cantrário ela adiciona
console.log(menu.classList.contains('ativo')); // retorna true ou false se a classe existir ou não
console.log(menu.classList.replace('ativo', 'inativo')); // substituiu uma classe pela outra

if(menu.classList.contains('menu')) {
  menu.classList.add('hello-world');
} else {
  console.log("não existe classe menu");
}

//modo antigo de adicionar uma classe
menu.className += " vermelho";

// ATTRIBUTES
/*
  Retorna uma array-like com os atributos do elemento.
*/
const animais = document.querySelector('.animais');

console.log(animais.attributes); // retorna os atributos do elemento
console.log(animais.attributes['class']); // retornando a classe do elemento
console.log(animais.attributes['0']); // retornando a classe do elemento
console.log(animais.attributes['id']); // retornando o ID do elemento
console.log(animais.attributes[1]); // retornando o ID do elemento

// GETTATTRIBUTE E SETATTRIBUTE
/* 
  Métodos que retornam ou definem de acordo com o atributo selecionado
*/

const img = document.querySelector('.animais-lista img');
console.log(img);

console.log(img.getAttribute('src')); //retorna o valor src
img.setAttribute('alt', 'texto alternativo'); // cria ou altera o valor do atributo desejado 
console.log(img.hasAttribute('id')); // retorna true se o atributo id existir e false caso ele não exista
img.removeAttribute('alt'); // remove o atributo alt

function verificaAlt() {
  let qtdImg = 0;
  let guardaQuantidade = 0;
  const img = document.querySelectorAll('img'); 
  img .forEach((item, index) => {
    
    if(item.hasAttribute('alt') && item.getAttribute('alt') !== ""){
      
    } else {
      console.log(`imagem sem alt:`, item);
      guardaQuantidade = ++qtdImg;
    }    
  });
  console.log(`quantidade de imagens sem alt ${guardaQuantidade}`);
}

verificaAlt();  

//READ ONLY VS WRITABLE
/* 
  Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura. 
*/
/*
   Lembre-se que podemos modificar o valor de uma propriedade objeto.propriedade = '' 
*/
const animais2 = document.querySelector('.animais');

animais.className; // string com o nome da classe
animais.className = 'azul'; //substitui completamente a string
animais.className += ' vermelho'; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, pois a propriedade attributes é somente de leitura e não escrita