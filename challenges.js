

/*
  1. Merge the two objects into a new object using the third object as the default 
  attributes. The second object should prevail over the first, the default 
  attributes should be overwritten when applicable.

  The result should be:

  {
    name: "Bruce",
    age: "",
    job: "Senior UI Engineer",
    birthYear: "1990",
    lastName: "Wayne"
  }
*/

const obj1 = {
  name: 'lucas',
  birthYear: '1990'
};

const obj2 = {
  name: 'Bruce',
  lastName: 'Wayne'
};

const objDefault = {
  name: '',
  age: '',
  job: 'Senior UI Engineer'
};

// não irei mentir eu uso copilot, então apareceu quando comecei a digitar ai como ja tinha olhado fico facil, mas eu entendi o que ele fez, ele pegou o objeto default e sobrescreveu os valores que ja existiam nos outros objetos ordenando por prioridade
let result = Object.assign({}, objDefault, obj1, obj2);

console.log('#1: ', result);

/* 
  2. Calculate the age based on the birth year, update the result object and console log it.

  Tip: you might want to use getFullYear method

  The result should be:

  {
    name: "Bruce",
    age: 32,
    job: "Senior UI Engineer",
    birthYear: "1990",
    lastName: "Wayne"
  }
*/

/* YOUR CODE HERE */

// Cria um objeto pessoa com atributos
const pessoa = {
  name: 'Bruce',
  age: 32,
  job: 'Senior UI Engineer',
  birthYear: '1990',
  lastName: 'Wayne'
}
// mesmo usando copilot essa eu ja tinha feito em um curso, calcula a idade atraves do metodo getFullYear que pega o ano atual
const calcIdade = pessoa.age = new Date().getFullYear() - pessoa.birthYear;
pessoa.age = calcIdade;// substitui o valor antigo pelo novo

console.log('#2: ', calcIdade);

/*
  3. Filter the unavailable books into a new array. After that, remove the 
  unavailable books from the original array. Console log both arrays at the end.

  The result should be:

  #3 [unavailableBooks]: [Object, Object, Object, Object]
  #3 [books]: [Object (Ben Horowitz), Object (Steve Jobs)]
*/

// no prmeiro momento troquei o const por let, 
let books = [
  {
    author: 'Ray Dalio',
    title: 'Principles',
    availableStatus: false,
    pages: 50
  },
  {
    author: 'Ben Horowitz',
    title: 'The Hard Thing About Hard Things',
    availableStatus: true,
    pages: 250
  },
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    availableStatus: false,
    pages: 200
  },
  {
    author: 'Robert Iger',
    title: 'The Ride of a Lifetime',
    availableStatus: false,
    pages: 150
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    availableStatus: true,
    pages: 50
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    availableStatus: false,
    pages: 100
  }
];

const unavailableBooks = '';

/* YOUR CODE HERE */
let livrosDisponiveis = [];
let livrosIndisponiveis = [];

for (let i = 0; i < books.length; i++) {
  if (books[i].availableStatus) {
    livrosIndisponiveis.push(books[i]);
  } else {
    livrosDisponiveis.push(books[i]);
  }
}
books = [];
for (let i = 0; i < livrosDisponiveis.length; i++) {
  books.push(livrosDisponiveis[i]);
}

console.log('#3 [unavailableBooks]: ', livrosDisponiveis);
console.log('#3 [unavailableBooks]: ', livrosIndisponiveis);
console.log('#3 [unavailableBooks]: ', unavailableBooks);
console.log('#3 [books]: ', books);

/* 
  4. Sum the total of pages of ALL books and console log it.

  The result should be: 800
*/

const total = '';

console.log('#4: ', total);

/* 
  5. Create a black square with a 20px red border on top and a total size of 100px x 100px, centralize it in
  the middle of the screen (vertical and horizontally). When I click on the square, it should rotate 360 degrees
  within 2 seconds. If I click again, it should rotate back 360 degrees.
*/

/* YOUR CODE HERE */

/*
  6. Consider you have an array with multiple items inside, including other arrays.
  Flatten the array, reducing the depth level to the root, and console the list of items from inside.
  See the example below:

  const numbers = [1, [2, 3], 4, [5, 6, [7, 8, 9], 0]];

  Variations:
  - const numbers = [1, , , [2, 3]];
  - const numbers = [[1, [2, [3]], 4], , , [5]];

  The result should be: 1 2 3 4 5 6 7 8 9 0
*/

const numbers = [1, [2, 3], 4, [5, 6, [7, 8, 9], 0]];

const flatNumbers = '';

console.log('#6: flatNumbers: ', flatNumbers);

/*
  7. Merge the object below, `hero`, with `result` removing the `id` property.

  The result should be:

  {
    name: "Clark"
    age: "82"
    job: "Senior UI Engineer"
    birthYear: "1938"
    lastName: "Kent"
    timestamp: "2038-01-19 03:14:07' UTC"
  }
*/

const hero = {
  timestamp: "2038-01-19 03:14:07' UTC",
  name: 'Clark',
  lastName: 'Kent',
  birthYear: '1938',
  age: '82',
  id: '01'
};

/* YOUR CODE HERE */

console.log('#7: ', '');

/*
  8. Adapt your previous solution so you can remove multiple properties. Eg: id and timestamp

  The result should be:

  {
    name: "Clark"
    age: "82"
    job: "Senior UI Engineer"
    birthYear: "1938"
    lastName: "Kent"
  }
*/

/* YOUR CODE HERE */

console.log('#8: ' /* YOUR CODE HERE */);
