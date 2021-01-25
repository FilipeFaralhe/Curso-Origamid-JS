// Adicione a classe ativo a todos os itens do menu
const menu1 = document.querySelectorAll('.menu a');

menu1.forEach((item) => {
  item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu1.forEach((item, index) => {
  if(index !== 0) {
    item.classList.remove('ativo');
  } else {
    
  }
});

// Verifique se as imagens possuem o atributo alt
const img1 = document.querySelectorAll('img');

img1.forEach((item) => {
  if(item.hasAttribute('alt')){
    console.log("Possuir alt:", item);
  }
}); 
// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="https://"]');

linkExterno.setAttribute("href", "https://www.w3schools.com/jsref/met_element_setattribute.asp");