//NEW PROMISE

/*
  Promise é uma função construtora de promessas. Existem dois resultados possíveis de uma promessa, 
  ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento 
  for ativado.
*/

/* 
  RESOLVE();
  Podemos passar um argumento na função resolve(), este será enviado junto com a resolução da Promise.
*/

/* 
  REJECT();
  Quando a condição de resolução da promise não é atingida, ativamos a função reject para rejeitar a mesma. 
  Podemos indicar no console um erro, informando que a promise foi rejeitada
*/

/* 
  THEN()
  O poder das Promises está no método then() do seu protótipo. O Callback deste método só será ativado 
  quando a promise for resolvida. O argumento do callback será o valor passado na função resolve.
*/


// Exemplo
const promessa = new Promise((resolve, reject) => {
  let condicao = true;

  if(condicao) {
    resolve("Resolvido");
  } else {
    reject(Error("Nada resolvido"));
  }
});

promessa.then(resolucao => console.log(resolucao) /* 'Resolvido' */ );

/* 
  ASSÍNCRONO
  As promises não fazem sentido quando o código executado dentro da mesma é apenas código síncrono. 
  O poder está na execução de código assíncrono que executará o resolve() ao final dele.
*/

// Exemplo
const promessa1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolvido')
  }, 1000);
});

promessa1.then(resolucao => console.log(resolucao) /* 'Resolvido' */ );

/* 
  THEN().THEN() 
  O método then() retorna outra Promise. Podemos colocar then() após then() e fazer um encadeamento 
  de promessas. O valor do primeiro argumento de cada then, será o valor do retorno anterior.
*/

// Exemplo
const promessa2 = new Promise((resolve, reject) => {
  resolve('Etapa 1');
});

promessa2.then(resolucao => { 
  console.log(resolucao);
  return resolucao + ' Etapa 2'; 
})
.then(resolucao => { 
  console.log(resolucao); 
  return resolucao + ' Etapa 3'; 
})
.then(resolucao => console.log(resolucao));


/* 
  CATCH() 
  O método catch(), do protótipo de Promises, adiciona um callback a promise que 
  será ativado caso a mesma seja rejeitada.
*/

// Exemplo
const promessa3 = new Promise((resolve, reject) => {
  let condicao = true;
  if(condicao) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Ocorreu um erro na promise'));
  }
});

promessa3.then(resolucao => {
  console.log(resolucao);
})
.catch(reject => {
  console.log(reject);
});


/* 
  THEN(RESOLVE, REJECT)
  Podemos passar a função que será ativada caso a promise seja rejeitada, 
  direto no método then, como segundo argumento.

  primeiro argumento do then seria o  resolve e o segundo o reject, não precisando colocar o catch
*/

const promessa4 = new Promise((resolve, reject) => {
  let condicao = false;
  if(condicao) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Um erro ocorreu.'));
  }
});

promessa4.then(resolucao => {
  console.log(resolucao);
}, reject => {
  console.log(reject);
});

/*
  FINALLY()
  finally() executará a função anônima assim que a promessa acabar. A diferença do finally 
  é que ele será executado independente do resultado, se for resolvida ou rejeitada.
*/

// Exemplo
const promessa5 = new Promise((resolve, reject) => {
  let condicao = true;
  if(condicao) {
    resolve('Teste Finally');
  } else {
    reject(Error('Um erro ocorreu.'));
  }
});

promessa5.then(resolucao => {
  console.log(resolucao);
}, reject => {
  console.log(reject);
}).finally(() => {
  console.log('Acabou'); // 'Acabou'
});

/*
  PROMISE.ALL()
  Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma 
  rejeitada. A reposta é uma array com as respostas de cada promise.
*/

// Exemplo
const login = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Login efetuado');
  }, 1000);
});

const dados = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Dados carregados');
  }, 1500);
});

const tudoCarregado = Promise.all([login, dados]);

tudoCarregado.then(resposta => console.log(resposta) /* Array com ambas respostas */ );

/* 
  PROMISE.RACE()
  Retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada. 
  Essa nova promise terá a resposta da primeira resolvida.
*/

// Exemplo
const login1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Login efetuado');
  }, 1000);
});

const dados1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Dados carregados');
  }, 1500);
});

const tudoCarregado1 = Promise.race([login1, dados1]);

tudoCarregado1.then(resposta => console.log(resposta) /* login efetuado */ );