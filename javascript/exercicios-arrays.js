// imprimindo nomes de um array com for of
const nomes = ["lucas", "keynner", "diego", "bianca", "alex"];
for (value of nomes) {
  console.log(`${value} entrou no sistema`);
}

// método shift e push
const frutas = ["laranja", "banana", "morango"];
frutas.push("stramberry");
console.log(frutas);
frutas.shift();
console.log(frutas);

// proprieda length
const paises = ["china", "corea", "estados unidos", "irã", "russia", "ucrania"];
console.log(`${paises.length} paises estão em guerra`);

// soma de todos os numeros
const numeros = [1, 2, 3, 4, 5, 6];
const initialValue = 0;
// método reduce
const sum = numeros.reduce(
  (acc, currentValue) => acc + currentValue,
  initialValue,
);
console.log(sum);

// média
const notas = [4, 8, 9, 7];
const media = notas / notas.length;
if (media >= 7) {
  console.log("aprovado");
} else console.log("reprovado");

// descontos
const precos = [100, 200, 300]
const precosComDesconto = precos.map(value => value * 0.9)
console.log(precosComDesconto)

// filtro com dois parametros
const tarefas = [
    {tarefa:"lavar casa", feita:true},
    {tarefa:"lavar louça", feita:true},
    {tarefa:"lavar roupa", feita:false},
    {tarefa:"lavar carro", feita:true},
]

const tarefasPendentes = tarefas.filter(tarefa => !tarefa.feita)
console.log(tarefasPendentes)