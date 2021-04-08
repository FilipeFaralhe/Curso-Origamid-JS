// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var anosCampeoes = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for(var ano = 0; ano < anosCampeoes.length; ano++){
  console.log(anosCampeoes[ano]);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for(var item = 0; item < frutas.length; item++){
  if(frutas[item] === "Pera") {
    break;
  }
  console.log(frutas[item]);
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var recebe = frutas[frutas.length - 1];
console.log(recebe);
console.log(frutas);