var numero = 20;

console.log(nunmero = numero + 10); //Esse código é o mesmo que o de baixo
console.log(numero += 10);

//Operadores de Atribuição
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

//Operador Ternário
/*É básicamente uma abreviação de if else, geralmente utilizado quando precisamos 
  atribuir um valor para uma variável, dependendo de uma condição
*/
var idade = 19;
var naoPossuiDiabetes = true;
//1: condição
//2: se o valor é verdadeiro
//3: se o valor é falso
var podeBeber = (idade >= 18 && naoPossuiDiabetes) ? "Pode beber" : "Não pode beber";
console.log(podeBeber);

//if Abreviado
//Funciona se retornar apenas uma linha de código
var possuirFaculdade = true;
if(possuirFaculdade)
  console.log("Possui");//uma linha de código
else
  console.log("Não possui");//uma linha de código  
