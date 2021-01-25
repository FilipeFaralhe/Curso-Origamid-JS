// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var pessoa = {
  nome: "Cleiton",
  sobrenome: "Cremison",
  idade: 29,
  cpf: 1234544776790,
  telefone: 998649202
}

// Crie um método no objeto anterior, que mostre o seu nome completo
pessoa.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}

console.log(pessoa.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raça: "labrador",
  idade: 10,
  cor: "preto",

  late(pessoa){
    if (pessoa !== "homem") {
      return `não late` 
    } else {
      return `AUAUAUUA` 
    }
  }
}


console.log(cachorro.late("homem"));