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
/*O v-model no Vue.js é uma diretiva que permite criar ligações de dados bidirecionais entre o estado interno do componente 
e um elemento de formulário. Ele simplifica a interação com elementos de entrada de formulários, automatizando a atualização
do estado do componente quando o valor do formulário é alterado e vice-versa. Aqui estão alguns exemplos práticos de como 
usar v-model:*/

1. Texto de Entrada (Input):
<template>
  <div>
    <label for="nome">Nome:</label>
    <input id="nome" type="text" v-model="nome" />
    <p>Nome digitado: {{ nome }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: '',
    };
  },
};
</script>

2. Seleção (Select):
<template>
  <div>
    <label for="selecao">Escolha uma opção:</label>
    <select id="selecao" v-model="opcaoSelecionada">
      <option value="opcao1">Opção 1</option>
      <option value="opcao2">Opção 2</option>
      <option value="opcao3">Opção 3</option>
    </select>
    <p>Opção selecionada: {{ opcaoSelecionada }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opcaoSelecionada: 'opcao1',
    };
  },
};
</script>

3. Caixa de Seleção (Checkbox):
<template>
  <div>
    <input type="checkbox" id="aceitar" v-model="aceitouTermos" />
    <label for="aceitar">Aceito os termos e condições</label>
    <p>Estado da caixa de seleção: {{ aceitouTermos }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aceitouTermos: false,
    };
  },
};
</script>

4. Botões de Rádio (Radio Buttons):
<template>
  <div>
    <input type="radio" id="radio1" value="opcao1" v-model="opcaoSelecionada" />
    <label for="radio1">Opção 1</label>

    <input type="radio" id="radio2" value="opcao2" v-model="opcaoSelecionada" />
    <label for="radio2">Opção 2</label>

    <input type="radio" id="radio3" value="opcao3" v-model="opcaoSelecionada" />
    <label for="radio3">Opção 3</label>

    <p>Opção selecionada: {{ opcaoSelecionada }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opcaoSelecionada: 'opcao1',
    };
  },
};
</script>

/*O v-model torna o gerenciamento de formulários mais simples e eficiente, automatizando a sincronização entre o estado 
do componente e os elementos do formulário. Esses são apenas alguns exemplos de como você pode usar o v-model em 
diferentes tipos de elementos de formulário.*/


/*EVENTS HANDLING*/
/*No Vue.js, o tratamento de eventos é essencial para criar interatividade em um site dinâmico. Os eventos podem ser 
associados a elementos de formulário, cliques de botão, movimentos do mouse, entre outros. Vamos explorar alguns 
exemplos práticos de tratamento de eventos em Vue.js:*/

1. Cliques de Botão:
<template>
  <div>
    <button @click="manipularClique">Clique-me</button>
  </div>
</template>

<script>
export default {
  methods: {
    manipularClique() {
      console.log('Botão clicado!');
    },
  },
};
</script>

2. Eventos de Teclado:
<template>
  <div>
    <input @keyup="manipularTecla" placeholder="Pressione uma tecla" />
  </div>
</template>

<script>
export default {
  methods: {
    manipularTecla(event) {
      console.log('Tecla pressionada:', event.key);
    },
  },
};
</script>

3. Eventos de Mouse:
<template>
  <div>
    <div @mouseover="manipularMouseOver" @mouseout="manipularMouseOut">
      Passe o mouse sobre mim
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    manipularMouseOver() {
      console.log('Mouse sobre o elemento!');
    },
    manipularMouseOut() {
      console.log('Mouse fora do elemento!');
    },
  },
};
</script>

4. Submissão de Formulário:
<template>
  <div>
    <form @submit.prevent="manipularSubmissao">
      <input type="text" v-model="mensagem" />
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensagem: '',
    };
  },
  methods: {
    manipularSubmissao() {
      console.log('Formulário enviado com mensagem:', this.mensagem);
    },
  },
};
</script>

5. Delegação de Eventos:
<template>
  <div @click="manipularClick">
    <button>Botão 1</button>
    <button>Botão 2</button>
  </div>
</template>

<script>
export default {
  methods: {
    manipularClick(event) {
      console.log('Elemento clicado:', event.target.tagName);
    },
  },
};
</script>

/*Esses são apenas alguns exemplos para ilustrar como você pode tratar eventos no Vue.js. A utilização do @ seguido 
do nome do evento simplifica o vínculo e o tratamento de eventos em seus componentes Vue.js. Os métodos associados 
aos eventos podem realizar operações mais complexas, como alterar o estado do componente, fazer chamadas a APIs, 
entre outras ações.*/

/*COMPUTED PROPERTIES*/
/*Propriedades computadas no Vue.js são uma maneira poderosa de simplificar e organizar a lógica complexa em seu componente. 
Elas permitem que você defina propriedades que são derivadas de outras propriedades reativas e são recalculadas 
automaticamente quando as dependências mudam. Vamos explorar alguns exemplos práticos de propriedades computadas:*/

1. Calculando uma Propriedade com Base em Dados Existente:

<template>
  <div>
    <p>Preço: {{ preco }}</p>
    <p>Preço com Desconto: {{ precoComDesconto }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      precoBase: 100,
      desconto: 0.2,
    };
  },
  computed: {
    precoComDesconto() {
      return this.precoBase * (1 - this.desconto);
    },
  },
};
</script>

2. Concatenando Strings Dinamicamente:
<template>
  <div>
    <p>{{ nomeCompleto }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: 'João',
      sobrenome: 'Silva',
    };
  },
  computed: {
    nomeCompleto() {
      return this.nome + ' ' + this.sobrenome;
    },
  },
};
</script>

3. Filtrando uma Lista de Itens:
<template>
  <div>
    <ul>
      <li v-for="item in itensFiltrados">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todosOsItens: ['Item 1', 'Item 2', 'Item 3'],
      filtro: 'Item 2',
    };
  },
  computed: {
    itensFiltrados() {
      return this.todosOsItens.filter(item => item !== this.filtro);
    },
  },
};
</script>

4. Propriedades Computadas Dependentes de Outras Propriedades Computadas:
<template>
  <div>
    <p>Área: {{ area }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      largura: 5,
      altura: 10,
    };
  },
  computed: {
    area() {
      return this.calculaArea(this.largura, this.altura);
    },
  },
  methods: {
    calculaArea(largura, altura) {
      return largura * altura;
    },
  },
};
</script>

/*As propriedades computadas no Vue.js permitem encapsular lógica mais complexa de uma maneira declarativa e reativa, 
melhorando a legibilidade e a manutenção do seu código. Elas são recalculadas automaticamente sempre que suas dependências
mudam, garantindo consistência e eficiência.*/


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






