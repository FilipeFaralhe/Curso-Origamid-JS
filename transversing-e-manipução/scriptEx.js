/* // Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');

const cloneMenu = menu.cloneNode(true);
const copy = document.querySelector('.copy');
copy.appendChild(menu);

// Selecione o primeiro DT da dl de Faq
const dl = document.querySelector('.faq dl');
console.log(dl);
const primeiraDT = dl.children[0];
console.log(primeiraDT);

// Selecione o DD referente ao primeiro DT
const DD = primeiraDT.nextElementSibling;
console.log(DD);

// Substitua o conteúdo html de .faq pelo de .animais
const body = document.querySelector('body');
const animais = document.querySelector('.animais');
const faq = document.querySelector('.faq');

body.replaceChild(animais, faq); */