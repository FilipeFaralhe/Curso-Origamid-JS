//Objeto é o conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
var pessoa = {
  nome: "Filipe", //propriedades
  idade: 20
}

console.log(pessoa.nome);

/* É necessário o uso do this para pegar as propriedades que estão dentro do objeto, 
pois se a variável(lados) não existir fora do escopa o resultado irá retornar undefined */
var quadrado = {
  lados: 4,

  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado //this faz referencia ao próprio objeto
  }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

//alguns objetos que já vem no JavaScript
console.log("aaa"); //Já percebeu que console é um objeto e log() um método?

//Math é um objeto nativo de JavaScript. 
Math.PI // return 3.14, onde PI é uma propriedade da objeto Math
Math.random(); // return um número aleatório, onde random é uma metódo da objeto Math

//Dot Notation Get sempre acessa um objeto com um ponto.
//quando vc está pegando um valor
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  
  metadeHieght() {
    return this.height / 2; // palavra reservada this, para pegar o próprio objeto
  }
}

var bg = menu.backgroundColor;

//Dot Notation Set
//Quando você atribuindo um valor,
menu.backgroundColor = "#000";

//Adicionando novas propriedades e métodos
//Adicionando uma propriedade
menu.color = "blue";

//Adicionando uma método
menu.escoder = function(){
  return "esconde";
}

/*Quando criamos um objeto, ele é criado por um outro objeto de criação que tem algumas propriedades e metodos, ou sendo, 
nosso objeto passa a poder usar proprieades e métodos desse objeto de criação*/
console.log(menu.hasOwnProperty("width")); // return true se eu tiver a propriedade no meu objeto e retorna false caso ou não tenha

console.log(bg);
console.log(menu.color);
console.log(menu);
console.log(menu.escoder());
