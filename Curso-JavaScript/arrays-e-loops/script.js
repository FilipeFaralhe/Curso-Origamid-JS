var videoGames = ["Switch", "PS4", "Xbox"]; //Estrutura de um array

//acessando os elementos do array
videoGames[0];
videoGames[1];
videoGames[2];

// alguns métodos do objeto array
videoGames.pop(); //remove o último elemento do array
console.log(videoGames);
videoGames.push("Super Nintendo"); // Adiciona uma elemento no final do array
console.log(videoGames);
//Existem diversos outros métodos, como map, reduce, forEach e etc.


//propriedade do objeto array
console.log(videoGames.length);

//For Loop
//1: inicia com um número
//2: codição para o loop ser executado
//3: icremento na variável numero + 1
//cuidado para não esquecer o incremento, sem ele um loop será criado
for (var numero = 0; numero < 10; numero++){
  console.log(numero);
}

var personagens = ["Ezreal", "Vayne", "Miss Fortune", "Jinx", "Lucian"];

for (var item = 0; item < personagens.length; item++){
  if(personagens[item] === "Miss Fortune"){ 
    break; //quebra o loop
  }
  console.log(personagens[item]);//colchetes serve para acessar as posições do array
}

//Não se confunda com a sintaxe
//Não é aconselhável escrever dessa forma, mas funciona normalmente.
var num = 0;
var maximo = 10

for(;num < maximo;) {
  console.log(`Teste ${num}`);
  num++;
}

//While Loop
var i = 0; // variável de inicio
while(i < 10){ // condição
  console.log(i);
  i++; // incremento
}

//forEach
//É um método que tem uma função como parametro que executa ela para cada index do array
var personagens2 = ["Sivir", "Jhin", "Kalista", "Lux"];

//1 parametro da função é o valor de cada posição do array
//2 parametro da função é o index de cada posição do array
//3 parametro da função é o próprio array
personagens2.forEach(function(value, index, array) {
  console.log(`${index} ${value}: Vida de ADC não é fácil! ${array}`);
});


