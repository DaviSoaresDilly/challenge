const numbers = [1, [2, 3], 4, [5, 6, [7, 8, 9], 0]];

function achatarArray(array) {
  const resultado = [];

  function percorrerArray(array) {
    array.forEach(elemento => {
      if (Array.isArray(elemento)) {
        percorrerArray(elemento);
      } else {
        resultado.push(elemento);
      }
    })
  }
  percorrerArray(array);
  return resultado;
}

const flatNumbers = achatarArray(numbers);

console.log('#6: flatNumbers: ', flatNumbers);