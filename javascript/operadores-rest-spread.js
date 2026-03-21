// REST (...)
// junta vários valores em um único array

function somar(...numeros) {
  // numeros vira um array com todos os argumentos
  let total = 0;

  for (let n of numeros) {
    total += n;
  }

  return total;
}

console.log(somar(1, 2, 3, 4)); // 10


// REST com parâmetros mistos

function mostrarUsuario(nome, ...dados) {
  // nome é o primeiro argumento
  // dados recebe o resto
  console.log(nome);
  console.log(dados);
}

mostrarUsuario("Lucas", 20, "Joinville");


// SPREAD (...)
// espalha valores de arrays ou objetos

let numeros = [1, 2, 3];

// espalhando dentro de outro array
let novoArray = [...numeros, 4, 5];
console.log(novoArray); // [1, 2, 3, 4, 5]

// copiando array
let copia = [...numeros];
console.log(copia);

// juntando arrays
let a = [1, 2];
let b = [3, 4];

let combinado = [...a, ...b];
console.log(combinado); // [1, 2, 3, 4]


// SPREAD com objetos

let usuario = {
  nome: "Lucas",
  idade: 20
};

// copiando objeto
let copiaUsuario = { ...usuario };
console.log(copiaUsuario);

// sobrescrevendo valores
let atualizado = {
  ...usuario,
  idade: 21
};

console.log(atualizado);


// diferença principal

// REST -> junta valores em um array (parâmetros de função)
// SPREAD -> espalha valores (arrays ou objetos)