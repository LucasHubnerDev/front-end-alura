
// CRIANDO DATAS

// data atual
let agora = new Date();
console.log(agora);

// data específica (ano, mês, dia, hora, minuto, segundo)
// mês começa do 0 (0 = janeiro, 11 = dezembro)
let dataEspecifica = new Date(2025, 0, 15, 10, 30, 0);
console.log(dataEspecifica);

// a partir de string
let dataString = new Date("2025-01-15");
console.log(dataString);

// timestamp (milissegundos desde 1970)
let timestamp = new Date(0);
console.log(timestamp);

// PEGANDO VALORES

let data = new Date();

console.log(data.getFullYear()); // ano
console.log(data.getMonth());    // mês (0 a 11)
console.log(data.getDate());     // dia do mês
console.log(data.getDay());      // dia da semana (0 = domingo)
console.log(data.getHours());    // hora
console.log(data.getMinutes());  // minutos
console.log(data.getSeconds());  // segundos
console.log(data.getMilliseconds()); // milissegundos

// ALTERANDO VALORES

let d = new Date();

d.setFullYear(2030);
d.setMonth(11); // dezembro
d.setDate(25);
d.setHours(12);

console.log(d);

// FORMATANDO DATA

// formato padrão
console.log(data.toString());

// formato ISO (padrão internacional)
console.log(data.toISOString());

// apenas data
console.log(data.toDateString());

// apenas hora
console.log(data.toTimeString());

// TIMESTAMP

// retorna milissegundos atuais
let agoraMs = Date.now();
console.log(agoraMs);

// converter data para milissegundos
let ms = data.getTime();
console.log(ms);

// CALCULANDO DIFERENÇA ENTRE DATAS

let inicio = new Date("2025-01-01");
let fim = new Date("2025-01-10");

// diferença em milissegundos
let diferenca = fim - inicio;

// convertendo para dias
let dias = diferenca / (1000 * 60 * 60 * 24);

console.log(dias);

// OBSERVAÇÕES IMPORTANTES

// meses começam em 0 (janeiro = 0)
// datas podem ser comparadas com >, <
// sempre cuidado com fuso horário
// Date trabalha com milissegundos internamente