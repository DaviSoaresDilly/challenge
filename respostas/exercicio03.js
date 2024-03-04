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