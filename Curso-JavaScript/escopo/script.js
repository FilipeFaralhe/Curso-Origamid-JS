//ESCOPO DE FUNÇÃO

//Escopo evita o conflito entre nomes de variáveis.
//Criar Variáveis sem var, const e let faz com que a varivável seja criada globalmente.
//'use strict' impede que esses erros bobos ocorra.
function mostrarCarro() {
  var carro = "Uno";
  console.log(carro);
}

mostrarCarro(); // Uno
//console.log(carro); //Erro, carro is not defined

//ESCOPO DE FUNÇÃO PAI

var champion = "jax";

function mostrarChampion() {
  console.log(champion);//jax
  var frase = "Quem vai encarar o campeão!";
  console.log(frase);//Quem vai encarar o campeão!
}

mostrarChampion();//jax e Quem vai encarar o campeão!
console.log(champion);//jax
//console.log(frase);//Error; frase is not defined, pois a frase está no escopo fechado

//ESCOPO DE BLOCO

/*
  Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de 
  declarmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.
*/
if(true) {
  var mes = "janeiro";
  console.log(mes);//janeiro
}

console.log(mes);//janeiro

//Será somento utilizado a partir de agora, const e let
if(true) {
  const personagem = 'Hyouka';
  console.log(personagem);
}

//console.log(personagem); // erro, carro is not defined

//CRIAR BLOCO

//Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}
{
  var nome = "filipe"
  const idade = 20;
}
console.log(nome); //filipe
//console.log(idade);//Error, idade is not defined


//ERRO DE VAR EM FOR LOOP
//escrever sempre um FOR LOOP com let
for(var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);//vai até o Número 9
}

console.log(i);//várivel i vazou do escopo for e retornou 10 ao invés de 9, como mostrado no escopo.

//CONST
//Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.
const semana = "Domingo";
//semana = "segunda"; //Erro, tentou modificar o valor
//const semana; //Erro, declarou sem valor


const data = {
  dia: 29,
  ano: 1999
}

data.dia = 25; //O const aceita a mudança dos atributo objeto
//data = "Leite com manga faz mal";// mas não aceita a mudança de objeto para qualquer outro valor
data.mes = "janeiro"; //Aceita a adição de outros atribuitos 
console.log(data);

//LET
//Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.
let meuNome = "filipe";
meuNome = "Carlos";
console.log(meuNome);

let meuNome = "Creison";//Erro, não pode redeclarar a variável

//É interessante deixar tudo em const e deixar em let somendo o que modifica