// ASYNC / AWAIT

/*
  A palavra chave async indica que a função possui partes assíncronas e que você pretende 
  esperar a resolução da mesma antes de continuar. O await irá indicar a promise que 
  devemos esperar. Faz parte do ES8.
*/

async function puxarDados() {
  // Espera finalizar para proseguir para o proxima linha
  const responseDados = await fetch('./dados.json');
  const dadosJSON = await responseDados.json();

  document.body.innerText = "Nome: " + dadosJSON[0].nome + " Idade: " + dadosJSON[0].idade;
}

puxarDados();

// THEN/ ASYNC

/* A diferença é uma sintaxe mais limpa */

function iniciarFetch() {
  fetch('./dados.json')
  .then(dadosResponse => dadosResponse.json())
  .then(dadosJSON => console.log(dadosJSON[0].nome));
}

iniciarFetch();

async function iniciarAsync() {
  const dadosResponse = await fetch('./dados.json');
  const dadosJSON = await dadosResponse.json();

  console.log(dadosJSON[0].nome);
}

iniciarAsync();

//TRY / CATCH

/* Para lidarmos com erros nas promises, podemos utilizar o try e o catch na função */

async function getDados() {
  try {  
    const dadosResponse = await fetch('./dados.json');
    const dadosJSON = await dadosResponse.json()
    console.log(dadosJSON[0].idade);
  }catch(erro){
    console.log(erro);
  }
}

getDados();

// INCIAR FETCH AO MESMO TEMPO

/*
  Não precisamos esperar um fetch para começarmos outro. Porém precisamos esperar a 
  resposta resolvida do fetch para transformarmos a response em json.
*/

async function doubleFetch() {
  const dadosResponse = fetch('./dados.json');
  const clientesResponse = fetch('./clientes.json');

  // ele espera o que está dentro da expressão () ocorrer primeiro
  const dadosJSON = await (await dadosResponse).json();
  const clientesJSON = await (await clientesResponse).json();

  console.log(dadosJSON[0]);
  console.log(clientesJSON[1]);
}

doubleFetch();

// PROMISE

/* 
  O resultado da expressão à frente de await tem que ser uma promise. 
  E o retorno do await será sempre o resultado desta promise.
*/

async function asyncSemPromise() {
  /* Console não irá esperar, pois o await só funcionar quando o código afrente for uma 
    promise
  */
  await setTimeout(() => {
    console.log('depois de 1s');
  }, 1500);
  console.log('acabou!');
}

asyncSemPromise();

async function AsyncComPromise() {
  await new Promise( resolve => {
    setTimeout(() => resolve(), 1000);
  });
  console.log('Depois de 1s');
}

AsyncComPromise();