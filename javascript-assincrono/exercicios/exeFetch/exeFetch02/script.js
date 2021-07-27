// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s


function searchData() {
  const api = fetch('https://blockchain.info/ticker');

  const content = document.querySelector('#content');
  api.then(response => {
    return response.json();
  })
  .then(data => content.innerHTML = "Valor de compra: " + data.BRL.buy);

  setTimeout(() => {
    location.reload();
  }, 30000);
}

searchData();

