var possuiGraduação = true;
var possuiDoutorado = false;

if(possuiGraduação) {
  console.log("É verdadeiro");
} else {
  console.log("É falso");
}

if (possuiGraduação && !possuiDoutorado) {
  console.log("Sim, possui graduação");
} else if (possuiDoutorado && possuiGraduação) {
  console.log("Possui gradução e doutorado");
} else {
  console.log("Não possui nada");
} 

// Valores que são falso na condição if
if(false);
if(0); // ou -0
if(NaN);
if(null);
if(undefined);
if(''); // ou "" ou ``

// Valores que são true na condição if
if(true);
if(1);
if(' ');
if('Filipe');
if(-5);
if({});

// ! vem para fazer a negação da condição
// se colocar "!" em uma condição verdadeira, ela se torna false
// se colocar "!" em uma condição false, ela se torna verdadeira
if(!true); // false
if(!1); // false
if(!''); // true
if(!undefined); // true
if(!!' '); // true
if(!!''); // false

// Operadores de Comparação
10 > 5 // true
5 > 10 // false
20 < 10 // false
10 <= 10 // true
10 >= 11 // false

// Outros operadores de Comparação
// === aponta para true se a condição for estritamente igual
10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10; // true
10 != 15; // true
10 != '10'; // false
10 !== '10' // true


// Operador Lógico E
true && true; // true
true && false; // false
false && true; // false
"Gato" && "Cão"; // "Cão"
(5 - 5) && (5 + 5); // false
"Gato" && false; //false
(5 >= 5) && (3 < 6); // true

// a primaira condição vai da um número e a segund também, por conta disso o resutado da verdadeiro
var condicional = (5 - 10) && (5 + 5);
if(condicional) {
  console.log("Verdadeiro", condicional);
} else {
  console.log("falso");
}

// A primeira condição da 0, portanto o resultado vai para falso
var condicional2 = (5 - 5) && (5 + 5);
if(condicional2) {
  console.log("Verdadeiro");
} else {
  console.log("falso", condicional2);
}

// Operador Lógico OU
true || true; // true
true || false; // true
false || true; // true
false || false; // false
"Gato" || "Cão"; // "Gato"
(5 - 5) || (5 + 5); // 10
"Gato" || false; // "Gato"
(5 >= 5) || (3 < 6); // true

// Operador OU da true no primeiro verdadeiro
var condicional3 = (5 - 5) || (5 + 5) || (10 - 2);
if(condicional3) {
  console.log("Verdadeiro", condicional3);
} else {
  console.log("falso");
}

var corFavorita = "Verde";

switch (corFavorita) {
  case "Azul":
    console.log("A cor é azul");
    break;
  case "Amarelo":
    console.log("A cor é amaralo");
    break;
  case "Verde":
    console.log("A cor é verde");
    break   
  default: 
    console.log("você não sabe diferenciar cor krl!")  
}

