var nome = "Filipe";

//strings
console.log(nome.length); //conta o total de caracteres
console.log(nome.charAt(2));//pega o caracter selecionado 
console.log(nome.replace("Fi", "Fe"));//substitiu os caracteres, porém a vavriável contínua com a mesma string 
console.log(nome);


//números
var altura = 1.8;

/*Por um breve momento o número é envolvido em um Objeto(coerção), 
tendo acesso assim as suas propriedades e métodos*/
console.log(altura.toString());//transforma em string
console.log(altura.toFixed());//arredondo para um número inteiro 

//Funções
//As funções também possuiem métodos e propriedades
function areaQuadrado(lado) {
  return lado * lado
}

console.log(areaQuadrado.toString());//imprime a função inteira em string
//exemplo
/* function areaQuadrado(lado) {
  return lado * lado
} */

console.log(areaQuadrado.length)//retorna o total de parametros da função

//Dom(Document Object Model)
/*Praticamente todos os efeitos com 
JS são feitos utilizando propriedades e métodos de objetos do DOM.*/
var btn = document.querySelector(".btn");

console.log(btn);

btn.addEventListener('click', function(){ 
  console.log("Clicou");
});

console.log(btn.classList.add("ativo")); //adiciona uma classe no botão
console.log(btn.classList);//retorna a lista de classes
console.log(btn.innerText); //retorna o valor do texto dentro do botão

