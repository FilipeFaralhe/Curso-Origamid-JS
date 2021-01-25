// tipos de variáveis
var nome = "Filipe";
var idade = 21;
var bonito = true;
var time;
var simbolo = Symbol();
var comida = null;
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof bonito);
console.log(typeof time);
console.log(typeof simbolo);
console.log(typeof comida);

// concateação
var nome1 = "Filipe";
var sobrenome = "Freitas Faralhe";
var nomeCompleto = nome1 + " " + sobrenome;
console.log(nomeCompleto);

var gols = 1000;
var frase = "Romario fez " + gols + " gols"; // conteúdo da variável gols virou string
// concatenação com teamplate string
var frase1 = `Romario fez " ${gols} " gols`; // utilizando template string
console.log(typeof frase);

//concatenção entre number e string
var ano = "2018";
var mes = 8;
console.log(mes + ano);
//resultado é igual a 82018

// soma de numbers
var ano1 = 2018;
var mes1 = 8;
console.log(mes1 + ano1);
//resultado é igual a 2026

// tipos de aspas para string
console.log('1 JavaScript é "super" fácil');
console.log("2 JavaScript é 'super' fácil");
console.log('3 JavaScript é \"super\" fácil');
console.log(`4 JavaScript é "super" fácil`);
//"JavaScript é "super" fácil"; // Inválido

