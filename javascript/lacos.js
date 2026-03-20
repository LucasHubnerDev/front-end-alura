// laços de repetição servem para executar um bloco de código várias vezes

// FOR (mais usado)

// estrutura:
// for (inicializacao; condicao; incremento)

for (let i = 0; i < 5; i++) {
  // i começa em 0, roda enquanto i < 5, incrementa +1 a cada volta
  console.log("for:", i);
}

// WHILE

// executa enquanto a condição for verdadeira
let j = 0;

while (j < 5) {
  console.log("while:", j);
  j++; // importante para não criar loop infinito
}

// DO WHILE

// executa pelo menos uma vez, depois verifica a condição
let k = 0;

do {
  console.log("do while:", k);
  k++;
} while (k < 5);

// FOR OF (arrays)

// percorre valores de um array
let nomes = ["Lucas", "Ana", "Joao"];

for (let nome of nomes) {
  console.log("for of:", nome);
}

// FOR IN (objetos)

// percorre chaves de um objeto
let usuario = {
  nome: "Lucas",
  idade: 20,
  cidade: "Joinville"
};

for (let chave in usuario) {
  console.log(chave, ":", usuario[chave]);
}

// BREAK e CONTINUE

for (let x = 0; x < 5; x++) {
  if (x === 3) {
    break; // para o loop completamente
  }
  console.log("break:", x);
}

for (let y = 0; y < 5; y++) {
  if (y === 2) {
    continue; // pula essa iteração
  }
  console.log("continue:", y);
}

// OBSERVAÇÕES IMPORTANTES

// cuidado com loops infinitos (quando a condição nunca fica falsa)
// for é mais usado quando você sabe quantas vezes vai repetir
// while é usado quando não sabe exatamente quantas vezes
// for of é ideal para arrays
// for in é ideal para objetos