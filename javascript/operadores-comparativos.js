// declaração de variáveis
let idade = 20;
let temCarteira = true;
let usuario = "admin";
let senha = "1234";
let nota = 6.5;
let frequencia = 80;

// operadores de comparação básicos
console.log(idade > 18);   // maior que
console.log(idade < 18);   // menor que
console.log(idade >= 18);  // maior ou igual
console.log(idade <= 18);  // menor ou igual

// igualdade (comparando valor apenas, ignora tipo)
console.log(10 == "10");   // true (conversão automática)

// igualdade estrita (compara valor e tipo)
console.log(10 === "10");  // false

// diferente
console.log(10 != "10");   // false
console.log(10 !== "10");  // true

// exemplos com operadores lógicos
// && (AND) retorna true se todas condições forem verdadeiras
if (idade >= 18 && temCarteira === true) {
  console.log("Pode dirigir");
} else {
  console.log("Nao pode dirigir");
}

// || (OR) retorna true se pelo menos uma condição for verdadeira
if (usuario === "admin" || usuario === "editor") {
  console.log("Acesso permitido");
} else {
  console.log("Acesso negado");
}

// ! (NOT) inverte o valor booleano
if (!temCarteira) {
  console.log("Nao possui carteira");
} else {
  console.log("Possui carteira");
}

// exemplo completo com múltiplas condições
if (usuario === "admin" && senha === "1234") {
  console.log("Login bem-sucedido");
} else if (usuario !== "admin") {
  console.log("Usuario invalido");
} else {
  console.log("Senha incorreta");
}

// exemplo com notas e condições encadeadas
if (nota >= 7 && frequencia >= 75) {
  console.log("Aprovado");
} else if (nota >= 5 && nota < 7) {
  console.log("Recuperacao");
} else {
  console.log("Reprovado");
}

// cuidado com comparações que fazem conversão automática
console.log(0 == false);   // true (conversão implícita)
console.log(0 === false);  // false (tipos diferentes)