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