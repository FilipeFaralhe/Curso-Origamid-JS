// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idadeMinha = 21;
var iaddeParente = 50;
if(idadeMinha === iaddeParente) {
  console.log("Minha idade é igual do meu parente");
} else if(idadeMinha < iaddeParente){
  console.log("Minha idade é menor do que a do meu parente");
} else {
  console.log("Minha idade é maior do que a do meu parente");
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// Resultado é igual a true

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

//negando a várivel duas vezes ela volta para o seu estado atual
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);
// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207e6;
var china = 1340e6;

var difQtdHabitantes = brasil - china; 

if(brasil > china) {
  console.log(`Brasil é tem ${difQtdHabitantes} mais habitantes do que a China`);
} else {
  console.log(`Brasil tem ${difQtdHabitantes} menos habitantes que a china`);
}


// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
} // o Resultado é Falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
} // o Resultado é 'Cão'