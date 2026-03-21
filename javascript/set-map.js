
// SET

// Set é uma coleção de valores únicos (não permite repetição)
let numeros = new Set();

// adicionando valores
numeros.add(1);
numeros.add(2);
numeros.add(2); // duplicado, será ignorado
numeros.add(3);

console.log(numeros); // {1, 2, 3}

// verificando se existe
console.log(numeros.has(2)); // true

// removendo valor
numeros.delete(2);
console.log(numeros); // {1, 3}

// tamanho do Set
console.log(numeros.size); // 2

// percorrendo Set
for (let n of numeros) {
  console.log(n);
}

// convertendo array para Set (remove duplicados)
let lista = [1, 2, 2, 3, 4, 4];
let semDuplicados = new Set(lista);

console.log(semDuplicados); // {1, 2, 3, 4}

// voltando para array
let arrayLimpo = [...semDuplicados];
console.log(arrayLimpo); // [1, 2, 3, 4]

// MAP

// Map é uma coleção de chave -> valor
// diferente de objetos, aceita qualquer tipo de chave
let usuario = new Map();

// adicionando valores
usuario.set("nome", "Lucas");
usuario.set("idade", 20);

// chave pode ser qualquer tipo
usuario.set(1, "numero como chave");
usuario.set(true, "boolean como chave");

console.log(usuario);

// acessando valores
console.log(usuario.get("nome")); // Lucas

// verificando se existe
console.log(usuario.has("idade")); // true

// removendo
usuario.delete("idade");

// tamanho do Map
console.log(usuario.size);

// percorrendo Map
for (let [chave, valor] of usuario) {
  console.log(chave, valor);
}

// usando forEach
usuario.forEach((valor, chave) => {
  console.log(chave, valor);
});

// limpando tudo
usuario.clear();
console.log(usuario); // Map vazio

// DIFERENÇA PRINCIPAL

// Set -> guarda valores únicos
// Map -> guarda pares chave/valor
// ambos são iteráveis (podem usar for...of)