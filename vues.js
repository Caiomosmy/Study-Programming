/*Tópicos Fundamentais*/

/*Vue é uma estrutura JavaScript para a construção de interfaces de usuário. Ele se baseia em HTML, CSS e JavaScript 
padrão e fornece um modelo de programação declarativa e baseada em componentes que ajuda você a desenvolver 
interfaces de usuário de forma eficiente, seja simples ou complexa.*/


/*--- CLI Vues*/

/*O Vue CLI é um sistema completo para o desenvolvimento rápido do Vue.js, fornecendo:

- Andaimes interativos do projeto via @vue/cli.
- Uma dependência de tempo de execução (@vue/cli-service) é isso:
- Atualizável;
- Construído em cima do webpack, com padrões sensatos;
- Configurável através do arquivo de configuração no projeto;
- Extensível através de plugins
- Uma rica coleção de plugins oficiais que integram as melhores ferramentas no ecossistema frontend.
- Uma interface gráfica completa para criar e gerenciar projetos Vue.js.

O Vue CLI pretende ser a linha de base de ferramentas padrão para o ecossistema Vue. Ele garante que as várias 
ferramentas de compilação funcionem sem problemas, juntamente com padrões sensatos, para que você possa se concentrar 
em escrever seu aplicativo em vez de passar dias discutindo as configurações. Ao mesmo tempo, ainda oferece a 
flexibilidade de ajustar a configuração de cada ferramenta sem a necessidade de ejeção.*/


/*---COMPONENTES
Os componentes nos permitem dividir a UI em peças independentes e reutilizáveis e pensar em cada peça isoladamente.
*/



/*---TEMPLATES
O Vue usa uma sintaxe de modelo baseada em HTML que permite vincular declarativamente o DOM renderizado aos dados 
de instâncias de componentes subjacentes. Todos os modelos Vue são HTML sintaticamente válidos que podem ser 
analisados por navegadores compatíveis com especificações e analisadores HTML.*/



/*---DIRETIVAS*/



/*---ESTILO API*/



/*---APP CONFIGURATIONS*/
/*No Vue.js, cada instância de aplicativo expõe um objeto config que contém configurações específicas para essa instância. Essas configurações podem ser modificadas antes de montar o aplicativo. 
Isso oferece flexibilidade para personalizar o comportamento do Vue.js em nível de aplicativo. Vamos explorar alguns exemplos práticos:*/

/*1. Modificação de Configurações Globais:*/

// main.js
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// Modificar a configuração global do aplicativo
app.config.globalProperties.meuGlobal = 'Valor Global';

app.mount('#app');

/*Agora, você pode acessar this.$meuGlobal em qualquer componente do aplicativo para obter o valor configurado globalmente.*/

/*2. Modificação de Diretivas Globais:*/
// main.js
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// Modificar a configuração global para diretivas
app.config.globalProperties.$minhaDiretiva = {
  mounted(el) {
    el.style.backgroundColor = 'lightgray';
  }
};

app.mount('#app');
/*Agora, em qualquer componente, você pode usar a diretiva personalizada:*/

<template>
  <div v-minha-diretiva>
    <!-- Conteúdo do componente -->
  </div>
</template>

/*3. Modificação de Estratégia de Merging de Diretivas e Filtros:*/

// main.js
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// Modificar a estratégia de merging global
app.config.optionMergeStrategies.customOption = function (parentVal, childVal) {
  return childVal !== undefined ? childVal : parentVal;
};

app.mount('#app');

/*Agora, você pode usar a estratégia personalizada em componentes*/

export default {
  customOption: 'Valor Personalizado',
  // Restante do código...
};

/*---RENDERING LISTS*/



/*---CONDITIONAL RENDERING*/



/*---LIFECYCLE HOOKS*/



/*FORMS HANDLING*/



/*EVENTS HANDLING*/


/*COMPUTED PROPERTIES*/



/*Ecosystem*/

/*VUE ROUTER*/

/*ROUTING*/


/*SSR*/

/*SSG*/

/*Testing*/

/*--Jest*/
/*Vue Testing Library*/
/*Cypress*/


/*State Management*/






