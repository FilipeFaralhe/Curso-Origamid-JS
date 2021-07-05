# Síncrono vs Assíncrono

* Síncrono
-> Espera a tarefa acabar para continuar a próxima

* Assíncrono
-> Move para a próxima terefa antes da anterior terminar. O trabalho será executado no 'fundo ' equando
terminar, será colocado na fila(Task Queue).

* Exemplos de Assíncrono
-> setTimeout, Ajax, Promises, Fetch, Async.


# Como funciona por debaixo dos panos

* Call stack = Resposável por rodar o javascript síncrono.

* Memory = Onde fica armazenada as variáveis.

* Web Api = Responsável por rodar o javascript assíncrono.

* Task Queue = Atividades terminadas na Web Api esperando o código síncrono terminar de rodar, para assim encaminhar o código assíncrono para a Call Stack.

# Vantagens

* Carregamento no fundo
-> Não trava o script. É possível utilizar o site enquanto o processamento é realizado no fundo.

* Função ao término
-> Podemos ficar de olho no carregamento e executar uma função assim que ele terminar.

* Rquisições ao servidor
-> Não precisamos recarregar a página por completo à cada requisição feita ao servidor.

