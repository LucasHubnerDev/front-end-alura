// DESTRUCTURING
// permite extrair valores de arrays e objetos de forma simples


// ARRAY DESTRUCTURING

let numeros = [10, 20, 30];

// forma tradicional
let a = numeros[0];
let b = numeros[1];

// destructuring
let [x, y, z] = numeros;

console.log(x); // 10
console.log(y); // 20
console.log(z); // 30


// ignorando valores

let [primeiro, , terceiro] = numeros;

console.log(primeiro); // 10
console.log(terceiro); // 30


// valor padrão

let [p = 0, q = 0, r = 0, s = 100] = numeros;

console.log(s); // 100 (não existe no array)


// trocando valores

let n1 = 1;
let n2 = 2;

[n1, n2] = [n2, n1];

console.log(n1); // 2
console.log(n2); // 1


// OBJECT DESTRUCTURING

let usuario = {
  nome: "Lucas",
  idade: 20,
  cidade: "Joinville"
};

// forma tradicional
let nome = usuario.nome;

// destructuring
let { nome: nomeUsuario, idade, cidade } = usuario;

console.log(nomeUsuario);
console.log(idade);
console.log(cidade);


// valor padrão em objeto

let { pais = "Brasil" } = usuario;

console.log(pais);


// destructuring em função

function mostrar({ nome, idade }) {
  console.log(nome, idade);
}

mostrar(usuario);


// destructuring com rest

let { nome: n, ...resto } = usuario;

console.log(n);       // nome
console.log(resto);   // resto das propriedades


// observações importantes

// em arrays a ordem importa
// em objetos o nome da propriedade importa
// pode usar valores padrão
// deixa o código mais limpo e legível