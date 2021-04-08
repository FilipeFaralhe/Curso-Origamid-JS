// STRING

/* 
  É a construtora de strings, toda string possui as propriedades e métodos do prototype de String.
*/

/*
  Ambos estão fazendo a mesma coisa, só tem uma pequena mudança, 
  que a comida retorna string e o liquido retorna um objeto com a string
*/

const comida = 'Pizza';
const liquido = new String('Água');
const ano = new String(2018); 


// STR.LENGTH

/* 
  Propriedade com o total de caracteres da string.
*/
const frase = 'Pizza melhor que burguer';

comida.length // 5
frase.length // 24

comida[0] // P
frase[0] // P
frase[frase.length - 1] // pega o ultimo caractere r

 
// STR.CHARAT(N)

/* 
  Retorna o caracter de acordo com o index de (n).
*/

const linguagem = "JavaScript";

linguagem.charAt(0); // J
linguagem.charAt(2); // v

linguagem.charAt(linguagem.length - 1); // t

// STR.CONCAT(STR2, STR3, ...)
const fraseLinguagem = "Á melhor linguagem é "

const fraseCompleta = fraseLinguagem.concat(linguagem, '!!'); // Á melhor linguagem é JavaScript

// STR.INCLUDES(SEARCH, POSITION);

/* 
  Procura pela string exata dentro de outra string. A procura é case sensitive.
*/

const frutas = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(frutas); // true
frutas.includes(listaFrutas); // false


// STR.ENDSWITH(SEARCH) E STR.STARTSWITH(SEARCH)

/* 
  Procura pela string exata dentro de outra string. A procura é case sensitive.
*/

frutas.endsWith('nana'); // true
frutas.startsWith('Ba'); // true
frutas.startsWith('na'); // false;

