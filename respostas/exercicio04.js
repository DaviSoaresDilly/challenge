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

// foi no copilot, porem entendi o processo, 'reduce' metodo para redução de array com issso eu faço uma função de callback com dois parametros um pra acumular e o outro para receber o valor total.
const total = books.reduce((acc, book) => acc + book.pages, 0);

console.log('#4 [total]: ', total);