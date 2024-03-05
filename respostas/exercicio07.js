// confesso que não entendi muito bem o que era para fazer, pq eu podia so reescrever o codigo para deixa ele do jeito certo mas se era so pra ver como deleta uma propriedade blz

const hero =[ 
  {
    timestamp: "2038-01-19 03:14:07' UTC",
    name: 'Clark',
    lastName: 'Kent',
    birthYear: '1938',
    age: '82',
    id: '01'
  },
  {
    name: "Clark",
    age: "82",
    job: "Senior UI Engineer",
    birthYear: "1938",
    lastName: "Kent",
    timestamp: "2038-01-19 03:14:07' UTC"
  }
];

const mesclaObjeto = {
  name: hero[0].name,
  age: hero[0].age,
  job: hero[1].job,
  birthYear: hero[1].birthYear,
  lastName: hero[1].lastName,
  timestamp: hero[1].timestamp
}

delete mesclaObjeto.id;

console.log('#7: ', mesclaObjeto);