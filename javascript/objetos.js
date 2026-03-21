// um objeto é uma estrura que agrupa dados relacionados em formato de pares: chave e valor
let pessoa = {
  nome: "L",
  idade: 17,
  temCarteira: false,
};

// adicionando uma propriedade ao objeto
pessoa.sobrenome = "H";

// console.log(`me chamo ${pessoa.nome} ${pessoa.sobrenome}`);

const livro = {
  nome: "Vidas Secas",
  autor: "Graciliano Ramos",
  paginas: "66",
  idiomas: ["pt-br"],
};

// adicionando um elemento a um array dentro do objeto
livro.idiomas.push("es");

// deletando uma propriedade
delete livro.paginas;

// ao tentar acessar uma propriedade que não existe, vai ser retornado undefined
console.log(livro.album)

delete livro.autor

const autor = {
    nome: "Graciliano de Ramos",
    idade: "67",
    genero: "Masculino"
}

livro.autor = autor
