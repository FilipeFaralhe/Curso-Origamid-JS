# HTTP
-> Hypertext Transfer Protocol é o protocolo utilizando para enviarmos/recebermos arquivos e dados na Web.

```js 
fetch('https://pokeapi.co/api/v2/pokemon/')
.then(response => response.json())
.then(pokemon => {
    conselo.log(pokemon);
});
```
# URL E METHOD
-> Uma requisição HTTP é feita através de uma URL. O método padrão é o GET, mas existem outros como POST, UPDATE, DELETE, HEADER.

```js
const url = 'https://jsonplaceholder.typicode.com/posts/';
const options = { 
  method: 'POST', // Método de requisação 
	headers: { // O tipo de conteúdo da requesição e algumas informações 
		"Content-Type": "application/json"; "charset=utf-8",
	},
	body: '"aula": "JavaScript"', // Responsável pelos dados enviados
}

fetch(url, options)
.then(response => response.json())
.then(json => console.log(json)); //retorna um objeto javaScript com as irformações passdas na postagem
```

# METHOD

## GET
-> Puxa informações, utilizado para pegar posts, usuários e etc.

## POST 
-> É utilizado para criar posts, usuários e etc.

## PUT
-> Geralmente ultilizado para atualizar informações.

## DELETE 
-> Utilizado para deletar informações.

## HEAD
-> Puxa apenas os headers.


# GET
-> GET irá puxar as informações da URL. Não é necessário informar que o método é GET, pois este é o padrão.  

```js
const url = 'https://jsonplaceholder.typicode.com/posts/';
fetch(url, { method: 'GET' })
.then(r => r.json())
.then(r => console.log(r))
```

# POST
-> POST irá criar uma nova postagem, utilizando o tipo de conteúdo especificado no headers e utilizando o conteúdo do body.
```js
const url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '{"titulo": "JavaScript"}'
})
.then(r => r.json())
.then(r => console.log(r))

```
# PUT
-> PUT irá atualizar o conteúdo do URL com o que for informado no conteúdo do body.

```js
//Atualizando os dados no post com o id 1
const url = 'https://jsonplaceholder.typicode.com/posts/1/';

fetch(url, {
  method: 'PUT',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '{"titulo": "JavaScript"}'
})
.then(r => r.json())
.then(r => console.log(r))
```

# HEAD
-> HEAD puxa apenas os headers. É uma requisição mais leve pois não puxa o body.
```js
const url = 'https://jsonplaceholder.typicode.com/posts/1/';

fetch(url, {
  method: 'HEAD',
})
.then(response => {
  response.headers.forEach(console.log);
  console.log(response.headers.get('Content-Type'));
});
```
# HEADERS

## Cache-Control
-> Tempo que o arquivo deve ficar em cache em segundos. Ex: public, max-age=3600

## Content-Type
-> Tipo de conteúdo. Ex: text/html; charset=utf-8. Indicar o tipo de arquivo principalmente em métodos POST e PUT.

## Lista de Headers
-> https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

# CORS
-> Cross-Origin Resource Sharing, gerencia como deve ser o compartilhamento de recursos entre diferente origens.

É definido no servidor se é permitido ou não o acesso dos recursos através de scripts por outros sites. Utilizando o Access-Control-Allow-Origin.

Se o servidor não permitir o acesso, este será bloqueado. É possível passar por cima do bloqueio utilizando um proxy.

CORS é um acordo entre browser / servidor ou servidor / servidor. Ele serve para dar certa proteção ao browser, mas não é inviolável.

```js
const url = 'https://cors-anywhere.herokuapp.com/https://www.google.com/';
const div = document.createElement('div');

fetch(url)
.then(r => r.text())
.then(r => {
  div.innerHTML = r;
  console.log(div);
});

```


