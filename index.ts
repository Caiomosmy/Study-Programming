/*ESTUDOS DE TYPESCRIPT*/

/*INTRODUCÃO*/
/*TypeScript é uma linguagem de programação estaticamente tipada que é um superconjunto de JavaScript. Foi desenvolvido e 
é mantido pela Microsoft. O TypeScript foi criado para enfrentar os desafios da criação de aplicativos JavaScript em 
larga escala e adiciona anotações de tipo opcionais, classes, interfaces e outros recursos à linguagem.

Os principais benefícios do uso do TypeScript incluem:

Tipo Segurança
Ferramentas Melhoradas
Melhoria da Manutenção
Compatibilidade Retrovertida/*

/*TYPESCRIPT TYPES*/

/*TYPE INFERENCE
A inferência de tipo no TypeScript refere-se ao processo de determinar automaticamente o tipo de uma variável com base 
no valor atribuído a ela. Isso permite que você escreva um código mais conciso e fácil de entender, pois o compilador 
TypeScript pode deduzir os tipos de variáveis sem que você precise especificá-las explicitamente. Aqui está um exemplo de inferência de tipo em TypeScript:*//

let name = 'John Doe';

/**Neste exemplo, o compilador TypeScript infere automaticamente que o tipo da variável de nome é string. Isso significa 
que você pode usar a variável name como qualquer outra string em seu código, e o compilador TypeScript garantirá que 
você execute quaisquer operações inválidas nele.*/

/*TYPE COMPARIBILITY*/
/*O TypeScript usa tipagem estrutural para determinar a compatibilidade de tipos. Isso significa que dois tipos são 
Considerados compatíveis se tiverem a mesma estrutura, independentemente de seus nomes.

Aqui está um exemplo de compatibilidade de tipo em TypeScript:*/
interface Point {
  x: number;
  y: number;
}

let p1: Point = { x: 10, y: 20 };
let p2: { x: number; y: number } = p1;

console.log(p2.x); // Output: 10

/*Neste exemplo, p1 tem o tipo Point, enquanto p2 tem o tipo { x: number; y: number }. Apesar de os dois tipos terem 
nomes diferentes, eles são considerados compatíveis porque têm a mesma estrutura. Isso significa que você pode atribuir 
um valor de tipo Point para uma variável do tipo { x: number; y: number }, como fazemos com p1 e p2 neste exemplo./*

/*COMBINING TYPES*/

/*TypeScript usa tipagem estrutural para determinar a compatibilidade de tipo. Isso significa que dois tipos são considerados
compatíveis se possuírem a mesma estrutura, independentemente de seus nomes.

Aqui está um exemplo de compatibilidade de tipos no TypeScript:*/

interface Point {
  x: number;
  y: number;
}

let p1: Point = { x: 10, y: 20 };
let p2: { x: number; y: number } = p1;

console.log(p2.x); // Output: 10

/*Neste exemplo, p1possui o tipo Point, enquanto p2possui o tipo { x: number; y: number }. Apesar dos dois tipos terem 
Nomes diferentes, eles são considerados compatíveis por possuírem a mesma estrutura. Isso significa que você pode atribuir 
um valor de tipo Pointa uma variável de tipo { x: number; y: number }, como fazemos com p1e p2neste exemplo.*/

    /*--- UNION TYPES*/
      /*Tipos de União no TypeScript permitem que você especifique vários tipos possíveis para uma única variável 
      ou parâmetro. Um tipo de união é escrito como uma barra vertical | lista separada de tipos.
      Por exemplo, considere uma função que usa uma string ou um número como argumento:*/

            function combine(input1: string | number, input2: string | number) {
        return input1 + input2;
    }

    /*--- INTERSECTION TYPES*/
    /*Um tipo de interseção cria um novo tipo combinando vários tipos existentes. O novo tipo tem todas as 
    características dos tipos existentes. Para combinar tipos, você usa o & operador da seguinte forma:*/
    type typeAB = typeA & typeB;

    /*O typeAB terá todas as propriedades de typeA e typeB. Observe que o tipo de união usa o | operador 
    que define uma variável que pode conter um valor de typeA ou typeB*/

    /*--- TYPE ALIASES*/
    /*Um Alias de Tipo no TypeScript permite que você crie um novo nome para um tipo. Aqui está um exemplo:*/
    type Name = string;
    type Age = number;
    type User = { name: Name; age: Age };

    const user: User = { name: 'John', age: 30 };

    /*No exemplo acima, Name e Age são aliases de tipo para string e number respectivamente. 
    E User é um alias de tipo para um objeto com propriedades name tipo Name e age tipo Age.*/

    /*--- KEYOF OPERATOR*/
    /*O keyof operador em TypeScript é usado para obter a união de chaves de um tipo de objeto. Aqui está um 
    exemplo de como ele pode ser usado:*/

      interface User {
    name: string;
    age: number;
    location: string;
  }

type UserKeys = keyof User; // "name" | "age" | "location"
const key: UserKeys = 'name';

/*Neste exemplo, UserKeys é um tipo que representa a união de chaves do User interface, que é 
  "name" | "age" | "location". E uma constante chamada key com o tipo UserKeys é declarado com o valor "name".*/

/*TYPE GUARDS / NARROWING*/
/*Protetores de tipo são uma maneira de restringir o tipo de uma variável. Isso é útil quando você deseja fazer 
algo diferente, dependendo do tipo de uma variável.*/

    /*--- Typeof*/
    /*O typeof operador é usado para verificar o tipo de uma variável. Ele retorna um valor de string 
    representando o tipo da variável*/

    let value: string | number = 'hello';

    if (typeof value === 'string') {
      console.log('value is a string');
    } else {
    console.log('value is a number');
    }

    /*--- instanceof*/
    /*O instanceof operador é uma maneira de restringir o tipo de uma variável. Ele é usado para verificar 
    se um objeto é uma instância de uma classe.*/

    class Bird {
  fly() {
    console.log('flying...');
  }
  layEggs() {
    console.log('laying eggs...');
  }
}

const pet = new Bird();

// instanceof
if (pet instanceof Bird) {
  pet.fly();
} else {
  console.log('pet is not a bird');
}
    
    /*-- Equality*/
    /*O TypeScript também usa instruções de switch e verificações de igualdade, como ===, !==, ==, e != 
    para tipos estreitos. Por exemplo:*/

    function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x);
    console.log(y);
  }
}
    /*Quando verificamos isso x e y ambos são iguais no exemplo acima, TypeScript sabia que seus tipos também 
    tinham que ser iguais. Uma vez que string é o único tipo comum que ambos x e y poderia assumir, 
    TypeScript sabe disso x e y deve ser uma string no primeiro ramo.*/

    /*-- Trthiness*/
    /*A veracidade pode não ser uma palavra que você encontra no dicionário, mas é algo que você ouve em JavaScript.
    Em JavaScript, podemos usar qualquer expressão em condicionais, &&s, s, ||s, s, if declarações, negações booleanas (!),
    e mais. Por exemplo, se as instruções não esperarem que sua condição tenha sempre o tipo booleano.*/
    function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }

  return "Nobody's here. :(";
}

    /*-- Type Predicates*/
    /*Predicados de tipo são funções que retornam um valor booleano. Eles são usados para restringir o tipo de uma variável. 
    Predicados de tipo são usados em guardas de tipo.*/

    function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function example(x: unknown) {
  if (isString(x)) {
    // We can now call any 'string' method on 'x'.
    x.toUpperCase();
  } else {
    console.log(x);
  }
}

/*TYPESCRIPT FUNCTIONS*/
/*As funções são um bloco de construção central no TypeScript. As funções permitem que você envolva um pedaço de código e 
reutilize-o várias vezes. As funções no TypeScript podem ser declaradas usando sintaxe de declaração de função ou sintaxe 
de expressão de função.*/

/*Sintaxe de Declaração de Função:*/

function name(param1: type1, param2: type2, ...): returnType {
  return value;
}

/*Sintaxe de Expressão de Função:*/
let name = function(param1: type1, param2: type2, ...): returnType {
  return value;
};

    /*--- Typing Functions */
    /*No TypeScript, as funções podem ser digitadas de algumas maneiras diferentes para indicar os parâmetros de 
    entrada e o tipo de retorno da função. 
    
    Declaração de função com tipos:*/
    function add(a: number, b: number): number {
  return a + b;
}
    /*Função de seta com tipos:*/
    const multiply = (a: number, b: number): number => {
  return a * b;
};
    /*Tipo de função:*/
    let divide: (a: number, b: number) => number;

divide = (a, b) => {
  return a / b;
};
    
    /*--- Function Overloading */
    /*Sobrecarga de função no TypeScript permite que várias funções com o mesmo nome, mas com parâmetros diferentes 
    sejam definidas. A função correta a ser chamada é determinada com base no número, tipo e ordem dos argumentos 
    passados para a função em tempo de execução.*/

    function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
  return a + b;
}

console.log(add(1, 2)); // 3
console.log(add('Hello', ' World')); // "Hello World"


/*TYPESCRIPT INTERFACES*/
/*Interfaces no TypeScript fornecem uma maneira de definir um contrato para um tipo, que inclui um conjunto de 
propriedades, métodos e eventos. Itilits usado para impor uma estrutura para um objeto, classe ou argumento de 
função. As interfaces não são transpiladas para JavaScript e são usadas apenas pelo TypeScript em tempo de 
compilação para fins de verificação de tipo.

Aqui está um exemplo de definição e uso de uma interface no TypeScript:*/

interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'John Doe',
  age: 30,
};

/*Neste exemplo, o User a interface define a estrutura do user objeto com duas propriedades, name e age. 
O objeto é então digitado como Usuário usando uma declaração de tipo: User.*/


    /*--Types vs Interfaces*/
    /*No TypeScript, ambos os tipos e interfaces podem ser usados para definir a estrutura de objetos e 
    impor verificações de tipo. No entanto, existem algumas diferenças entre os dois. Tipos são usados 
    para criar um novo tipo nomeado com base em um tipo existente ou para combinar tipos existentes em
    um novo tipo. Eles podem ser criados usando a palavra-chave type. Por exemplo:*/

    type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: 'John Doe',
  age: 30,
};
    
    /*Interfaces, por outro lado, são usadas para descrever a estrutura de objetos e classes. 
    Eles podem ser criados usando a palavra-chave interface. Por exemplo:*/

    interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: 'John Doe',
  age: 30,
};
    
    /*--Extending Interfaces*/
    /*No TypeScript, você pode estender uma interface criando uma nova interface que herda da 
    interface original usando a palavra-chave “extends”. A nova interface pode incluir propriedades 
    adicionais, métodos ou redefinir os membros da interface original.*/

    interface Shape {
  width: number;
  height: number;
}

interface Square extends Shape {
  sideLength: number;
}

let square: Square = {
  width: 10,
  height: 10,
  sideLength: 10,
};

    /*Neste exemplo, o Square interface estende o Shape interface e adiciona uma propriedade adicional sideLength. 
    Uma variável do tipo Square deve ter todas as propriedades definidas em ambos Shape e Square interfaces.*/
      
    /*--Interface Declaration*/
    /*Um interface em TypeScript é um blueprint para a criação de objetos com estrutura específica. Um interface 
    define um conjunto de propriedades, métodos e eventos que uma classe ou objeto deve implementar. A interface 
    é um contrato entre objetos e classes e pode ser usada para impor uma estrutura específica para objetos em 
    seu código.

    Aqui está um exemplo de uma declaração de interface em TypeScript:*/

    interface Person {
  firstName: string;
  lastName: string;
  age?: number;

  getFullName(): string;
}
 /*Neste exemplo, a interface Person define quatro propriedades: firstName, lastName, age, e um método getFullName().
  A propriedade de idade é opcional, indicada pelo ? símbolo. Qualquer classe ou objeto que implementa o Person a 
  interface deve ter essas propriedades e método./*

Saiba mais nos seguintes links:
  
    /*-- Hybrid Types*/
    /*Em TypeScript, um tipo híbrido é um tipo que combina vários tipos em um único tipo. O tipo resultante é considerado 
    uma união desses tipos. Isso permite que você especifique que um valor pode ter vários tipos, em vez de apenas um.

    Por exemplo, você pode criar um tipo híbrido que pode aceitar uma string ou um número:*/

    type StringOrNumber = string | number;

    /*Você também pode usar tipos híbridos para criar tipos mais complexos que podem representar uma combinação de vários 
    tipos diferentes de valores. Por exemplo:*/

    type Education = {
  degree: string;
  school: string;
  year: number;
};

type User = {
  name: string;
  age: number;
  email: string;
  education: Education;
};

/*CLASSES
As classes em TypeScript são um modelo para a criação de objetos (instâncias de uma classe), fornecendo uma maneira de 
estruturar objetos e encapsular dados e comportamento. As classes em TypeScript têm uma sintaxe semelhante às classes em 
outras linguagens de programação orientadas a objetos, como Java e C#.

Uma classe em TypeScript é definida usando a palavra-chave class, seguida pelo nome da classe. A definição de classe pode 
incluir campos (também conhecidos como propriedades ou atributos), métodos (funções) e um construtor.*/

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

/*Neste exemplo, o Animal classe tem um campo de nome, um construtor que define o valor do name campo, e um makeSound método.
Uma instância do Animal a classe pode ser criada usando o new palavra-chave, e seus métodos e propriedades podem ser 
acessados usando notação de ponto.*/

      /*---Constructor Params*/
      /*No TypeScript, os parâmetros do construtor podem ser declarados com modificadores de acesso (por exemplo. public, 
      private, protected) e/ou digite anotações. Os parâmetros são atribuídos automaticamente às propriedades do mesmo 
      nome dentro do construtor, e podem ser acessados dentro da classe. Por exemplo:*/
      class Example {
  constructor(private name: string, public age: number) {}
}
      /*Neste exemplo, o construtor tem dois parâmetros: nome e idade. nome tem um modificador de acesso privado, por isso 
      só pode ser acessado dentro da classe Exemplo. age tem um modificador de acesso público, por isso pode ser acessado 
      de fora da classe também.*/

      /*---Constructor Overloadding*/
      /*No TypeScript, você pode obter sobrecarga de construtor usando várias definições de construtor com diferentes listas 
      de parâmetros em uma única classe. Dado abaixo é o exemplo onde temos várias definições para o construtor:*/

      class Point {
  // Overloads
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    // TBD
  }
}
      /*Note que, semelhante à sobrecarga de função, temos apenas uma implementação do consrutor e itirates a única assinatura 
      que está sobrecarregada.*/

      /*---Access Modifiers*/
      /*No TypeScript, modificadores de acesso são palavras-chave usadas para controlar a visibilidade e acessibilidade de 
      propriedades e métodos de classe. Existem três modificadores de acesso no TypeScript:

      public:Este é o modificador de acesso padrão. Propriedades e métodos declarados como públicos podem ser acessados de 
      qualquer lugar, dentro e fora da classe.
      
      private:Propriedades e métodos declarados como privados só podem ser acessados dentro da mesma classe. Não são 
      acessíveis de fora da classe.

    
      protected:Propriedades e métodos declarados como protegidos podem ser acessados dentro da classe e suas subclasses. 
      Eles não são acessíveis de fora da classe e suas subclasses.

      Os modificadores de acesso no TypeScript permitem definir o nível de visibilidade e acessibilidade das propriedades 
      e métodos em sua classe, tornando seu código mais sustentável e seguro.*/
      
      /*---Abstract Classes*/
      /*Classes abstratas no TypeScript são classes que não podem ser instanciadas por conta própria e devem ser subclassificadas 
      por outras classes. As classes abstratas fornecem um modelo para outras classes e podem ter métodos abstratos, que 
      são métodos sem um corpo e devem ser substituídos pela subclasse. Essas classes são úteis para definir uma interface 
      comum ou funcionalidade básica que outras classes podem herdar e construir.*/
      abstract class Animal {
  abstract makeSound(): void;

  move(): void {
    console.log('moving...');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('bark');
  }
}
      /*---Inheritance vs Polymorphism*/
      /*Herança e polimorfismo são dois conceitos fundamentais na programação orientada a objetos, e eles são suportados 
      em TypeScript também.

      Herança refere-se a um mecanismo onde uma subclasse herda propriedades e métodos de sua classe pai. Isso permite 
      que uma subclasse reutilize o código e o comportamento de sua classe pai, além de adicionar ou modificar seu próprio 
      comportamento. No TypeScript, a herança é obtida usando a palavra-chave extends.

      Polimorfismo refere-se à capacidade de um objeto assumir muitas formas. Isso permite que objetos de diferentes
      classes sejam tratados como objetos de uma classe comum, desde que compartilhem uma interface comum ou hierarquia 
      de herança. Em TypeScript, o polimorfismo é conseguido através de substituição de método e sobrecarga de método.*/

      class Animal {
  makeSound(): void {
    console.log('Making animal sound');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Bark');
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log('Meow');
  }
}

let animal: Animal;

animal = new Dog();
animal.makeSound(); // Output: Bark

animal = new Cat();
animal.makeSound(); // Output: Meow


    /*---Method Overrinding*/
    /*Em TypeScript, substituição de método é um mecanismo onde uma subclasse fornece uma nova implementação para um método 
    que já está definido em sua classe pai. Isso permite que a subclasse herde o comportamento da classe pai, mas mude 
    seu comportamento para atender às suas próprias necessidades.

    Para substituir um método no TypeScript, a assinatura do método na subclasse deve corresponder exatamente à assinatura 
    do método na classe pai.*/

    class Animal {
  makeSound(): void {
    console.log('Making animal sound');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Bark');
  }
}

let animal: Animal;

animal = new Dog();
animal.makeSound(); // Output: Bark


  /*Neste exemplo, o Dog class substitui o método makeSound definido na classe Animal e fornece sua própria implementação. 
  Quando o makeSound método é chamado em uma instância do Dog classe, ele vai usar a implementação no Dog classe em vez 
  da implementação no Animal classe.*/
      
/*PARAMETROS DE CONSTRUÇÃO*/
/*No TypeScript, os parâmetros do construtor podem ser declarados com modificadores de acesso ( por exemplo. 
public, private, protected) e / ou anotações de tipo. Os parâmetros são atribuídos automaticamente a propriedades 
com o mesmo nome dentro do construtor e podem ser acessados dentro da classe. 

Por exemplo:*/

class Example {
  constructor(private name: string, public age: number) {}
}

/*Neste exemplo, o construtor tem dois parâmetros: nome e idade. nome tem um modificador de acesso privado, por isso
só pode ser acessado dentro da classe Exemplo. age tem um modificador de acesso público, por isso pode ser acessado de 
fora da classe também.*/

/*Neste exemplo, a Animalclasse possui um campo de nome, um construtor que define o valor do namecampo e um makeSoundmétodo.
Uma instância da Animalclasse pode ser criada usando a newpalavra-chave e seus métodos e propriedades podem ser acessados 
usando a notação de ponto.*/


/*GENÉRICOS*/
/*Os genéricos no TypeScript são uma maneira de escrever código que pode funcionar com vários tipos de dados, em vez de ser 
limitado a um único tipo de dados. Os genéricos permitem que você escreva funções, classes e interfaces que adotam um ou 
mais parâmetros de tipo, que atuam como espaços reservados para os tipos de dados reais que serão usados quando a função, 
classe, ou interface é usada.

Por exemplo, o seguinte é uma função genérica que pega um único argumento de qualquer tipo de dados e retorna o mesmo tipo 
de dados:*/

function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>('Hello'); // type of output will be 'string'

/*Neste exemplo, o identity função pega um único argumento de qualquer tipo de dados e retorna o mesmo tipo de dados. 
O tipo de dados real é especificado quando a função é chamada usando <string> antes do argumento "Hello".*/

/*DECORADORES*/
/*Decoradores são um recurso do TypeScript que permite modificar o comportamento de uma classe, propriedade, método ou 
parâmetro. Eles são uma maneira de adicionar funcionalidades adicionais ao código existente e podem ser usados para uma 
ampla gama de tarefas, incluindo registro em log, otimização de desempenho e validação.
Aqui está um exemplo de como você pode usar um decorador em TypeScript:*/

function log(
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments: ${args}`);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

const calculator = new Calculator();
calculator.add(1, 2);
// Output: Calling add with arguments: 1,2
// Output: 3

/*Neste exemplo, usamos o @log decorador para modificar o comportamento do add método no Calculator classe. O log decorator registra os argumentos passados para o método antes de chamar o método original. Isso nos permite ver quais argumentos estão sendo passados para o método, sem ter que modificar o código methodirates.*/

/* --Restrições genéricas
As restrições genéricas no TypeScript permitem especificar os requisitos para os parâmetros de tipo usados em um tipo genérico. Essas restrições garantem que o parâmetro de tipo usado em um tipo genérico atenda a determinados requisitos.

As restrições são especificadas usando a extendspalavra-chave, seguida pelo tipo que o parâmetro de tipo deve estender ou implementar.*/

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  // Now we know it has a .length property, so no more error
  console.log(arg.length);

  return arg;
}

loggingIdentity(3); // Error, number doesn't have a .length property
loggingIdentity({ length: 10, value: 3 }); // OK

/*Neste exemplo, a Lengthwiseinterface define uma lengthpropriedade. A loggingIdentityfunção usa um parâmetro de tipo genérico Tque é restringido pela Lengthwiseinterface, o que significa que o parâmetro de tipo deve estender ou implementar a Lengthwiseinterface. Esta restrição garante que a propriedade length esteja disponível no argumento passado para a loggingIdentityfunção.*/

/*TIPOS DE UTILITÁRIOS*/
/*O TypeScript fornece vários tipos de utilitários que podem ser usados para manipular e transformar tipos existentes. Aqui estão alguns dos mais comuns:

Partial: torna todas as propriedades de um tipo opcional.
Readonly: torna todas as propriedades de um tipo somente leitura.
Pick: permite que você escolha propriedades específicas de um tipo.
Omit: permite omitir propriedades específicas de um tipo.
Exclude: cria um tipo que é a diferença definida de A e B.
..e mais.
Saiba mais nos seguintes links:*/

/* -- PARTIAL*/
/*O tipo Parcial no TypeScript permite que você torne todas as propriedades de um tipo opcionais. 
Isso é útil quando você precisa criar um objeto com apenas um subconjunto das propriedades de um tipo existente.

Aqui está um exemplo de uso do tipo Parcial em TypeScript:*/
interface User {
  name: string;
  age: number;
  email: string;
}

function createUser(user: Partial<User>): User {
  return {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    ...user,
  };
}

const newUser = createUser({ name: 'Jane Doe' });

console.log(newUser);
// Output: { name: 'Jane Doe', age: 30, email: 'john.doe@example.com' }

/* -- PICK ()*/
/*Pick constrói um tipo escolhendo o conjunto de propriedades Keys (string literal ou união de literais de string) de Type.*/
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};

/* -- OMIT*/
/*Omit constrói um tipo escolhendo todas as propriedades de Type e, em seguida, removendo Keys 
(string literal ou união de literais de string).*/

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, 'description'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
  createdAt: 1615544252770,
};

type TodoInfo = Omit<Todo, 'completed' | 'createdAt'>;

const todoInfo: TodoInfo = {
  title: 'Pick up kids',
  description: 'Kindergarten closes at 5pm',
};

/* -- READONLY*/
/*O Readonly constrói um tipo com todas as propriedades do tipo definidas como readonly, o que significa que as 
propriedades do tipo construído não podem ser reatribuídas.*/

interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users',
};

// Cannot assign to 'title' because it is a read-only property.
todo.title = 'Hello';

/* -- RECORD*/
/*Record constrói um tipo de objeto cujas chaves de propriedade são Keys e cujos valores de propriedade são Type. 
Este utilitário pode ser usado para mapear as propriedades de um tipo para outro tipo.*/

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};

/* -- EXCLUDE*/
/*Excluir constrói um tipo excluindo do UnionType todos os membros do sindicato que são atribuíveis a ExcludedMembers.*/
type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // "b" | "c"
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number

/* -- EXTRACT*/
/*Extract constrói um tipo extraindo do Tipo todos os membros do sindicato que são atribuíveis ao Union.*/
type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
//    ^ = type T0 = "a"

/* -- NON NULLABLE*/
/*Não-nulável constrói um tipo excluindo null e undefined do Tipo.*/
type T0 = NonNullable<string | number | undefined>;
// type T0 = string | number

type T1 = NonNullable<string[] | null | undefined>;
// type T1 = string[]

/* -- PARAMETERS*/
/*Parâmetros constrói um tipo de tupla dos tipos usados nos parâmetros de um tipo de função Tipo.*/
type T0 = Parameters<() => string>;
// type T0 = []

type T1 = Parameters<(s: string) => void>;
// type T1 = [s: string]

type T2 = Parameters<<T>(arg: T) => T>;
// type T2 = [arg: unknown]

declare function f1(arg: { a: number; b: string }): void;
type T3 = Parameters<typeof f1>;
// type T3 = [arg: {
//     a: number;
//     b: string;
// }]

type T4 = Parameters<any>;
// type T4 = unknown[]

type T5 = Parameters<never>;
// type T5 = never

type T6 = Parameters<string>;
// ^ Type 'string' does not satisfy the constraint '(...args: any) => any'.

type T7 = Parameters<Function>;
// ^ Type 'Function' does not satisfy the constraint '(...args: any) => any'.

/* -- RETURN TYPE*/
/*Tipo de retorno constrói um tipo que consiste no tipo de retorno da função Tipo.*/
type T0 = ReturnType<() => string>;
// type T0 = string

type T1 = ReturnType<(s: string) => void>;
// type T1 = void

type T2 = ReturnType<<T>() => T>;
// type T2 = unknown

type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
// type T3 = number[]

declare function f1(): { a: number; b: string };
type T4 = ReturnType<typeof f1>;
// type T4 = {
//     a: number;
//     b: string;
// }

type T5 = ReturnType<any>;
// type T5 = any

type T6 = ReturnType<never>;
// type T6 = never

type T7 = ReturnType<string>;
// ^ Type 'string' does not satisfy the constraint '(...args: any) => any'.

type T8 = ReturnType<Function>;
// ^ Type 'Function' does not satisfy the constraint '(...args: any) => any'.

/* -- INSTANCE TYPE*/
/*Este tipo constrói um tipo que consiste no tipo de instância de uma função de construtor em Type.*/
class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>;
// type T0 = C

type T1 = InstanceType<any>;
// type T1 = any

type T2 = InstanceType<never>;
// type T2 = never

type T3 = InstanceType<string>;
// ^ Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.

type T4 = InstanceType<Function>;
// ^ Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.

/* -- AWAITED*/
/*Este tipo destina-se a modelar operações como await em funções assíncronas, ou o .then() método sobre Promessas -
especificamente, a maneira como elas recursivamente desembrulham Promessas.*/
type A = Awaited<Promise<string>>;
// type A = string

type B = Awaited<Promise<Promise<number>>>;
// type B = number

type C = Awaited<boolean | Promise<number>>;
// type C = number | boolean


