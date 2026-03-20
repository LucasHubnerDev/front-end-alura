// o switch é usado para comparar um valor com vários casos possíveis
// é uma alternativa ao uso de vários if/else if

let dia = 3;

// estrutura básica do switch
switch (dia) {
  case 1:
    console.log("Domingo");
    break; // interrompe o switch

  case 2:
    console.log("Segunda");
    break;

  case 3:
    console.log("Terca");
    break;

  case 4:
    console.log("Quarta");
    break;

  case 5:
    console.log("Quinta");
    break;

  case 6:
    console.log("Sexta");
    break;

  case 7:
    console.log("Sabado");
    break;

  default:
    // executa se nenhum case for verdadeiro
    console.log("Dia invalido");
}

// exemplo com strings
let cor = "azul";

switch (cor) {
  case "vermelho":
    console.log("Cor quente");
    break;

  case "azul":
    console.log("Cor fria");
    break;

  case "verde":
    console.log("Cor neutra");
    break;

  default:
    console.log("Cor desconhecida");
}

// exemplo agrupando casos (sem break)
let fruta = "banana";

switch (fruta) {
  case "banana":
  case "maca":
  case "pera":
    // todos esses casos executam o mesmo bloco
    console.log("Fruta comum");
    break;

  case "kiwi":
    console.log("Fruta diferente");
    break;

  default:
    console.log("Fruta nao identificada");
}

// observações importantes:
// o switch usa comparação estrita (===)
// o break evita que continue executando os próximos casos
// sem break ocorre o chamado "fallthrough"
// o default é opcional, mas recomendado
