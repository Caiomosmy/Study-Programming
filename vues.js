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
/*As diretivas no Vue.js são instruções especiais que podem ser usadas nos modelos para manipular o DOM de forma declarativa. Elas são prefixadas com "v-" e são usadas para adicionar comportamentos específicos aos elementos ou para controlar a renderização condicional. Aqui estão algumas diretivas principais do Vue.js:*/


/*1. v-model:

Fornece ligação bidirecional entre um elemento de entrada de formulário e uma variável do Vue.js.*/

<input v-model="mensagem" />




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

TOPIC ADVANCE
/*Vamos criar um exemplo prático de uma diretiva personalizada em Vue.js que destaca um elemento quando o mouse passa sobre ele. Esta diretiva customizada será chamada de v-highlight.*/

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Custom Directive</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
</head>
<body>

<div id="app">
  <p v-highlight="'yellow'" @mouseover="highlightElement" @mouseleave="resetHighlight">
    Passe o mouse sobre mim para destacar!
  </p>
</div>

<script>
// Definindo a diretiva globalmente
Vue.directive('highlight', {
  bind(el, binding) {
    // O argumento 'binding' contém informações sobre a diretiva
    el.style.backgroundColor = binding.value;
  },
  unbind(el) {
    // Restaura o estilo quando a diretiva é removida
    el.style.backgroundColor = null;
  }
});

new Vue({
  el: '#app',
  methods: {
    highlightElement() {
      // Lógica adicional quando o mouse está sobre o elemento (se necessário)
      console.log('Mouse sobre o elemento');
    },
    resetHighlight() {
      // Lógica adicional quando o mouse deixa o elemento (se necessário)
      console.log('Mouse deixou o elemento');
    }
  }
});
</script>

</body>
</html>

Neste exemplo:

/*Criamos uma diretiva global chamada v-highlight, que define o comportamento de destaque para um elemento.
O valor passado para a diretiva é a cor do destaque, que é definido usando v-highlight="'yellow'".
As funções @mouseover e @mouseleave são usadas para executar lógica adicional quando o mouse passa sobre o elemento e quando ele deixa o elemento, respectivamente.
Boas práticas incluem o uso de bind para definir o comportamento inicial da diretiva e unbind para garantir que o estilo seja restaurado quando a diretiva é removida.
Lembre-se de que diretivas personalizadas são mais apropriadas para manipulações de DOM de baixo nível e devem ser usadas com cuidado para não violar os princípios do Vue.js.*/


Eventos personalizados

/*Às vezes você pode precisar definir eventos personalizados que podem ser usados ​​em seus componentes. Vue.js permite que você faça isso emitindo objetos de eventos personalizados usando $emit*/

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Custom Events</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
</head>
<body>

<div id="app">
  <counter :limit="5" @limit-reached="handleLimitReached"></counter>
</div>

<script>
// Componente de contador
Vue.component('counter', {
  template: `
    <div>
      <p>Contador: {{ count }}</p>
      <button @click="increment">Incrementar</button>
    </div>
  `,
  props: {
    limit: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
      if (this.count === this.limit) {
        this.$emit('limit-reached', this.count);
      }
    }
  }
});

new Vue({
  el: '#app',
  methods: {
    handleLimitReached(value) {
      alert(`Limite atingido! Contador: ${value}`);
    }
  }
});
</script>

</body>
</html>

/*Neste exemplo:
Criamos um componente counter que possui um botão para incrementar o contador. Esse componente aceita uma propriedade 
chamada limit que define o limite do contador. Quando o botão é clicado, a função increment é chamada, incrementando o 
contador e verificando se atingiu o limite. Se o limite for atingido, um evento personalizado chamado limit-reached é 
emitido usando this.$emit. No componente pai, usamos @limit-reached para ouvir esse evento personalizado e chamamos a 
função handleLimitReached para lidar com a situação quando o limite é atingido. Este exemplo demonstra como você pode 
usar eventos personalizados para comunicar entre componentes e executar ações específicas quando certos eventos ocorrem.*/

/*PLUGINS
Neste caso, criaremos um plugin simples que adiciona um método de formatação de data a todos os componentes Vue.*/

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Plugin</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
</head>
<body>

<div id="app">
  <p>{{ formattedDate }}</p>
</div>

<script>
// Definindo o plugin
const datePlugin = {
  install(Vue) {
    // Adicionando um método global para formatação de data
    Vue.prototype.$formatDate = function (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    };
  }
};

// Usando o plugin
Vue.use(datePlugin);

new Vue({
  el: '#app',
  data() {
    return {
      currentDate: Date.now()
    };
  },
  computed: {
    formattedDate() {
      // Usando o método de formatação de data fornecido pelo plugin
      return this.$formatDate(this.currentDate);
    }
  }
});
</script>

</body>
</html>

/*Neste exemplo:
Criamos um objeto datePlugin que contém um método install. Este método é chamado quando o plugin é instalado, e é onde adicionamos a funcionalidade desejada.
No método install, usamos Vue.prototype para adicionar um método global chamado $formatDate que formata uma data de acordo com as opções específicas.
Ao usar Vue.use(datePlugin), o plugin é instalado globalmente em todas as instâncias Vue, permitindo o acesso ao método $formatDate em qualquer componente.
No componente Vue, usamos o método $formatDate para formatar a data e exibi-la no template. Este é apenas um exemplo básico, e plugins podem ser muito mais poderosos, adicionando funcionalidades complexas em nível de aplicativo ao Vue.js.*/

/*OBSERVADORES
As propriedades computadas nos permitem calcular declarativamente valores derivados. No entanto, há casos em que precisamos realizar “efeitos colaterais” em reação a mudanças de estado – por exemplo, alterar o DOM ou alterar outra parte do estado com base no resultado de uma operação assíncrona.
Com a API Composition, podemos usar a função watch para acionar um retorno de chamada sempre que uma parte do estado reativo muda.

Certo, vou fornecer um exemplo básico de como usar a função watch na API Composition do Vue.js para realizar ações em resposta a mudanças de estado. Neste caso, vamos usar watch para observar uma propriedade reativa e executar uma ação sempre que ela mudar.*/

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Watch</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
</head>
<body>

<div id="app">
  <p>{{ message }}</p>
  <input v-model="inputValue" placeholder="Digite algo">
</div>

<script>
const app = Vue.createApp({
  data() {
    return {
      message: 'Mensagem inicial',
      inputValue: ''
    };
  },
  watch: {
    inputValue(newValue, oldValue) {
      // Este bloco será executado sempre que 'inputValue' mudar
      console.log(`Novo valor: ${newValue}, Valor anterior: ${oldValue}`);
      this.message = `Você digitou: ${newValue}`;
    }
  }
});

app.mount('#app');
</script>

</body>
</html>

/*Neste exemplo:
Utilizamos watch para observar a propriedade inputValue. Sempre que inputValue muda, a função de retorno de chamada dentro do bloco watch é executada.
A função de retorno de chamada recebe dois argumentos, newValue (novo valor) e oldValue (valor anterior). Podemos usá-los para realizar ações com base nas mudanças.
No exemplo, atualizamos a propriedade message com uma mensagem personalizada sempre que o valor de inputValue muda.
A função watch é útil para realizar ações específicas em resposta a mudanças de estado, especialmente quando essas ações envolvem lógica mais complexa do que o que pode ser alcançado com propriedades computadas.*/

/*Caça-níqueis
Em alguns casos, podemos querer passar um fragmento de modelo para um componente filho e deixar o componente filho renderizar o fragmento dentro de seu próprio modelo. O <slot>elemento é uma saída de slot que indica onde o conteúdo do slot fornecido pelos pais deve ser renderizado.*/

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Slot</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
</head>
<body>

<div id="app">
  <slot-machine>
    <img src="icon-cherry.png" alt="Cherry" slot="icon1">
    <img src="icon-lemon.png" alt="Lemon" slot="icon2">
    <img src="icon-seven.png" alt="Seven" slot="icon3">
  </slot-machine>
</div>

<script>
// Componente de caça-níqueis
Vue.component('slot-machine', {
  template: `
    <div>
      <h1>Caça-Níqueis</h1>
      <div>
        <slot name="icon1"></slot>
        <slot name="icon2"></slot>
        <slot name="icon3"></slot>
      </div>
      <button @click="spin">Girar</button>
    </div>
  `,
  methods: {
    spin() {
      // Lógica para girar os ícones
      alert('Girando os ícones!');
    }
  }
});

new Vue({
  el: '#app'
});
</script>

</body>
</html>

/*Neste exemplo:
Criamos o componente slot-machine que possui três slots nomeados (icon1, icon2, icon3) onde os ícones fornecidos pelo componente pai serão renderizados.
O componente pai fornece imagens para cada um dos slots usando as tags <img> com o atributo slot correspondente.
O botão "Girar" no componente slot-machine é apenas um exemplo de um possível botão de ação que poderia iniciar uma animação de giro nos ícones.
Essa abordagem permite uma maior flexibilidade ao criar componentes compostos, pois permite que o componente pai forneça conteúdo personalizado para slots específicos no componente filho.*/

/**Transição**/
/*Vue oferece dois componentes integrados que podem ajudar a trabalhar com transições e animações em resposta à mudança de estado:

<Transition>para aplicar animações quando um elemento ou componente entra e sai do DOM. Isso é abordado nesta página.
<TransitionGroup>para aplicar animações quando um elemento ou componente é inserido, removido ou movido dentro de uma v-forlista. Isso é abordado no próximo capítulo.*/
/*Entendi. Vamos criar um exemplo simples utilizando o componente `<transition>` para aplicar animações quando um elemento entra e sai do DOM.*/

html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Transition</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
  <style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
  </style>
</head>
<body>

<div id="app">
  <button @click="toggleElement">Toggle Element</button>
  <transition name="fade">
    <p v-if="showElement">Este é um elemento com transição.</p>
  </transition>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    showElement: false
  },
  methods: {
    toggleElement() {
      this.showElement = !this.showElement;
    }
  }
});
</script>

</body>
</html>

/*Neste exemplo:
1. Utilizamos o componente `<transition>` em torno do elemento `<p>` que queremos animar.
2. Definimos estilos CSS para controlar a animação. No exemplo, usamos uma transição de opacidade (`opacity`) para criar um efeito de fade in e fade out.
3. O botão "Toggle Element" alterna o estado da variável `showElement`, fazendo com que o parágrafo seja renderizado ou removido, acionando a animação definida na transição.
Essa é uma maneira simples de usar o componente `<transition>` para aplicar animações a elementos que entram e saem do DOM em resposta a mudanças de estado.*/


/*Grupo de Transição
<TransitionGroup>é um componente integrado projetado para animar a inserção, remoção e alteração de ordem de elementos ou componentes renderizados em uma lista.*/
/*Entendido. Vamos criar um exemplo simples utilizando o componente `<transition-group>` para animar a inserção e remoção de elementos em uma lista.*/

html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Transition Group</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
  <style>
    .list-enter-active, .list-leave-active {
      transition: opacity 0.5s, transform 0.5s;
    }
    .list-enter, .list-leave-to {
      opacity: 0;
      transform: translateY(30px);
    }
  </style>
</head>
<body>

<div id="app">
  <button @click="addItem">Adicionar Item</button>
  <transition-group name="list" tag="ul">
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </transition-group>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    items: ['Item 1', 'Item 2', 'Item 3']
  },
  methods: {
    addItem() {
      const newItem = `Novo Item ${this.items.length + 1}`;
      this.items.push(newItem);
    }
  }
});
</script>

</body>
</html>

/*Neste exemplo:
1. Utilizamos o componente `<transition-group>` em torno da lista (`<ul>`).
2. Definimos estilos CSS para controlar a animação. Neste exemplo, aplicamos uma transição de opacidade (`opacity`) e um efeito de deslizamento para cima (`transform: translateY`) para criar uma animação ao adicionar e remover itens da lista.
3. O botão "Adicionar Item" adiciona um novo item à lista, acionando a animação definida no `<transition-group>`.
Essa é uma maneira simples de usar o componente `<transition-group>` para animar a inserção e remoção de elementos em uma lista em resposta a mudanças de estado.*/


/*Componentes assíncronos
Em aplicativos grandes, talvez seja necessário dividir o aplicativo em partes menores e carregar um componente do servidor apenas quando necessário. Para tornar isso possível, o Vue possui uma defineAsyncComponentfunção.*/
/*, a função `defineAsyncComponent` no Vue.js é útil para carregar componentes de forma assíncrona, o que pode ser útil em aplicativos maiores para dividir o código em partes menores. Vamos criar um exemplo simples usando `defineAsyncComponent` para carregar um componente de forma assíncrona.*/

html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Async Component</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
</head>
<body>

<div id="app">
  <button @click="loadAsyncComponent">Carregar Componente Assíncrono</button>
  <async-component v-if="asyncComponent" />
</div>

<script>
// Definindo um componente assíncrono
const AsyncComponent = Vue.defineAsyncComponent(() =>
  import('./AsyncComponent.vue') // Substitua pelo caminho real do seu componente assíncrono
);

new Vue({
  el: '#app',
  data: {
    asyncComponent: null
  },
  methods: {
    loadAsyncComponent() {
      this.asyncComponent = AsyncComponent;
    }
  }
});
</script>

</body>
</html>


/*No exemplo acima:
1. Usamos `defineAsyncComponent` para criar um componente assíncrono. Dentro desta função, usamos `import` para carregar o componente de forma assíncrona.
2. O botão "Carregar Componente Assíncrono" aciona a função `loadAsyncComponent`, que define `asyncComponent` como o componente assíncrono criado.
3. O componente assíncrono é renderizado condicionalmente usando `v-if`.
Certifique-se de substituir `'./AsyncComponent.vue'` pelo caminho real do seu componente assíncrono. Este exemplo simplificado demonstra como carregar componentes de forma assíncrona no Vue.js.*/




/*Componentes de teletransporte*/
/*Às vezes podemos nos deparar com o seguinte cenário: uma parte do template de um componente pertence logicamente a ele, mas do ponto de vista visual, deveria ser exibida em algum outro lugar no DOM, fora da aplicação Vue. É aqui que <Teleport>entra o componente.*/

/*Sim, o componente `<Teleport>` no Vue.js é útil quando você precisa renderizar parte do conteúdo de um componente em um local diferente no DOM. Vamos criar um exemplo básico usando `<Teleport>`.*/

html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Teleport</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
</head>
<body>

<div id="app">
  <button @click="toggleModal">Abrir Modal</button>
  <teleport to="body">
    <modal v-if="showModal" />
  </teleport>
</div>

<script>
// Definindo o componente modal
const Modal = {
  template: `
    <div class="modal">
      <div class="modal-content">
        <p>Conteúdo do Modal</p>
        <button @click="$emit('close')">Fechar Modal</button>
      </div>
    </div>
  `
};

new Vue({
  el: '#app',
  components: {
    Modal,
    Teleport: Vue.Teleport
  },
  data: {
    showModal: false
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    }
  }
});
</script>

<style>
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #ccc;
    padding: 20px;
    background: white;
  }
</style>

</body>
</html>

/*No exemplo acima:
1. Utilizamos o componente `<teleport>` para renderizar o componente `modal` fora do escopo do componente pai.
2. O botão "Abrir Modal" aciona a função `toggleModal`, que alterna o estado da variável `showModal`.
3. O componente `modal` é renderizado dentro do `<teleport to="body">`, fazendo com que o conteúdo do modal seja movido para o elemento `<body>` do DOM.
4. O componente `modal` possui um botão para fechar o modal, que emite um evento para o componente pai.
Esse é um exemplo básico de como usar o componente `<Teleport>` para renderizar conteúdo em um local diferente no DOM.*/


/*Fornecer / Injetar*/
/*Normalmente, quando precisamos passar dados do componente pai para um componente filho, usamos props. No entanto, imagine o caso em que temos uma grande árvore de componentes e um componente profundamente aninhado precisa de algo de um componente ancestral distante. Com apenas adereços, teríamos que passar o mesmo adereço por toda a cadeia pai. Podemos resolver a perfuração de adereços com providee inject.`provide` e `inject` são opções úteis quando você precisa passar dados para componentes descendentes sem passar explicitamente através de cada componente intermediário usando props.
Aqui está um exemplo básico demonstrando como usar `provide` e `inject`:*/

html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Provide/Inject</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
</head>
<body>

<div id="app">
  <ancestor-component>
    <intermediate-component>
      <descendant-component />
    </intermediate-component>
  </ancestor-component>
</div>

<script>
// Componente ancestral fornece dados
const AncestorComponent = {
  provide() {
    return {
      message: 'Dados do componente ancestral'
    };
  },
  template: `
    <div>
      <slot></slot>
    </div>
  `
};

// Componente intermediário
const IntermediateComponent = {
  template: `
    <div>
      <slot></slot>
    </div>
  `
};

// Componente descendente injeta dados
const DescendantComponent = {
  inject: ['message'],
  template: `
    <div>
      <p>{{ message }}</p>
    </div>
  `
};

new Vue({
  el: '#app',
  components: {
    AncestorComponent,
    IntermediateComponent,
    DescendantComponent
  }
});
</script>

</body>
</html>


/*Neste exemplo:
1. `AncestorComponent` fornece dados usando a opção `provide`.
2. `IntermediateComponent` não fornece nem injeta dados. Ele apenas repassa os dados através do slot.
3. `DescendantComponent` injeta dados usando a opção `inject`.
Dessa forma, o `DescendantComponent` tem acesso aos dados fornecidos pelo `AncestorComponent` sem a necessidade de passar explicitamente através do `IntermediateComponent`. Isso pode ser útil em cenários em que a árvore de componentes é extensa e passar props seria impraticável.*/

/*Referência
ref()e reactive()são usados ​​para rastrear alterações em seu argumento. Ao usá-los para inicializar variáveis, você fornece informações ao Vue: “Ei, quero que você reconstrua ou reavalie tudo que depende dessas variáveis ​​toda vez que elas mudarem”.*/

Sim, `ref()` e `reactive()` são funções no Vue.js que ajudam a rastrear e reagir a alterações em dados. Vamos criar um exemplo básico usando `ref()` e `reactive()`.

html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Ref and Reactive</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
</head>
<body>

<div id="app">
  <p>Nome: {{ userData.name }}</p>
  <input v-model="userData.name" placeholder="Digite seu nome">
  <p>Contador: {{ counter }}</p>
  <button @click="incrementCounter">Incrementar</button>
</div>

<script>
const { ref, reactive } = Vue;

// Utilizando ref para variável reativa simples
const counter = ref(0);

// Utilizando reactive para objeto reativo
const userData = reactive({
  name: 'John Doe'
});

new Vue({
  el: '#app',
  setup() {
    // Expondo as variáveis para o template
    return { counter, userData };
  },
  methods: {
    incrementCounter() {
      // Alterando o valor da variável reativa
      counter.value++;
    }
  }
});
</script>

</body>
</html>


/*Neste exemplo:
1. Usamos `ref()` para criar uma variável reativa chamada `counter` e `reactive()` para criar um objeto reativo chamado `userData`.
2. No template, exibimos e vinculamos um input ao nome dentro do objeto `userData`. Isso significa que qualquer alteração no input refletirá automaticamente em `userData.name`.
3. Também exibimos e incrementamos o `counter`, que é uma variável reativa.
4. Ao clicar no botão "Incrementar", a função `incrementCounter` é chamada, alterando o valor da variável reativa `counter`, e a alteração é automaticamente refletida no template.
Esses recursos são úteis para criar lógica reativa em seus componentes Vue.*/


/*toRefs*/
/*Na verdade, existe uma pequena confusão em sua afirmação. toRefs não converte um objeto reativo em um objeto simples, mas sim cria uma versão desestruturada do objeto reativo, mantendo a reatividade. Vamos criar um exemplo para ilustrar como toRefs funciona:*/

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue toRefs</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
</head>
<body>

<div id="app">
  <p>Nome: {{ userData.name }}</p>
  <input v-model="userData.name" placeholder="Digite seu nome">
  <p>Contador: {{ counter }}</p>
  <button @click="incrementCounter">Incrementar</button>
</div>

<script>
const { ref, reactive, toRefs } = Vue;

// Utilizando ref para variável reativa simples
const counter = ref(0);

// Utilizando reactive para objeto reativo
const userData = reactive({
  name: 'John Doe'
});

// Utilizando toRefs para criar uma versão desestruturada mantendo a reatividade
const { name } = toRefs(userData);

new Vue({
  el: '#app',
  setup() {
    // Expondo as variáveis desestruturadas para o template
    return { counter, userData, name };
  },
  methods: {
    incrementCounter() {
      // Alterando o valor da variável reativa
      counter.value++;
    }
  }
});
</script>

</body>
</html>

/*Neste exemplo:
1. Utilizamos `toRefs` para criar uma versão desestruturada mantendo a reatividade do objeto `userData`. A referência `name` é criada usando `toRef(userData, 'name')`.
2. No template, exibimos e vinculamos um input ao `name`, que é uma referência a `userData.name`. Isso significa que qualquer alteração no input refletirá automaticamente em `userData.name`.
3. Também exibimos e incrementamos o `counter`, que é uma variável reativa.
Essa é uma forma útil de desestruturar um objeto reativo mantendo a reatividade das propriedades individuais.*/

/*reativo
reactivenos permite criar estruturas de dados reativas. Objetos reativos são proxies JavaScript e se comportam como objetos normais. A diferença é que o Vue é capaz de rastrear o acesso à propriedade e as mutações de um objeto reativo.
Sim, exatamente. O Vue.js utiliza objetos reativos para rastrear alterações em dados e automaticamente atualizar a interface do usuário quando esses dados mudam. Vamos criar um exemplo básico usando reactive() para ilustrar como funciona:*/

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Reactive</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
</head>
<body>

<div id="app">
  <p>Nome: {{ userData.name }}</p>
  <input v-model="userData.name" placeholder="Digite seu nome">
  <p>Contador: {{ counter }}</p>
  <button @click="incrementCounter">Incrementar</button>
</div>

<script>
const { reactive, ref } = Vue;

// Utilizando reactive para criar um objeto reativo
const userData = reactive({
  name: 'John Doe'
});

// Utilizando ref para criar uma variável reativa simples
const counter = ref(0);

new Vue({
  el: '#app',
  setup() {
    // Expondo os dados reativos para o template
    return { userData, counter };
  },
  methods: {
    incrementCounter() {
      // Alterando o valor da variável reativa
      counter.value++;
    }
  }
});
</script>

</body>
</html>

/*Sim, exatamente. O Vue.js utiliza objetos reativos para rastrear alterações em dados e automaticamente atualizar a interface do usuário quando esses dados mudam. Vamos criar um exemplo básico usando `reactive()` para ilustrar como funciona:*/

html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Reactive</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
</head>
<body>

<div id="app">
  <p>Nome: {{ userData.name }}</p>
  <input v-model="userData.name" placeholder="Digite seu nome">
  <p>Contador: {{ counter }}</p>
  <button @click="incrementCounter">Incrementar</button>
</div>

<script>
const { reactive, ref } = Vue;

// Utilizando reactive para criar um objeto reativo
const userData = reactive({
  name: 'John Doe'
});

// Utilizando ref para criar uma variável reativa simples
const counter = ref(0);

new Vue({
  el: '#app',
  setup() {
    // Expondo os dados reativos para o template
    return { userData, counter };
  },
  methods: {
    incrementCounter() {
      // Alterando o valor da variável reativa
      counter.value++;
    }
  }
});
</script>

</body>
</html>

/*Neste exemplo:

1. Usamos `reactive()` para criar um objeto reativo chamado `userData`. O Vue automaticamente rastreia as alterações nesta estrutura de dados.
2. Usamos `ref()` para criar uma variável reativa simples chamada `counter`.
3. No template, exibimos e vinculamos um input ao `userData.name`. Isso significa que qualquer alteração no input refletirá automaticamente em `userData.name`.
4. Também exibimos e incrementamos o `counter`, que é uma variável reativa.
Essa abordagem reativa é fundamental para o Vue.js, pois permite que a biblioteca rastreie automaticamente as dependências e atualize a interface do usuário quando os dados mudam.*/


/*computado
computedpega uma função getter e retorna um refobjeto reativo somente leitura para o valor retornado do getter. Ele também pode usar um objeto com funções gete setpara criar um objeto ref gravável.
Sim, você está correto. No Vue.js, a propriedade `computed` é usada para criar dados derivados que são dependentes de outros dados reativos. Vamos criar um exemplo para ilustrar como `computed` funciona:*/

html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Computed</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
</head>
<body>

<div id="app">
  <p>Nome: {{ userData.name }}</p>
  <p>Idade: {{ userData.age }}</p>
  <p>Ano de Nascimento: {{ birthYear }}</p>
  <input v-model="userData.age" placeholder="Digite sua idade">
</div>

<script>
const { reactive, computed } = Vue;

// Utilizando reactive para criar um objeto reativo
const userData = reactive({
  name: 'John Doe',
  age: 25
});

// Utilizando computed para calcular o ano de nascimento
const birthYear = computed(() => new Date().getFullYear() - userData.age);

new Vue({
  el: '#app',
  setup() {
    // Expondo os dados reativos e computed para o template
    return { userData, birthYear };
  }
});
</script>

</body>
</html>

/*Neste exemplo:
1. Usamos `reactive()` para criar um objeto reativo chamado `userData`, contendo propriedades como `name` e `age`.
2. Usamos `computed()` para criar uma propriedade computada chamada `birthYear`. Esta propriedade é derivada do valor de `userData.age` e é automaticamente atualizada sempre que `userData.age` muda.
3. No template, exibimos o nome, a idade e o ano de nascimento. O ano de nascimento é calculado automaticamente através da propriedade computada `birthYear`.
A propriedade `computed` é útil para derivar valores com base em dados reativos, mantendo a reatividade e atualizando automaticamente quando os dados subjacentes são alterados.*/

/*wATCH**/
/*Sim, você está correto. A opção `watch` no Vue.js é usada para observar mudanças em propriedades reativas e realizar ações específicas quando essas mudanças ocorrem. Aqui está um exemplo básico para ilustrar como `watch` funciona:*/

html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Watch</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
</head>
<body>

<div id="app">
  <p>Contador: {{ counter }}</p>
  <button @click="incrementCounter">Incrementar</button>
</div>

<script>
const { reactive, watch } = Vue;

// Utilizando reactive para criar um objeto reativo
const userData = reactive({
  name: 'John Doe'
});

new Vue({
  el: '#app',
  data() {
    return {
      counter: 0
    };
  },
  watch: {
    counter(newValue, oldValue) {
      console.log(`Contador mudou de ${oldValue} para ${newValue}`);
    }
  },
  methods: {
    incrementCounter() {
      // Alterando o valor da variável reativa
      this.counter++;
    }
  }
});
</script>

</body>
</html>

/*Neste exemplo:

1. Usamos `reactive()` para criar um objeto reativo chamado `userData`.
2. Utilizamos `watch` para observar mudanças na propriedade `counter`. A função de retorno de chamada dentro de `watch` será chamada sempre que `counter` mudar.
3. Exibimos o valor de `counter` no template e incrementamos `counter` ao clicar no botão "Incrementar".
4. No console do navegador, você verá mensagens sempre que o valor de `counter` mudar.
Essa é uma maneira de reagir a alterações em propriedades reativas usando `watch` no Vue.js.*/

/*NextTick
Sim, você está correto. O `nextTick` é uma função de utilidade no Vue.js que permite agendar uma ação para ser executada na próxima atualização do DOM. Isso é útil quando você precisa garantir que as alterações feitas em seu componente tenham sido refletidas no DOM antes de executar outra lógica.
Vamos criar um exemplo simples para ilustrar como `nextTick` funciona:*/

html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue NextTick</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
</head>
<body>

<div id="app">
  <p>{{ message }}</p>
  <button @click="changeMessage">Alterar Mensagem</button>
</div>

<script>
const { ref, nextTick } = Vue;

new Vue({
  el: '#app',
  setup() {
    const message = ref('Mensagem Inicial');

    const changeMessage = () => {
      message.value = 'Nova Mensagem';

      // Usando nextTick para agendar uma ação após a próxima atualização do DOM
      nextTick(() => {
        console.log('DOM Atualizado!');
        // Lógica a ser executada após a próxima atualização do DOM
      });
    };

    return { message, changeMessage };
  }
});
</script>

</body>
</html>

/*Neste exemplo:
1. Usamos `ref` para criar uma variável reativa chamada `message`.
2. Ao clicar no botão "Alterar Mensagem", chamamos a função `changeMessage` que altera o valor de `message` e, em seguida, usa `nextTick` para agendar uma ação que será executada após a próxima atualização do DOM.
3. No console do navegador, você verá a mensagem "DOM Atualizado!" após a alteração da mensagem.
Essa é uma maneira útil de lidar com operações após a próxima atualização do DOM no Vue.js.*/


/*Composables*/
/*No Vue.js, um "combinável" é uma função que utiliza a API de composição para encapsular e reutilizar lógica com estado em seus componentes. Isso é particularmente útil para abstrair lógicas comuns e manter a modularidade e reusabilidade do código.
Vamos criar um exemplo básico para ilustrar como um combinável pode ser usado:*/

// Definindo um combinável para formatação de data
const useDateFormatter = () => {
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return { formatDate };
};

// Componente utilizando o combinável
Vue.createApp({
  data() {
    return {
      currentDate: new Date()
    };
  },
  setup() {
    const { formatDate } = useDateFormatter();

    return { formatDate };
  },
  template: `
    <div>
      <p>Data Atual: {{ formatDate(currentDate) }}</p>
    </div>
  `
}).mount('#app');

/*Neste exemplo:
Criamos um combinável chamado useDateFormatter que encapsula a lógica de formatação de data.
No componente Vue, usamos setup() para acessar a função formatDate do combinável.
No template, exibimos a data formatada usando a função formatDate.
Isso ilustra como um combinável pode ser usado para encapsular lógicas específicas, proporcionando uma abstração limpa e reutilizável para tarefas comuns em vários componentes.*/

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






