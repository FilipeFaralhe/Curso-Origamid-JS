/* tem precisão para até 15 digitos, 
depois disso começa a arredondar os valores*/
var idade = 23;
var n = 2e10;
var n1 = 2e-6;
var n2 = 2.5;

console.log(idade);
console.log(n);
console.log(n1);
console.log(n2);

function verficarNaN(valor) {
  console.log(isNaN(valor));
} 

// Operadores Aritméticos Básicos
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

// Operadores Aritméticos(string)
var soma1 = '100' + 50; // 10050
var subtracao1 = '100' - 50; // 50
var multiplicacao1 = '100' * '2'; // 200
var divisao1 = '10' / 2; // 5
var divisao2 = 'comprei 10' / 2; // NaN (Not a Number)
verficarNaN(divisao2);
// é possível vericar se uma variável é um NaN ou não com a função isNaN()

// A ordem importa
//parênteses prioriza uam expressão
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// Operadores Aritméticos Unários
var incremento = 5;
//retorna o valor e incrementa depois
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento1 = 5;
//incrementa primeiro e retorna depois
console.log(++incremento1); // 6
console.log(incremento1); // 6

var decremento = 5;
//retorna o valor e decrementa depois
console.log(decremento--); // 5
console.log(decremento); // 4

var decremento1 = 5;
//decrementa primeiro e retorna depois
console.log(--decremento1); // 4
console.log(decremento1); // 4

// O + e - tenta transformar o valor seguinte em número

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 
// em boolean transforma em 1 ou 0
var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

