#1BASICO
#-- O que é o sistema de design
/*Um sistema de design é a única fonte de verdade que agrupa todos os elementos que permitirão às equipes projetar, realizar e desenvolver 
um produto.*/

#--Necessidade de sistema de projeto
/*Ter um sistema de design sólido acelera seu trabalho, tornando a equipe de produto mais eficiente, e cria consistência e harmonia dentro do ecossistema de produtos e marcas. 
Um sistema de design forte tira o fardo de designers individuais para pensar em problemas de design comumente recorrentes. 
Com uma biblioteca completa de elementos pré-aprovados, os designers podem se concentrar em problemas maiores, como criar fluxos intuitivos 
e perfeitos que encantam os usuários. Esse tipo de eficiência paga enormes dividendos ao longo do tempo./*

#--Design System vs Biblioteca de Componentes
/*Uma biblioteca de componentes é apenas uma coleção de elementos visuais, ou seja, cores, estilos de botões, fontes, etc. Um 
Sistema de Design o leva ao próximo nível, incluindo padrões e documentação sobre a aparência e o uso de cada componente. 
O Sistema de Design atua como a única fonte da verdade.*/

#--Design Atômico
/*O design atômico (por Brad Frost) é um modelo mental para ajudá-lo a pensar nas interfaces do usuário como um todo coeso e uma coleção de 
peças ao mesmo tempo. Através da comparação com átomos, moléculas e organismos, podemos pensar no design de nossa interface do usuário como 
uma composição de módulos auto-contendo juntos.*/

#--Públicos de relacionamento
/*Construir um sistema de design eficaz não é uma responsabilidade individual, você precisa de mais do que apenas designers. Aqui está uma lista rápida das disciplinas que podem ser representadas em sua equipe para criar um sistema de design eficaz:

Designers: para definir os elementos visuais do sistema
Desenvolvedores Frontend: Para criar código modular eficiente
Especialistas em acessibilidade: Especialistas em acessibilidade para garantir que seu sistema esteja em conformidade com padrões como WCAG
Especialistas em desempenho: quem pode garantir que seu sistema seja carregado rapidamente em todos os dispositivos
Estrategistas de conteúdo: quem pode ajudar a equipe a acertar a voz e o tom do sistema
Pesquisadores: quem pode ajudá-lo a entender as necessidades dos clientes
Gerentes de Produto: para garantir que o sistema esteja alinhado às necessidades do cliente
Líderes: (VPs e diretores) para defender e alinhar a visão em toda a empresa, incluindo até a liderança executiva/*

#2TERMINOLOGIA
#--Componente
/*Os componentes são os blocos de construção reutilizáveis de um sistema de projeto. Cada componente atende a uma interação específica ou às necessidades 
da interface do usuário e é criado especificamente para trabalhar em conjunto para criar padrões e experiências de usuário intuitivas.*/

#--Biblioteca de componentes
/*Uma biblioteca de componentes é uma coleção de todos os componentes usados em um site, software ou aplicativo. Algumas das 
ferramentas comuns para mostrar e procurar componentes em uma biblioteca de componentes são fornecidas abaixo:

Visite os seguintes recursos para saber mais:

Laboratório de Padrões
Fractal
Storybook
*/

#--Linguagem de design
Uma linguagem de design ou vocabulário de design é um esquema ou estilo abrangente que orienta o design de um complemento de produtos ou configurações arquitetônicas, criando um sistema de design coerente para o estilo.

#--Governaça
/*Governança é uma estrutura para esclarecer papéis, responsabilidades e autoridade sobre as decisões. Ter essa clareza garante que as decisões para o sistema de design se canalizem suavemente através do processo de governança*/

#--Diretrizes
/*Diretrizes de design são conjuntos de recomendações sobre como aplicar princípios de design para fornecer uma experiência positiva ao usuário. Os designers usam essas diretrizes para julgar como adotar princípios como intuição, capacidade de aprendizado, eficiência e consistência, para que possam criar designs atraentes e atender e exceder as necessidades do usuário.*/

#--Padrão
/*Os padrões são soluções de design de melhores práticas para tarefas específicas focadas no usuário e tipos de página. Os padrões geralmente usam um ou mais componentes e explicam como adaptá-los ao contexto. Alguns padrões de amostra podem ser o login do usuário no aplicativo ou a execução da operação de checkout.*/

#--Piloto
/*Os pilotos são uma das melhores maneiras de colocar seu sistema de design em seus ritmos, especialmente antes que o sistema de design chegue a um v1. Como pilotos de televisão ajudam a testar as reações do público a um conceito de série sem investir recursos significativos para criar a coisa toda, os pilotos de aplicativos são uma boa base para garantir que o design e o código do seu sistema de design sejam testados em batalha.*/

#--Símbolo
/*Os tokens do sistema de design são os valores de estilo dos elementos da UI, como cor, tipografia, espaçamento, sombras, etc., que são usados em todos os produtos e capazes de serem convertidos em um formato para qualquer plataforma (web, móvel, desktop). Tokens são blocos de construção do sistema de design—pense neles como subátomos, as menores peças de valores de estilo que permitem aos designers criar estilos para um produto.*/

#--Kit de Interface do Usuário
/*No que se refere a um sistema de design, um UI Kit é uma representação de componentes codificados criados de uma maneira que os designers que conhecem o código podem criar maquetes de interface. Exemplos de kits de UI são bibliotecas do Sketch e Sistemas de design Figma.*/

#3 ANÁLISE DE PROJETO EXISTENTE
O primeiro passo na criação de um sistema de design a partir de um design existente é realizar uma análise de design e entender 
com o que você trabalhará para identificar os requisitos e preparar um plano. A realização da análise pode consistir em:

- Compreendendo o processo de design existente
- Realizando Auditoria Visual
- Identificando Elementos de Design
- Identifique componentes comuns
- Compreendendo as necessidades de testes e experimentações A/B
- Compreender quaisquer requisitos locais ou regionais (como LTR/RTL).
- Documentando sua descoberta


#--Existing Design Process
Para entender melhor o tipo de sistema de design que você gostaria de implementar, você precisa começar revisando e analisando a abordagem atual de design em sua empresa. Encontre as respostas para as seguintes perguntas:
Qual é o processo de design que sua empresa segue?
Quais são as ferramentas existentes que sua empresa utiliza?
A It“s também recomendou avaliar o nível de maturidade de projeto das equipes de produtos. Esse conhecimento ajudará você a estimar o tempo necessário para introduzir o sistema à sua organização.

#--Visual Audit
Faça capturas de tela do seu produto atual com a ajuda de sua equipe. Você pode usar qualquer software de apresentação como o Google Slides ou imprimi-los e fixá-los em placas de espuma. Agrupe as capturas de tela em categorias como botões, navegação, formulários, tabelas, gráficos, listas etc.
Agora, revise cada categoria para encontrar inconsistências e observe áreas para melhoria com sua equipe. Use uma ferramenta como Estatísticas CSS para ver quantas cores exclusivas, tipos de letra você tem em suas folhas de estilo.

#--A/B Tests and Experiments
Entenda como a equipe implementa testes A/B e experimentos em diferentes telas e se o novo sistema de design deve acomodar quaisquer requisitos necessários.

#--Regional requirments
Entenda quaisquer requisitos regionais, como LTR ou quaisquer outras variações de UX que seu sistema de design deve acomodar.

#--Documentation
Organize e documente os resultados da auditoria visual, elementos de design, componentes com variações, estados, padrões encontrados, qualquer documentação existente, processo de design atual e considerações. Esta documentação será compartilhada em toda a equipe e atuará como um guia ao construir o novo sistema de design.

#--Identify Design Elements
Use os resultados da auditoria visual e prepare uma lista abrangente de elementos de design, como Cores, Tipografia, Tamanhos, Espaços, Grade, Layouts etc. Esses elementos serão os blocos de construção de seus componentes.

#--Identify Components
Os componentes do aplicativo são criados usando uma composição de elementos de design reunidos na etapa anterior. Identifique a lista de componentes necessários para o aplicativo, que podem incluir botões, dropdowns, carrosséis, guias, ícones, alertas, brindes etc. Além disso, certifique-se de acompanhar os diferentes estados desses componentes, bem como diferentes variantes e ações.

#Linguagem de design
Como qualquer linguagem, uma linguagem de design é uma forma metódica de comunicação com seu público por meio de sua abordagem 
ao design de produto. É a base de experiências consistentes do cliente.

#4 CRIANDO UM SISTEMA DE DESIGN
Como qualquer linguagem, uma linguagem de design é uma maneira metódica de se comunicar com seu público através de sua abordagem ao design de produto. Itilits a pedra angular de experiências consistentes do cliente.

  #-Guidelines
  Fornecer orientação sobre como abordar padrões comuns de UX permitirá que sua organização estabeleça uma abordagem consistente e uma experiência de usuário consistente em qualquer plataforma.

    #--Accessibility
    Diretrizes sobre como você aborda a acessibilidade e como aproveita as cores, a hierarquia e as tecnologias assistivas para ajudar seus usuários.
    
    #--User Onboarding
    Como você integra seus usuários ao seu produto ou a um novo recurso e oferece a eles uma ótima experiência desde o início.
    
    #--Microcopy Guidelines
    A maneira padrão de escrever para os componentes em seu sistema de design. Estes levam em consideração as convenções da plataforma e as melhores práticas para escrever tudo.

    
  #-Logo
  A maioria dos clientes forma uma opinião sobre um produto em segundos. Na maioria dos casos, seu logotipo será o primeiro ativo da marca que alguém vê. Tudo sobre fazer a primeira impressão certa. Um logotipo distinto ajuda os usuários a reconhecer um produto imediatamente e dá-lhes a essência de sua marca.

    #--MonoChrome Version
    Uma versão monocromática do seu logotipo que fica bem em cima da fotografia ou quando é impressa com uma impressora de baixa qualidade.

    #--Small Use Guidance
    Seu logotipo deve ter um bom desempenho e ser reconhecível em todos os tamanhos. Dicas para usar seu logotipo nesses casos minimizarão o risco de uso indevido.

    #--Placement & Clearance Guidance
    Seu logotipo deve vir com orientação clara sobre como colocá-lo e como preservar seu espaço, uma vez que vive junto com outros conteúdos.

    #--Usage Guidance
    Estes são os crimes de logotipo, fornecendo exemplos contextuais do que (não) fazer com seu logotipo.

    #--Different FIle Formats
    Fornecer uma variedade de formatos para a versão vetorial do seu logotipo facilitará o trabalho de outras pessoas e impedirá que alguém o redesenha.


  #-Brand
  A marca conduz todas as decisões que você toma ao criar novos produtos ou recursos. Uma boa marca é muito mais que um nome e um logotipo. São os valores que definem sua identidade única e o que faz você se destacar dos outros.
    #--Vision
    Identifique por que você existe, quais são seus valores e como eles ajudam a orientar o futuro do seu produto.

    #--Design Principles
    As considerações que orientam a base da sua prática. Eles descrevem como você aborda o design de uma perspectiva filosófica e ajuda nas decisões cotidianas.

    #--Terminology
    Crie os termos e frases padrão que precisam ser mantidos da mesma maneira durante toda a experiência do usuário, acelerando o processo de design e unificando sua voz.

    #--Tone of Voice
    Um tom claro de voz define como você fala com seu público a cada momento da jornada, ajudando-o a chegar aonde quiser.

    #--Writing GUidelines
    Toda experiência consistente precisa de escrita estanque. Estabelecer as bases para o seu estilo de casa cedo mantém tudo alinhado com a gramática consistente, escolhas de estilo e linguagem orientada para a ação para ajudar seu design.

#5 Defining Deisgn Tokens

#-Color

#-Layout 

#-Iconography

#-Typography

#6 Creating Core Components
Os componentes são os principais blocos de construção para interfaces de usuário. A criação de uma biblioteca de componentes reutilizáveis melhora o fluxo de trabalho de desenvolvimento de produtos, reduzindo a dívida de design e tecnologia e acelerando o processo. Os componentes principais podem ser divididos em pedaços granulares sem perder o significado.

    #--Avatar
    Os avatares são usados para mostrar uma miniatura de uma foto de usuário ou uma representação visual de qualquer outro tipo de conteúdo.
    
    Imagem: Os avatares devem mascarar uma imagem em sua forma e trabalhar com qualquer tamanho de imagem, pois podem obter essa imagem de fontes de dados desconhecidas.
    Imagem Fallback: Deve haver fallbacks quando não houver nenhuma imagem disponível. Isso pode ser feito com imagens ou iniciais de espaço reservado.
    Acessibilidade: Sempre forneça uma descrição para leitores de tela descrevendo whatilits exibidos na imagem do avatar em vez de apenas nomear seu papel.
    Tamanhos: Existem muitos contextos para usar avatares e todos eles exigem tamanhos diferentes para o componente. Para projetos médios, use pelo menos 2-3 tamanhos diferentes e certifique-se de que haja pelo menos um tamanho pequeno disponível.
    Ícone: Os avatares podem ser usados com um ícone em vez de uma imagem para enfatizar áreas que necessariamente têm (ou precisam) de uma imagem associada a ela.
    Cores de Fundo: Quando usado com ícones ou texto, deve haver uma cor de fundo dos tokens de cores do sistema de design aplicados à forma do avatar. Certifique-se de que os ícones e o texto tenham uma relação de contraste suficiente com o fundo de acordo com o padrão WCAG AA.
    
    #--Banner
    Banners exibem uma mensagem acionável usada como uma maneira proeminente de se comunicar com seus usuários.
    
    Aparência: Banners são usados para exibir diferentes tipos de mensagens e itilits importantes para diferenciar sua aparência visual com base no papel que eles jogam. Se você estiver usando cores de fundo para diferenciação de função, certifique-se de que haja uma relação de contraste suficiente com o conteúdo de acordo com o padrão WCAG AA.
    Área para ícones ou imagens: Os banners podem complementar sua mensagem usando um ícone ou imagem de suporte. Eles devem ser usados em vez de conteúdo de texto.
    Ações: As ações em banners devem estar relacionadas ao seu texto e fornecer uma maneira de reagir à mensagem enviada ao usuário.
    Ação Desmissível: Donilit sobrecarregar o usuário com banners na página e incluir uma ação descartável. Isso pode ser um botão de fechamento separado ou uma das ações fornecidas.
    Acessibilidade: Se um banner aparecer dinamicamente na página, ele deve ser anunciado ao usuário por sua tecnologia de assistência.
    Responsividade: Os banners devem se adaptar ao tamanho da janela de visualização. Isso geralmente significa que eles se tornam de largura total para o celular para economizar algum espaço.
    
    #--Badge
    Crachás são elementos que representam o status de um objeto ou valor de entrada do usuário.
    
    Aparência: Os crachás podem desempenhar várias funções no seu produto e ter uma cor predefinida para cada função deve ajudar os usuários a entender seu significado. Ao alterar cores, verifique se o texto possui uma taxa de contraste suficiente com o plano de fundo, de acordo com o padrão WCAG AA.
    Ação negligenciável: Os crachás podem ser usados como uma maneira dinâmica de exibir valores selecionados e deve haver uma maneira de descartá-los.
    
    #--Button
    Os botões são elementos interativos usados para ações de etapa única.
    
    Estado de Hover: Mostre claramente que o botão é interativo quando fica pairado com um cursor do mouse.
    Estado Ativo: Usado quando um botão é pressionado. O mesmo estado pode ser usado para representar o botão responsável por alternar outro elemento na página enquanto esse elemento está visivelmente aberto.
    Estado Focado: Usado quando um botão é selecionado através da navegação do teclado.
    Suporte de Ícone: Os ícones comunicam facilmente o propósito do botão quando usado ao lado de seu rótulo ou podem ser usados sem texto quando não houver espaço suficiente. Certifique-se de que o rótulo de acessibilidade é fornecido quando usado apenas com um ícone.
    Desabilitado: Visualmente mostra que um botão não é interativo e o impede de ser pressionado.
    Carregando: Usado quando os usuários têm que esperar pelo resultado de sua ação depois de pressionar um botão. Se um spinner for usado para exibir esse estado, certifique-se de que ele não altere a largura ou a altura do botão original.
    Largura Completa: Por padrão, os botões tomam a largura de seu conteúdo, mas também devem vir com uma variante de largura total que funcione bem em dispositivos móveis.
    Variantes: Ao usar vários botões, deve haver uma maneira de diferenciar entre ações primárias e secundárias. Os botões podem desempenhar papéis diferentes para o usuário ou ser usados em diferentes tipos de superfícies e eles precisam mudar a aparência.
    Tamanhos: Os botões podem ser usados em diferentes áreas do site e podem ter vários tamanhos predefinidos. No celular, as áreas que podem ser tocadas devem ter no mínimo 48px para serem acessíveis de acordo com as diretrizes de acessibilidade do iOS e do Android.
    
    #--Card
    Os cartões são usados para agrupar informações sobre assuntos e suas ações relacionadas.
    
    Suporta qualquer tipo de conteúdo: Os cartões são um dos componentes mais usados no produto, por isso precisam ser flexíveis o suficiente para suportar quaisquer outros componentes colocados neles.
    Estrutura da informação: Não importa quão flexíveis sejam os cartões, é importante que os cartões tenham uma estrutura específica para seus elementos para a consistência do produto.
    Suporta seções de mídia: Um dos cenários mais populares para usar cartões é misturá-los com conteúdo de mídia. As opções mais populares são ter uma área de largura total em cima do conteúdo ou área de altura total em um dos lados do cardilitis.
    Ações complementares: Os cartões podem ser usados com ações geralmente colocadas na parte inferior do cartão, ou o próprio cartão pode ser tocado e representar uma ação.
    Responsividade: Em móveis viewports cartões são geralmente de largura total, a fim de economizar espaço para o conteúdo.
    
    #--Carousel
    Os carrosséis empilham o mesmo tipo de itens e permitem percorrê-los horizontalmente.
    
    Controles de Navegação: Os carrosséis devem ter controles de navegação fáceis de encontrar para percorrer o conteúdo.
    Suporta qualquer conteúdo: Os carrosséis podem ser usados em diferentes contextos e devem ser limitados a um componente filho específico. Em alguns cenários, você pode querer que os itens dentro do mesmo carrossel sejam diferentes uns dos outros.
    Personalização da largura dos itens: Para produtos simples, pode ser bom usar vários tamanhos predefinidos para itens de carrossel. Para maior flexibilidade, é bom fornecer uma maneira de definir uma largura personalizada.
    Suporte para eventos de toque: Os carrosséis devem ser roláveis em dispositivos de toque. Algumas das melhores práticas são usar a rolagem nativa e garantir que você suporte o mesmo comportamento para todos os dispositivos de toque, não apenas telefones celulares.
    Navegação do teclado: Deve ser possível percorrer o conteúdo com as setas do teclado quando focado nos controles de navegação.
    Responsividade: É uma boa prática ocultar ou reduzir o tamanho dos controles de navegação para viewports móveis para melhorar a visibilidade do conteúdo.
    
    #--Dropdown
    Os menus suspensos são usados para exibir uma subvisão contextual com uma lista de ações ou conteúdo relacionado à área onde o menu suspenso está.
    
    Suporta qualquer tipo de conteúdo: Os dropdowns podem ser usados em muitos contextos, como selecionadores de data, seleção de idioma ou outros recursos do produto.
    Menu de Ação: Um dos cenários mais utilizados para dropdowns é fornecer um menu de ação para o usuário, por isso é útil ter esse layout definido.
    Foco Trapping: Uma vez que o menu suspenso seja aberto, o foco deve funcionar apenas para elementos dentro do menu suspenso. Quando it“s fechado, o foco deve mover-se para o gatilho suspenso.
    Fechar Ação: Ou algumas ações dentro do menu suspenso devem fechá-lo ou deve haver um botão de fechamento separado. Além disso, é uma boa prática fechar o menu suspenso quando um usuário clica fora.
    Navegação do Teclado: Deve ser possível navegar pelos elementos filhos suspensos com o teclado e fechá-lo com uma tecla Esc.
    Posição Dinâmica: O conteúdo suspenso deve ser exibido com base na posição atual do elemento gatilho na tela e sempre visível para o usuário.
    Responsividade: O conteúdo suspenso deve ser adaptado para pontos de vista móveis, pois pode levar muito espaço em desktops.
    
    #--Icon
    O componente de ícone é uma maneira de alinhar a maneira como os ativos estáticos de iconografia são exibidos no produto.
    
    Tamanhos: Os ícones devem ter vários tamanhos predefinidos para fornecer uma experiência holística em todo o produto. Os emparelhamentos de tipografia podem ser usados para esses valores de tamanho para garantir que eles estejam alinhados com os tamanhos de texto.
    Cores: Os ícones devem usar valores da paleta de cores do sistema de design. Usar a cor de texto do elemento pai para a cor de preenchimento de ícones pode tornar isso automático.
    
    #--Input Checkbox
    
    Uma caixa de seleção de entrada é um elemento de formulário usado para selecionar uma ou várias opções.
    
    Estado Verificado: Usado quando a caixa de seleção está selecionada e usará seu valor para o envio do formulário.
    Estado Deficiente: Impede interações de caixa de seleção e remove seu valor do envio do formulário.
    Estado Intermediário: Usado quando a caixa de seleção tem elementos selecionáveis filhos e apenas alguns deles estão selecionados.
    Etiqueta: Deve haver um rótulo de texto vinculado ao campo de caixa de seleção. Clicar no rótulo também deve acionar a seleção da caixa de seleção.
    Estado de Erro: O estado de erro é usado para erros de validação de formulário quando o erro está relacionado apenas ao campo de caixa de seleção. Sempre use um erro de texto junto com a alteração da cor do campo.
    Estado do Teclado: As seleções da caixa de seleção devem ser acionadas com a tecla Espaço. Usar elementos nativos para isso deve fornecer esse tipo de interação fora da caixa.
    Grupo Caixa de seleção: As caixas de seleção podem ser agrupadas para trabalhar com vários valores ao mesmo tempo.


    #--Input Radio
    Um rádio de entrada é um elemento de formulário usado para selecionar uma opção de uma lista.

    Estado Verificado: Usado quando o rádio é selecionado e usará seu valor para o envio do formulário. Uma entrada de rádio pode ser desmarcada pressionando-a novamente.
    Estado Deficiente: Impede interações de rádio e remove seu valor do envio do formulário.
    Etiqueta: Deve haver um rótulo de texto ligado com o campo de rádio. Clicar no rótulo também deve acionar a seleção de rádio.
    Estado de Erro: O estado de erro é usado para erros de validação de formulário quando o erro está relacionado apenas ao campo de rádio. Sempre use um erro de texto junto com a alteração da cor do campo.
    Estado do Teclado: Uma seleção de rádio deve ser acionada quando a tecla Espaço é pressionada. Usar elementos nativos para isso deve fornecer esse tipo de interação fora da caixa.
    Grupo de Rádio: Entradas de rádio devem sempre ser usadas em um grupo. Se um deles estiver selecionado, ele pode ser desmarcado apenas escolhendo outro rádio.


    #--Input Text
    O texto de entrada permite que os usuários insiram e editem texto.

    Estado Deficiente: Impede interações de entrada e remove seu valor do envio do formulário.
    Espaço reservado: Quando não houver nenhum valor inserido, mostre um espaço reservado com um exemplo de valor potencial. Donilit usar espaços reservados como rótulos para as entradas.
    Etiqueta: Deve haver um rótulo de texto vinculado ao campo de texto. Clicar no rótulo deve mover o foco para o campo.
    Estado de Erro: O estado de erro é usado para erros de validação de formulário quando o erro está relacionado apenas ao campo de texto. Sempre use um erro de texto junto com a alteração da cor do campo.
    Estado Focado: O estado focalizado deve destacar o campo de texto quando os usuários começam a interagir com ele. Há sempre apenas um campo focado no formulário.
    Preenchimento automático: Quando aplicável, adicionar suporte ao atributo de preenchimento automático HTML permitirá que os usuários insiram facilmente diferentes tipos de dados.
    Suporte ao ícone: Os ícones são usados para descrever métodos de entrada, expressar um estado de campo de texto ou fornecer funcionalidade adicional.

    #--Input Switch
    Interruptores de entrada alternam o estado de um único item. Em comparação com a caixa de seleção de entrada, suas alterações geralmente se aplicam sem qualquer envio adicional.

    Estado Verificado: Usado quando um interruptor de entrada é ligado. É melhor fornecer uma maneira adicional de indicar o estado verificado, além de alterar sua cor quando aplicável.
    Estado Deficiente: Impede a interação com um interruptor de entrada.
    Etiqueta: Deve haver um rótulo de texto vinculado ao campo de comutação. Clicar no rótulo também deve acionar a seleção de entrada.
    Estado do Teclado: Uma seleção de switch deve ser acionada quando a tecla Espaço é pressionada.

    #--Select
    Selecionar permite que o usuário selecione um valor em uma lista de valores em um contexto de formulário:

    Estado Deficiente: Impede interações de entrada e remove seu valor do envio do formulário.
    Espaço reservado: Quando não houver nenhum valor inserido, mostre um espaço reservado com um exemplo de valor potencial. Donilit usar espaços reservados como rótulos para as entradas.
    Etiqueta: Deve haver um rótulo de texto vinculado ao campo de texto. Clicar no rótulo deve mover o foco para o campo.
    Estado de Erro: O estado de erro é usado para erros de validação de formulário quando o erro está relacionado apenas ao campo de texto. Sempre use um erro de texto junto com a alteração da cor do campo.
    Estado Focado: O estado focalizado deve destacar o campo de texto quando os usuários começam a interagir com ele. Há sempre apenas um campo focado no formulário.
    Preenchimento automático: Quando aplicável, adicionar suporte ao atributo de preenchimento automático HTML permitirá que os usuários insiram facilmente diferentes tipos de dados.
    Suporte ao ícone: Os ícones são usados para descrever métodos de entrada, expressar um estado de campo de texto ou fornecer funcionalidade adicional.

    #--Textarea
    A área de texto permite que os usuários insiram e editem texto.

    Estado Deficiente: Impede interações de entrada e remove seu valor do envio do formulário.
    Espaço reservado: Quando não houver nenhum valor inserido, mostre um espaço reservado com um exemplo de valor potencial. Donilit usar espaços reservados como rótulos para as entradas.
    Etiqueta: Deve haver um rótulo de texto vinculado ao campo de texto. Clicar no rótulo deve mover o foco para o campo.
    Estado de Erro: O estado de erro é usado para erros de validação de formulário quando o erro está relacionado apenas ao campo de texto. Sempre use um erro de texto junto com a alteração da cor do campo.
    Estado Focado: O estado focalizado deve destacar o campo de texto quando os usuários começam a interagir com ele. Há sempre apenas um campo focado no formulário.

    #--List
    As listas definem o layout do conteúdo da página ou grupos de elementos empilhando-os verticalmente ou horizontalmente.

    Suporte a qualquer tipo de conteúdo: As listas podem ser usadas em qualquer contexto, desde o layout em nível de página até o gerenciamento de compensações entre componentes granulares.
    Empilhamento Horizontal: As listas podem ser usadas para elementos em linha e precisam gerenciar como eles são empilhados horizontalmente, incluindo o manuseio de deslocamentos entre várias linhas de elementos.
    Variante Dividida: Listas com divisores são a melhor prática recomendada por muitas diretrizes de plataforma (especialmente em dispositivos móveis).
    Suporta Conteúdo Accionável: Às vezes, as listas são usadas para agrupar componentes tocáveis, onde toda a área do item da lista deve ser clicável.
      
    #--Looadling Indicator
    O indicador de carregamento mostra que uma operação está sendo executada e quanto tempo o processo levará.

    Variantes lineares e não lineares: Dependendo do contexto e do componente para o qual é utilizado, o indicador de carregamento pode ser representado com uma variante linear ou com uma variante não linear (por exemplo, circular).
    Tempo de espera determinado ou indeterminado: Em alguns casos, o tempo de espera pode ser determinado. O indicador de carregamento deve ser mostrado até que o carregamento termine ou um erro aconteça. Em outros casos, é melhor indicar quanto tempo restaram até que o carregamento seja feito.
    Variante de Luz: O indicador de carregamento deve respeitar o fundo do elemento pai e fornecer uma variante para ser usada em cores de fundo mais escuras.
    Movimento Reduzido: O indicador de carregamento deve ser sincronizado com as configurações de movimento do sistema e reduzir sua velocidade de animação quando as configurações de movimento reduzido estiverem ativadas.

    #--Modal
    Os modais são contêineres que aparecem na frente do conteúdo principal para fornecer informações críticas ou um conteúdo acionável.

    Suporta qualquer tipo de conteúdo: Como qualquer outro contêiner, os modais podem ser usados em diferentes cenários e você deve ser capaz de usá-lo com qualquer outro componente dentro.
    Ações Suplementares: Como o conteúdo no modal pode ser acionável, é importante ter uma área para elementos de ação. Esta área é geralmente localizada na parte inferior do recipiente modal.
    Fechar Ação: Os modais devem fornecer uma maneira clara de serem fechados, pois eles bloqueiam o conteúdo quando abertos. Isso pode ser um botão de fechamento separado ou uma das ações suplementares.
    Estrutura de Informação: Embora os modais possam ser usados como um contêiner vazio para o conteúdo, eles precisam de uma estrutura de informações definida para fornecer uma experiência holística. Pode incluir a definição de como os títulos e legendas parecem por padrão ou onde uma área de ação é.
    Suporte de Navegação do Teclado: Deve ser possível fechar um modal pressionando a tecla Esc e todos os elementos focalizáveis dentro do contêiner modal devem ser acessíveis com a navegação do teclado.
    Foco Trapping: Uma vez que um modal é aberto, o foco deve ser movido para o primeiro elemento dentro do modal e deve ser enrolado dentro do contêiner modal. Fechar o modal deve retornar o foco para o último elemento focado na página.

    #--Tabs
    As guias organizam a navegação entre várias páginas ou seções de conteúdo.

    Estado do botão ativo: Deve haver uma diferenciação clara entre os botões da guia selecionados e não selecionados.
    Suporte ao ícone de botão: Os ícones ajudam a mostrar o objetivo dos botões da guia quando usados ao lado de seu rótulo.
    Botões de guia de tamanho igual: As guias podem ser usadas em um contêiner de tamanho relativamente pequeno, onde você precisa alternar entre um número definido de seções. Para esses cenários, é melhor suportar uma variante em que a área do botão é dividida igualmente.
    Navegação no teclado: Todos os botões da guia devem estar focados e a navegação entre o componente da guia deve estar acessível a partir do teclado.
    Responsividade: Se todas as abas no donilit móvel se encaixam na janela de visualização, os usuários ainda devem ter acesso a todos os botões de guia. Maneiras de resolver isso podem ser tornar a área do botão rolável para dispositivos móveis ou mostrar um botão Mais contendo um menu suspenso com o restante dos botões.


    #--Toast
    Os brindes fornecem mensagens de feedback curtas e significativas sobre os resultados da ação.

    Despedido Automaticamente: As mensagens de brinde devem interromper o fluxo do usuário, bloquear a tela por um longo tempo ou exigir ação adicional do usuário.
    Suporte de Ação: Além de exibir a mensagem, os brindes também podem fornecer uma ação relacionada à mensagem, como desfazer uma ação.
    Lida com Múltiplas Instâncias: Mesmo que isso aconteça com frequência, os brindes podem ser chamados de várias fontes ao mesmo tempo e todos os brindes resultantes devem ser enfileirados. É uma boa prática não mostrar todas as mensagens ao mesmo tempo.
    Acessibilidade: As mensagens de brinde devem ser anunciadas pela tecnologia de assistência de voz e sua ação deve ser facilmente acessível a partir do teclado.
    Responsivens: As torradas devem estar alinhadas com a janela de visualização móvel e sua ação deve ser facilmente acessível para tocar.

    #--Tooltip
    As dicas de ferramentas são componentes somente para desktop que exibem informações adicionais ao passar o mouse ou focar em um elemento.

    Suporte para Teclado Hover: As dicas de ferramentas devem estar acessíveis quando um elemento é focado usando o teclado.
    Posicionamento Dinâmico: O conteúdo da dica de ferramenta deve ser exibido com base na posição atual do elemento gatilho na tela e sempre visível para o usuário.
    Tempo limite de Hover: Ter um pequeno tempo limite antes de acionar uma dica de ferramenta ajudará a evitar que ocasionalmente mostre dicas de ferramenta enquanto os usuários movem o cursor do mouse.
    Variante de Luz: A dica de ferramenta deve respeitar o fundo do elemento pai e fornecer uma variante para ser usada em cores de fundo mais escuras.
    Transição Instantânea para Grupos de Elementos: Se houver um grupo de elementos usando dicas de ferramentas, passar o mouse sobre outro elemento enquanto uma dica de ferramenta já estiver ativa deverá acionar a animação.


#7 Tooling

#8 Project Manager
