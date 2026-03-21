// declarando um array
// array é uma lista de itens em uma única variável
// uso de colchetes para adicionar varios elementos separados por vírgula em uma única variável.
// arrays são indexados, cada elemento tem uma numeração relativa a sua posição começando a contar a partir do zero
const frutas = ["banana", "maçã", "laranja"];
console.log(frutas);
console.log(`tem ${frutas.length} frutas no array`);

// método push para adicionar elementos ao final de um array
frutas.push("morango");

// método splice usado para remover x elementos a partir de determinado index
frutas.splice(0, 2);
console.log(frutas);

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// posso usar foreach para percorrer todos os elementos de um array
frutas.forEach((fruta, index) => {
  console.log(`índice:${index}; fruta:${fruta}`);
});

// for of - usado para percorrer um array acessando diretamente o valor de cada elemento
for (const fruta of frutas) {
  console.log(fruta);
}
