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

// Modificar a estratégia de merging global //
app.config.optionMergeStrategies.customOption = function (parentVal, childVal) {
  return childVal !== undefined ? childVal : parentVal;
};

app.mount('#app');

/*Agora, você pode usar a estratégia personalizada em componentes*/

export default {
  customOption: 'Valor Personalizado',
  // Restante do código...
};

/*Modificação de Configurações Globais*/

// main.js
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// Modificar a configuração global do aplicativo
app.config.globalProperties.meuGlobal = 'Valor Global';

app.mount('#app');


/*---RENDERING LISTS*/
/*Podemos usar o v-for diretiva para renderizar uma lista de itens com base em uma matriz. O v-for a diretiva requer uma sintaxe especial na 
forma de item in items, onde items é o array de dados de origem e item é um alias para o elemento array que está sendo iterado.*/

//1. Renderização Simples de Lista://

<template>
  <div>
    <ul>
      <li v-for="item in lista" :key="item.id">{{ item.nome }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lista: [
        { id: 1, nome: 'Item 1' },
        { id: 2, nome: 'Item 2' },
        { id: 3, nome: 'Item 3' },
      ],
    };
  },
};
</script>

//2. Utilizando Índice na Iteração://
<template>
  <div>
    <ul>
      <li v-for="(item, index) in lista" :key="item.id">
        {{ index + 1 }}. {{ item.nome }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lista: [
        { id: 1, nome: 'Item 1' },
        { id: 2, nome: 'Item 2' },
        { id: 3, nome: 'Item 3' },
      ],
    };
  },
};
</script>



//3. Renderizando Números de 1 a 5://

<template>
  <div>
    <ul>
      <li v-for="n in 5" :key="n">Item {{ n }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  // Restante do código...
};
</script>


//4. Iterando em Objetos://

<template>
  <div>
    <ul>
      <li v-for="(value, key) in objeto" :key="key">
        {{ key }}: {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      objeto: {
        nome: 'Exemplo',
        idade: 25,
        cidade: 'Cidade',
      },
    };
  },
};
</script>



//5. Utilizando v-for com Métodos Computados://

<template>
  <div>
    <ul>
      <li v-for="item in itensFiltrados" :key="item.id">{{ item.nome }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todosOsItens: [
        { id: 1, nome: 'Item 1', ativo: true },
        { id: 2, nome: 'Item 2', ativo: false },
        { id: 3, nome: 'Item 3', ativo: true },
      ],
    };
  },
  computed: {
    itensFiltrados() {
      return this.todosOsItens.filter(item => item.ativo);
    },
  },
};
</script>



/*---CONDITIONAL RENDERING*/
/*A diretiva v-if é usado para renderizar condicionalmente um bloco. O bloco será renderizado apenas se a expressão da diretiva
retornar um valor verdadeiro.*/

1. Renderização Condicional Simples:
<template>
  <div>
    <p v-if="mostrarParagrafo">Este parágrafo será renderizado condicionalmente.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrarParagrafo: true,
    };
  },
};
</script>


2. Renderização Condicional com v-else:
<template>
  <div>
    <p v-if="mostrarParagrafo">Este parágrafo será renderizado condicionalmente.</p>
    <p v-else>Este parágrafo será renderizado se a condição não for atendida.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrarParagrafo: true,
    };
  },
};
</script>

  
3. Renderização Condicional com v-else-if:
<template>
  <div>
    <p v-if="tipo === 'A'">Tipo A</p>
    <p v-else-if="tipo === 'B'">Tipo B</p>
    <p v-else>Tipo desconhecido</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tipo: 'B',
    };
  },
};
</script>

  
4. Renderização Condicional usando v-show:
<template>
  <div>
    <p v-show="mostrarParagrafo">Este parágrafo será exibido/oculto condicionalmente.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrarParagrafo: true,
    };
  },
};
</script>

/*---LIFECYCLE HOOKS*/
/*Cada instância do componente Vue passa por uma série de etapas de inicialização quando é criada - 
por exemplo, ela precisa configurar a observação de dados, compilar o modelo, montar a instância no DOM, etc, 
e atualize o DOM quando os dados mudarem. Ao longo do caminho, ele também executa funções chamadas hooks de 
ciclo de vida, dando aos usuários a oportunidade de adicionar seu próprio código em estágios específicos.

Os ganchos (lifecycle hooks) no Vue.js são métodos especiais que são chamados automaticamente em determinados 
estágios do ciclo de vida de uma instância do componente Vue. Esses ganchos oferecem oportunidades para 
execução de lógica personalizada em momentos específicos, como antes da criação, montagem, atualização e 
destruição do componente. Aqui estão alguns dos principais ganchos do ciclo de vida e exemplos práticos:
*/

1. beforeCreate: Chamado antes da instância do componente ser criada.
<script>
export default {
  beforeCreate() {
    console.log('beforeCreate: Componente está prestes a ser criado.');
  },
};
</script>

  
2. created: Chamado após a instância do componente ser criada, mas antes da montagem no DOM.
<script>
export default {
  created() {
    console.log('created: Componente foi criado.');
  },
};
</script>

  
3. beforeMount: Chamado antes do componente ser montado no DOM.
<script>
export default {
  beforeMount() {
    console.log('beforeMount: Componente está prestes a ser montado no DOM.');
  },
};
</script>

  
4. mounted: Chamado após o componente ser montado no DOM.
<script>
export default {
  mounted() {
    console.log('mounted: Componente foi montado no DOM.');
  },
};
</script>

  
5. beforeUpdate: Chamado antes do componente ser atualizado (quando os dados mudam, mas antes da atualização do DOM).
<script>
export default {
  beforeUpdate() {
    console.log('beforeUpdate: Componente está prestes a ser atualizado.');
  },
};
</script>

  
6. updated: Chamado após o componente ser atualizado (quando os dados mudam e o DOM foi atualizado).
<script>
export default {
  updated() {
    console.log('updated: Componente foi atualizado.');
  },
};
</script>

  
7. beforeUnmount: Chamado antes do componente ser desmontado do DOM.
<script>
export default {
  beforeUnmount() {
    console.log('beforeUnmount: Componente está prestes a ser desmontado.');
  },
};
</script>

  
8. unmounted: Chamado após o componente ser desmontado do DOM.
<script>
export default {
  unmounted() {
    console.log('unmounted: Componente foi desmontado.');
  },
};
</script>









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






