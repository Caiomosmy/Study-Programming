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
