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