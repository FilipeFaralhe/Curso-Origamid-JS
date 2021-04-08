console.log("Exercícios")
//Exercicios
// Declare uma variável contendo uma string
console.log("Ex01");
var comida = "pastel"
console.log(comida);

// Declare uma variável contendo um número dentro de uma string
console.log("Ex02");
var soma = "20 + 20"
// var frase = `Eu morri ${nMortes} vezes` jeito com templateString
console.log(soma);

// Declare uma variável com a sua idade
console.log("Ex03")
var idade = 21;
console.log(idade);

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
console.log("Ex04")
var nome = "Filipe", 
    sobrenome = "Freitas Faralhe"
var nomeCompleto = `${nome} ${sobrenome}`     
console.log(nomeCompleto);

// Coloque a seguinte frase em uma variável: It's time
console.log("Ex05")
var frase1 = "It's time"
var frase2 = "It\'s time"
console.log(frase1); //result It's time
console.log(frase2); //result It's time

// Verifique o tipo da variável que contém o seu nome
console.log("Ex06")
var verificarTipoNome = typeof nome
console.log(verificarTipoNome);