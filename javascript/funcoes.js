// funções servem para reutilizar código
// você define uma função uma vez e pode chamá-la várias vezes

// DECLARAÇÃO DE FUNÇÃO

function saudacao() {
  console.log("Ola");
}

// chamando a função
saudacao();

// FUNÇÃO COM PARÂMETROS

// parâmetros são valores recebidos pela função
function somar(a, b) {
  console.log(a + b);
}

somar(10, 5); // argumentos passados para a função

// FUNÇÃO COM RETORNO

// return devolve um valor
function multiplicar(a, b) {
  return a * b;
}

let resultado = multiplicar(4, 3);
console.log(resultado);

// FUNÇÃO ANÔNIMA

// função sem nome atribuída a uma variável
let subtrair = function (a, b) {
  return a - b;
};

console.log(subtrair(10, 3));

// ARROW FUNCTION

// forma mais moderna de escrever funções
let dividir = (a, b) => {
  return a / b;
};

console.log(dividir(10, 2));

// arrow function simplificada (quando tem só uma linha)
let dobrar = (n) => n * 2;

console.log(dobrar(5));

// PARÂMETROS PADRÃO

// define um valor padrão caso não seja passado argumento
function saudacaoNome(nome = "Visitante") {
  console.log("Ola, " + nome);
}

saudacaoNome();        // usa valor padrão
saudacaoNome("Lucas"); // usa valor passado

// ESCOPO (SCOPE)

let global = "sou global";

function testeEscopo() {
  let local = "sou local";
  console.log(global); // acessa variável global
  console.log(local);  // acessa variável local
}

testeEscopo();

// console.log(local); // erro, variável local não existe fora da função

// FUNÇÃO DENTRO DE FUNÇÃO

function externa() {
  function interna() {
    console.log("Funcao interna");
  }
  interna();
}

externa();

// OBSERVAÇÕES IMPORTANTES

// funções ajudam a organizar o código
// use return quando precisar de um resultado
// arrow functions são mais usadas atualmente
// variáveis dentro da função não existem fora dela