# JSON 
-> JavaScript Object Notation (JSON) é um formato de organização de dados, compostos por um conjunto de   chave e valor. As aspas duplas são obrigatórias, tanto na chave quanto no valor quando este for uma string.

```json
{
  "id": 1,
  "nome": "Filipe",
  "email": "fulano@gmail.com"
}

```
# VALORES
-> Os valores podem ser números, strings, boolean, arrays, objetos e null.

```json
{
  "id": 2,
  "faculdade": true,
  "pertences": [
    "lapis",
    "caneta",
    "caderno",
    "borracha"
  ],
  "endereco": {
    "cidade": "São Paulo",
    "pais": "Brasil"
  },
  "casado": null
}

```

# ARRAYS E OBJETOS
-> É comum possuirmos array's com objetos em cada valor da array. Cuidado para não colocar vírgula no último item do objeto ou array.

```json
[
  {
    "id": 1,
    "nome": "Filipe"
  },
  {
    "id": 2,
    "nome": "Cleiton"
  },
  {
    "id": 3,
    "nome": "Arthur"
  }
]

```
# JSON.PARSE() E JASON.STRINGIFY()  
-> JSON.parse() irá transformar um texto JSON em um objeto JavaScript. irá transformar um objeto JavaScript em uma string no formato JSON.

```js
const textoJSON = '{"id": 1, "nome": "Filipe", "idade": 21 }';
const textOBJ = JSON.parse(textoJSON);
console.log(textOBJ);

//resultado = {id: 1, nome: "Filipe", idade: 21} transforando em um objeto javaScript

const enderecoOBJ = {
  rua: 'Amoreiras',
  bairro: 'Morumbi',
  cidade: 'Patos de Minas',
  numero: 450
}

const enderecoJSON = JSON.stringify(enderecoOBJ);

//resultado = '{"rua": "Amoreiras", "Bairro": "Morumbi", "cidade": "Patos de minas", "numero": 450 }'

```

# EXEMPLO REAL
->  Podemos guardar por exemplo no localStorage, uma string como valor de uma propriedade. E retornar essa string como um objeto.

```js
const configuracoes = {
  player: 'Google API',
  tempo: 25.5,
  aula: '2-1 JavaScript', 
  vitalicio: true 
};

localStorage.configuracoes = JSON.stringify(configuracoes); // Transformando em string JSON
const pegarConfigurações = JSON.parse(localStorage.configuracoes); // Transforma a string JSON em objeto JavaScript
```