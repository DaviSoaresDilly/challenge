// no prmeiro momento troquei o const por let para poder sobrescrever os valores, ai dei uma pesquizada e vi que da pra usar o filter 
const books = [
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


/* YOUR CODE HERE */

// funciona so se a variavel books for let, se for const da erro, mais sabia fazer so assim
/*
let livrosDisponiveis = [];
let livrosIndisponiveis = [];

for (let i = 0; i < books.length; i++) {
  if (books[i].availableStatus) {
    livrosDisponiveis.push(books[i]);
  } else {
    livrosIndisponiveis.push(books[i]);
  }
}
books = [];
for (let i = 0; i < livrosDisponiveis.length; i++) {
  books.push(livrosDisponiveis[i]);
}

console.log('#3 [disponiveis]: ', livrosDisponiveis);
console.log('#3 [indisponiveis]: ', livrosIndisponiveis);
*/

let unavailableBooks = books.filter(book => !book.availableStatus);
// let availableBooks = books.filter(book => book.availableStatus); vai dar erro, mas eu posso fazer isso com let

// cara eu tentei fazer so com filter mas nao consegui falhei miseravelmente, ai fui da uma pesquisada https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter pra ver se tinha alguma solução, mas acabei copiando 
unavailableBooks.forEach(book => {
  const index = books.indexOf(book);
  if (index > -1) {
    books.splice(index, 1);
  }
});


console.log('#3 [unavailableBooks]: ', unavailableBooks);
console.log('#3 [books]: ', books);