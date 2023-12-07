/*ESTUDOS DE TYPESCRIPT*/

/*INTRODUCÃO*/
/*TypeScript é uma linguagem de programação estaticamente tipada que é um superconjunto de JavaScript. Foi desenvolvido e é mantido pela Microsoft. O TypeScript foi criado para enfrentar os desafios da criação de aplicativos JavaScript em larga escala e adiciona anotações de tipo opcionais, classes, interfaces e outros recursos à linguagem.

Os principais benefícios do uso do TypeScript incluem:

Tipo Segurança
Ferramentas Melhoradas
Melhoria da Manutenção
Compatibilidade Retrovertida/*

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

/*PARAMETROS DE CONSTRUÇÃO*/
/*No TypeScript, os parâmetros do construtor podem ser declarados com modificadores de acesso ( por exemplo. public, private, protected) e / ou anotações de tipo. Os parâmetros são atribuídos automaticamente a propriedades com o mesmo nome dentro do construtor e podem ser acessados dentro da classe. Por exemplo:*/
class Example {
  constructor(private name: string, public age: number) {}
}

/*Neste exemplo, o construtor tem dois parâmetros: nome e idade. nome tem um modificador de acesso privado, por isso só pode ser acessado dentro da classe Exemplo. age tem um modificador de acesso público, por isso pode ser acessado de fora da classe também.*/

/*Neste exemplo, a Animalclasse possui um campo de nome, um construtor que define o valor do namecampo e um makeSoundmétodo. Uma instância da Animalclasse pode ser criada usando a newpalavra-chave e seus métodos e propriedades podem ser acessados usando a notação de ponto.*/

/*DECORADORES*/
/*Decoradores são um recurso do TypeScript que permite modificar o comportamento de uma classe, propriedade, método ou parâmetro. Eles são uma maneira de adicionar funcionalidades adicionais ao código existente e podem ser usados para uma ampla gama de tarefas, incluindo registro em log, otimização de desempenho e validação.
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


