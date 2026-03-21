const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// método filter
// usada para criar uma nova lista com os valores desejados
const numerosPares = numeros.filter((numero) => numero % 2 === 0);
const numerosImpares = numeros.filter((n) => n % 2 !== 0);
console.log(numeros);
console.log(numerosPares);
console.log(numerosImpares);

// map
// retorna uma nova lista, com todos os elementos do array anterior transformados
const numerosDuplicados = numeros.map(n => n * 2)
console.log(numerosDuplicados)
