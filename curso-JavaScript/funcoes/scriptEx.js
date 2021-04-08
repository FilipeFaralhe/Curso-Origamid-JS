// Crie uma função para verificar se um valor é Truthy
function isTrue(valor) {
  return !!valor;
}
console.log(isTrue(1));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function calculaPerimetro(lado1, lado2, base, altura) {
  somaDosLados = lado1 + lado2 + base + altura
  return somaDosLados;
}

console.log(calculaPerimetro(10, 10, 10, 10));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto("Filipe", "Faralhe"));

// Crie uma função que verifica se um número é par
function isPar(num) {
  if (num % 2 === 0){
    console.log("is par");
  } else {
    console.log("is ímpar");
  }
}

isPar(5);
isPar(2);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function verificaTipo(value) {
  return typeof(value);
}

console.log(verificaTipo("filipe"));
console.log(verificaTipo(12));
console.log(verificaTipo(true));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(){
  console.log("Filipe Faralhe");
}); 

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
