// em JavaScript, valores podem ser considerados verdadeiros (truthy)
// ou falsos (falsy) em contextos como if

// valores falsy (sempre considerados false)
console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(-0));         // false
console.log(Boolean(0n));         // false (BigInt zero)
console.log(Boolean(""));         // false (string vazia)
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

// qualquer outro valor é truthy (verdadeiro)
console.log(Boolean(true));        // true
console.log(Boolean(1));           // true
console.log(Boolean(-10));         // true
console.log(Boolean("texto"));     // true
console.log(Boolean("0"));         // true (string não vazia)
console.log(Boolean([]));          // true (array vazio ainda é truthy)
console.log(Boolean({}));          // true (objeto vazio também)

// uso prático com if
let nome = "";

// string vazia é falsy
if (nome) {
  console.log("Nome preenchido");
} else {
  console.log("Nome vazio");
}

// exemplo com número
let quantidade = 0;

// 0 é falsy
if (quantidade) {
  console.log("Tem itens");
} else {
  console.log("Nao tem itens");
}

// exemplo comum: valor padrão
let usuario = null;

// se usuario for falsy, usa valor padrão
let nomeUsuario = usuario || "Visitante";
console.log(nomeUsuario);

// exemplo com &&
// retorna o primeiro valor falsy ou o último truthy
console.log(true && "ok");   // "ok"
console.log(false && "ok");  // false

// observações importantes:
// falsy são poucos valores específicos
// o resto é considerado truthy
// muito usado em validações simples e valores padrão