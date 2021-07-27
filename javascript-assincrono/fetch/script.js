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


/* 
  .BLOB()
  Um blob é um tipo de objeto utilizado para representação de dados de um arquivo. 
  O blob pode ser utilizado para transformarmos requisições de imagens por exemplo. 
  O blob gera um URL único.
*/

const img = fetch('./img/MK1-Dark.webp');

img.then(response => {
  return response.blob();
}).then(imgBlob => {
  const blobUrl = URL.createObjectURL(imgBlob);
  const tagImg = document.querySelector('img');
  tagImg.src = blobUrl;
  console.log(blobUrl);
});

/* 
  .CLONE()
  Ao utilizarmos os métodos acima, text, json e blob, a resposta é modificada. 
  Por isso existe o método clone, caso você necessite transformar uma unica resposta em diferentes valores.
*/

const cep1 = fetch('https://viacep.com.br/ws/01001000/json/');

cep1.then(response => {
  const cloneResponse = response.clone()
  response.text().then(text => console.log(text));
  cloneResponse.json().then(json => console.log(json));
});


/* 
  HEADERS
  É uma propriedade que possui os cabeçalhos da requisição. 
  É um tipo de dado iterável então podemos utilizar o forEach para vermos cada um deles.
*/

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  response.headers.forEach(console.log);
});

/*
  STATUS E .OK
  Retorna o status da requisição. Se foi 404, 200, 202 e mais. ok retorna um valor booleano 
  sendo true para uma requisição de sucesso e false para uma sem sucesso.
*/

fetch('./docs.tst')
.then(response => {
  console.log(response.status, response.ok);
  if(response.status === 404) {
    console.log('Pagina não carregada');
  }
});

/*
  .URL E .TYPE
  .url retorna o url da requisição. .type retorna o tipo da reposta.
*/

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  console.log(response.url, response.type);
});

//types
// basic: feito na mesma origem
// cors: feito em url body pode estar disponível
// error: erro de conexão
// opaque: no-cors, não permite acesso de outros sites