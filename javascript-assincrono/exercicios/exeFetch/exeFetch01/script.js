// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar


function search(event) {
  event.preventDefault();
  
  const input = document.querySelector('input').value;

  fetch(`https:viacep.com.br/ws/${input}/json/`).then(cep => {
    return cep.text();
  }).then(dadosCep => {
    console.log(dadosCep);
    const compoDados = document.querySelector('#content');
    compoDados.innerHTML = dadosCep;
  })
}
