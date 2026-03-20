// operador ternário é uma forma curta de escrever um if/else
// estrutura:
// condição ? valor_se_verdadeiro : valor_se_falso

let idade = 18;

// exemplo básico
let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(resultado);

// equivalente usando if/else
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// usando ternário direto no console
console.log(idade >= 18 ? "Pode entrar" : "Nao pode entrar");

// exemplo com variável booleana
let temCarteira = true;

let podeDirigir = temCarteira ? "Pode dirigir" : "Nao pode dirigir";
console.log(podeDirigir);

// exemplo com operadores lógicos
let nota = 6;

let status = nota >= 7 ? "Aprovado" : "Reprovado";
console.log(status);

// ternário encadeado (equivalente a if / else if / else)
let resultadoFinal =
  nota >= 7 ? "Aprovado" : nota >= 5 ? "Recuperacao" : "Reprovado";

console.log(resultadoFinal);

// observações importantes:
// use ternário para condições simples
// para muitas condições, prefira if/else para manter legibilidade
// o ternário sempre retorna um valor
