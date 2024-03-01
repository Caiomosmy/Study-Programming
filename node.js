//nodejs

//INTRODUCTION 

//Error Handling

//

/*##Asynhronous Programming 🎯

Código assíncrono significa que as coisas podem acontecer independentemente do fluxo principal do programa; as funções assíncronas em JavaScript são processadas em segundo plano sem bloquear outras solicitações. Ele garante a execução de código sem bloqueio. O código assíncrono é executado sem qualquer dependência e sem ordem. Isso melhora a eficiência e o rendimento do sistema. Fazer aplicações web requer conhecimento de conceitos assíncronos, pois estaremos lidando com ações que requerem algum tempo para serem processadas.

- Event Emitter
    
    No Node.js, um evento pode ser descrito simplesmente como uma string com um retorno de chamada correspondente. Um evento pode ser “emitido” (ou, em outras palavras, o retorno de chamada correspondente pode ser chamado) diversas vezes ou você pode optar por ouvir apenas na primeira vez que for emitido.
    
- Event Loop
    
    O Event Loop é um dos aspectos mais críticos do Node.js. Por que isso é tão importante? Por explicar como o Node.js pode ser assíncrono e ter E/S sem bloqueio, ele explica o “recurso matador” do Node.js, que o tornou tão bem-sucedido.*/
    
    jsx
    console.log('Início do programa');
    
    setTimeout(() => {
        console.log('Callback do setTimeout executada');
    }, 2000);
    
    console.log('Fim do programa');
      
    /*Neste exemplo, temos um **`setTimeout`** que programa uma callback para ser executada após 2 segundos. Enquanto isso, o código continua a executar. Vamos analisar o que acontece passo a passo:
    
    1. O log "Início do programa" é exibido.
    2. O **`setTimeout`** é chamado e a callback é agendada para execução após 2 segundos.
    3. O log "Fim do programa" é exibido.
    4. Após 2 segundos, a callback do **`setTimeout`** é executada e o log correspondente é exibido.
    
    O importante aqui é que o código não ficou bloqueado esperando os 2 segundos passarem. Em vez disso, o Node.js continuou a executar outras operações durante esse tempo, graças ao Event Loop.
    
    ### **Exemplo com Operação de E/S:**
    
    Vamos ver outro exemplo com uma operação de leitura de arquivo, que é uma operação de E/S:*/
    
    jsx
    const fs = require('fs');
    
    console.log('Início do programa');
    
    fs.readFile('arquivo.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
    
    console.log('Fim do programa');
    ```
    
- Writing Async Code
