const pessoa = {
    nome: 'Mrstranger',
    idade: '768',
    pets: ['Luke'],
    nacionalidade: 'desconhecida'
}

// for in pode ser usado para pegar a chave em objetos
for (const key in pessoa) {
    // console.log(pessoa[key])
}

const keys = Object.keys(pessoa)
const values = Object.values(pessoa)
const entries = Object.entries(pessoa)
console.log(keys, values, entries)
