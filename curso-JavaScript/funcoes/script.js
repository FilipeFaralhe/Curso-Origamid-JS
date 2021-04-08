//Função nomeada
function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7

console.log(total);
console.log(pi()); // parenteses executa uma função
console.log(pi); 

//peso e altura são os parãmetros
function imc(peso, altura) {
  const imc = peso / (altura ** 2);//altura ao quadrado
  return imc;
}

console.log(`imc1 ${imc(80, 1.80)}`); //80 e 1.80 são os argumentos;
console.log(`imc2 ${imc(60, 1.70)}`); //60 e 1.70 são os argumentos;

function corFavorita(cor) {
  if(cor === "Azul") {
    return "eu gosto do céu";
  } else if(cor === "Verde") {
    return "Eu gosto de mato";
  } else {
    return "Gosta de nada";
  }
}

console.log(corFavorita()); // retorna 'Gosta de nada'

//função do browser(addEventListener)
//primeiro parametro é uma string com a função do botão, o segundo parametro é uma função que diz o que esse botão irá fazer se acontecer o click
// A função possui dois argumentos
// Primeiro é a string 'Click'
// Segundo é uma função anônima
let n = 1;
addEventListener("click", function(){
  n++
  console.log(n),
  console.log("Clicou");
});


//retorna o valor no console e undefined, pois o return não foi definido
function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc); // printa o restultado de imc
}

console.log(imc2(20, 1.8)); // printa o valor

//Não é ideal que uma função retorne dois tipos diferente de dados
function terceiraIdade(idade){
  if (typeof idade !== "number") {
    return "Ensira um número válido";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(`terceira idade: ${terceiraIdade(60)}`);

//Escopo
/* se totalPaises fosse uma váriavel global, a função constinuaria funcionar normalmente,
  mas como ela está em um escopo fechado, ela funcionara somendo dentro deste escopo */
function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `faltam visitar ${totalPaises - paisesVisitados} países`;
}
//totalPaises não foi definodo, pois a váriavel se encontra em um escopo fechado na function "faltaVisitar"
// console.log(totalPaises);

var profissao = "FrontEnd";

//Escopo léxico
function dados() {
  var nome = "Filipe";
  var idade = "21";
  function outrosDados() {
    var endereço = "Rio de Janeiro";
    var idade = 23;
    return `${nome}, ${idade}, ${endereço}, ${profissao}` 
  }
  return outrosDados();// erro, fora do escopo onde deveria estar
}

console.log(dados()); // retorna Filipe, 23, Rio de Janeiro, FrontEnd
// console.log(outrosDados()); // retorna error, pois a função está em um escopo fechado

//Hoisting - primeiramento ele pega o arquivo inteiro e joga as váriaveis/funções para cima e depois são excutando os comendos executáveis
ayaya(); // return ayaya

function ayaya() {
  console.log("ayaya");
}