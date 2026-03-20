// HOF (Higher Order Functions) são funções que:
// 1. recebem outras funções como parâmetro
// 2. ou retornam uma função

// =====================
// FUNÇÃO COMO PARÂMETRO
// =====================

function saudacao(nome) {
  return "Ola, " + nome;
}

function processarUsuario(callback) {
  // callback é uma função recebida como argumento
  let nome = "Lucas";
  console.log(callback(nome));
}

// passando função como argumento
processarUsuario(saudacao);

// =====================
// FUNÇÃO ANÔNIMA COMO CALLBACK
// =====================

processarUsuario(function (nome) {
  return "Bem-vindo, " + nome;
});

// =====================
// ARROW FUNCTION COMO CALLBACK
// =====================

processarUsuario((nome) => {
  return "Usuario: " + nome;
});

// =====================
// FUNÇÃO QUE RETORNA OUTRA FUNÇÃO
// =====================

function multiplicador(fator) {
  // retorna uma nova função
  return function (numero) {
    return numero * fator;
  };
}

let dobrar = multiplicador(2);
let triplicar = multiplicador(3);

console.log(dobrar(5));    // 10
console.log(triplicar(5)); // 15

// =====================
// EXEMPLOS REAIS COM ARRAYS
// =====================

let numeros = [1, 2, 3, 4, 5];

// map cria um novo array transformando os valores
let dobrados = numeros.map(function (n) {
  return n * 2;
});

console.log(dobrados);

// filter retorna apenas valores que passam na condição
let maioresQue2 = numeros.filter(function (n) {
  return n > 2;
});

console.log(maioresQue2);

// reduce reduz o array a um único valor
let soma = numeros.reduce(function (acumulador, n) {
  return acumulador + n;
}, 0);

console.log(soma);

// =====================
// OBSERVAÇÕES IMPORTANTES
// =====================

// funções são tratadas como valores em JavaScript
// HOF são muito usadas com arrays
// callbacks são funções passadas como argumento
// map, filter e reduce são exemplos clássicos de HOF