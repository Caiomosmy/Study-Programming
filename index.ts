/*ESTUDOS DE TYPESCRIPT*/

/*INTRODUCÃO*/
TypeScript é uma linguagem de programação estaticamente tipada que é um superconjunto de JavaScript. Foi desenvolvido e é mantido pela Microsoft. O TypeScript foi criado para enfrentar os desafios da criação de aplicativos JavaScript em larga escala e adiciona anotações de tipo opcionais, classes, interfaces e outros recursos à linguagem.

Os principais benefícios do uso do TypeScript incluem:

Tipo Segurança
Ferramentas Melhoradas
Melhoria da Manutenção
Compatibilidade Retrovertida

/*TYPESCRIPT TYPES*/

/*TYPE INFERENCE
A inferência de tipo no TypeScript refere-se ao processo de determinar automaticamente o tipo de uma variável com base no valor atribuído a ela. 
Isso permite que você escreva um código mais conciso e fácil de entender, pois o compilador TypeScript pode deduzir os tipos de variáveis sem 
que você precise especificá-las explicitamente. Aqui está um exemplo de inferência de tipo em TypeScript:*//

let name = 'John Doe';

/**Neste exemplo, o compilador TypeScript infere automaticamente que o tipo da variável de nome é string. Isso significa que você pode usar a variável 
  name como qualquer outra string em seu código, e o compilador TypeScript garantirá que você execute quaisquer operações inválidas nele.*/
/*TYPE COMPARIBILITY*/

/*COMBINING TYPES*/

/*TypeScript usa tipagem estrutural para determinar a compatibilidade de tipo. Isso significa que dois tipos são considerados compatíveis se possuírem a mesma estrutura, independentemente de seus nomes.

Aqui está um exemplo de compatibilidade de tipos no TypeScript:*/

interface Point {
  x: number;
  y: number;
}

let p1: Point = { x: 10, y: 20 };
let p2: { x: number; y: number } = p1;

console.log(p2.x); // Output: 10

/*Neste exemplo, p1possui o tipo Point, enquanto p2possui o tipo { x: number; y: number }. Apesar dos dois tipos terem nomes diferentes, eles são considerados compatíveis por possuírem a mesma estrutura. Isso significa que você pode atribuir um valor de tipo Pointa uma variável de tipo { x: number; y: number }, como fazemos com p1e p2neste exemplo.*/

/*TYPE GUARDS / NARROWING*/

/*CLASSES
As classes em TypeScript são um modelo para a criação de objetos (instâncias de uma classe), fornecendo uma maneira de estruturar objetos e encapsular dados e comportamento. As classes em TypeScript têm uma sintaxe semelhante às classes em outras linguagens de programação orientadas a objetos, como Java e C#.

Uma classe em TypeScript é definida usando a palavra-chave class, seguida pelo nome da classe. A definição de classe pode incluir campos (também conhecidos como propriedades ou atributos), métodos (funções) e um construtor.*/

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} is making a sound`);
  }
}

const dog = new Animal('Dog');
dog.makeSound(); // Output: Dog is making a sound


/*Neste exemplo, a Animalclasse possui um campo de nome, um construtor que define o valor do namecampo e um makeSoundmétodo. Uma instância da Animalclasse pode ser criada usando a newpalavra-chave e seus métodos e propriedades podem ser acessados usando a notação de ponto.*/

/*DECORADORES*/
/*Decoradores são um recurso do TypeScript que permite modificar o comportamento de uma classe, propriedade, método ou parâmetro. Eles são uma maneira de adicionar funcionalidades adicionais ao código existente e podem ser usados para uma ampla gama de tarefas, incluindo registro em log, otimização de desempenho e validação.
Aqui está um exemplo de como você pode usar um decorador em TypeScript:*/
