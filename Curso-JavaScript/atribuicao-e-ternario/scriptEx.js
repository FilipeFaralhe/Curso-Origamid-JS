// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
console.log(`O Scroll rodou ${scroll += 500} vezes`);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
//normal
var darCredito = (possuiCarro && possuiCasa);
console.log(darCredito);
//Com operador ternário
var darCredito = (possuiCarro && possuiCasa) ? "Dar crédito ao cliente" : "Negar crédito ao cliente";
console.log(darCredito);