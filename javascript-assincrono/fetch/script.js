/* 
  FETCH API 
  Permite fazermos requisições HTTP através do método fetch(). Este método retorna a resolução de uma 
  Promise. Podemos então utilizar o then para interagirmos com a resposta, que é um objeto do tipo 
  Response.
*/

const doc = fetch('./doc.txt');

doc.then(response => {
  console.log(response);
});

/* 
  RESPONSE
  O objeto Response, possui um corpo com o conteúdo da resposta. Esse corpo pode ser 
  transformado utilizando métodos do protótipo do objeto Response. Estes retornam outras promises.
*/

const doc1 = fetch('./doc.txt');

doc1.then(response => {
  return response.text();
}).then(body => {
  console.log(body);
})

/* 
  SERVIDOR LOCAL
  O fetch faz uma requisição HTTP/HTTPS. Se você iniciar um site local diretamente pelo index.html, 
  sem um servidor local, o fetch não irá funcionar.
*/

const SvLocal = fetch('c:/files/arquivo.txt');

SvLocal.then(response => console.log(response)); // Erro

/*   
  .JSON()
  Um tipo de formato de dados muito utilizado com JavaScript é o JSON (JavaScript Object Notation), 
  pelo fato dele possuir basicamente a mesma sintaxe que a de um objeto js. .json() transforma 
  um corpo em json em um objeto JavaScript.
*/

const cep = fetch('https://viacep.com.br/ws/01001000/json/');

cep.then(response => { 
  return response.json();
}).then(body => { 
  const cont = document.querySelector('.conteudo');
  console.log(body) // objeto 
  cont.innerHTML = body.logradouro + "/" + body.uf;
});

/*
  Text();
  Podemos utilizar o .text() para diferentes formatos como txt, json, html, css, js e mais.
*/

const css = fetch('./style.css');

css.then(response => {
  return response.text()
}).then(body => {
  console.log(body);
  
  const cont = document.querySelector('.conteudo');
  const style = document.createElement('style'); // Criando uma tag style
  
  style.innerHTML = body;
  cont.appendChild(style);
});

/* 
  HTML E .TEXT()
  Podemos pegar um arquivo inteiro em HTML, transformar o corpo em texto e inserir em uma div 
  com o innerHTML. A partir dai podemos manipular esses dados como um DOM qualquer.
*/

const sobre = fetch('./sobre.html');

sobre.then(response => { 
  return response.text();
}).then(body => { 
  const cont = document.querySelector('.conteudo');
  cont.innerHTML = cont.innerHTML + body;
});

