// pares e impares
let pares = 0;
let impares = 0;

const limite = 20;
for (let i = 0; i <= limite; i++) {
  i % 2 == 0 ? pares++ : impares++;
}

console.log(`números pares:${pares}`);
console.log(`números ímpares:${impares}`);

// soma
let soma;
for (let i = 0; i <= 100; i++) {
  soma += i;
}

console.log(`soma entre todos números de 0 a 100 = ${soma}`)

// tabuada
const numero = 10
for (let i = 0; i <= 10; i++) {
    console.log(`${numero} * ${i} = ${numero * i}`)
}

// contagem regressiva
let tempo = 10;

while(tempo >= 0) {
    console.log(`${tempo}s`)
    tempo--;
}

console.log("contagem finalizada")

