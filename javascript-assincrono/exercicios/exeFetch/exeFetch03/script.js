// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

function nextJoke() {
  const api = fetch("https://api.chucknorris.io/jokes/random");
  const content = document.querySelector('#content');
  const logo = document.querySelector('#logo');
  
  api.then(response => {
    return response.json();
  })
  .then(joke => {
    content.innerHTML = joke.value;
    logo.src = joke.icon_url
  })
}

nextJoke();