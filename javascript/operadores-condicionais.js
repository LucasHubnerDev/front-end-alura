// o if é usado para verificar uma condição
// se a condição for verdadeira (true), o bloco é executado

let idade = 16;

// if simples
if (idade >= 18) {
  console.log("Maior de idade");
}

// else é executado quando o if for falso
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// else if permite testar múltiplas condições
let nota = 6;

// fluxo:
// 1. verifica o if
// 2. se for falso, verifica o else if
// 3. se nenhum for verdadeiro, executa o else

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperacao");
} else {
  console.log("Reprovado");
}

// exemplo com várias condições
let hora = 14;

// verifica diferentes períodos do dia
if (hora < 12) {
  console.log("Bom dia");
} else if (hora >= 12 && hora < 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}

// exemplo mais completo
let usuario = "admin";
let senha = "1234";

// o código verifica as condições em ordem
if (usuario === "admin" && senha === "1234") {
  console.log("Login correto");
} else if (usuario !== "admin") {
  console.log("Usuario invalido");
} else {
  console.log("Senha incorreta");
}

// observações importantes:
// apenas o primeiro bloco verdadeiro é executado
// o else não precisa de condição
// você pode ter vários else if, mas apenas um else no final