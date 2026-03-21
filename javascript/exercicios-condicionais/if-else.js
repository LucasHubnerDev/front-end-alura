// soma e multiplição
const n1 = 4;
const n2 = 6;
const operacao = "*";

if (operacao === "+") {
  console.log(n1 + n2);
} else if (operacao === "*") {
  console.log(n1 * n2);
} else {
  console.log("operação inválida");
}

// calculo de bonus

const salario = 149;
let bonus = 0;

if (salario < 50) {
  bonus = 5;
} else if (salario >= 50 && salario < 100) {
  bonus = 7;
} else if (salario >= 100 && salario < 150) {
  bonus = 10;
} else if (salario >= 150 && salario <= 200) {
  bonus = 12;
}

console.log(`seu bonus é de ${bonus}%`);
