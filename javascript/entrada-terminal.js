// importa o módulo "readline" do Node.js
// esse módulo permite ler dados digitados no terminal
import readline from "readline";

// cria uma interface de leitura e escrita
// input: de onde os dados vêm (teclado)
// output: para onde os dados vão (terminal)
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// faz uma pergunta no terminal
// o segundo parâmetro é uma função callback que recebe a resposta
leitor.question("Qual o seu nome ", (nome) => {

    // exibe o nome digitado
    console.log("hello", nome);
    console.log("Boas vindas ao sistema");

    // faz outra pergunta dentro da primeira (encadeamento de callbacks)
    leitor.question("qual a sua idade ", (age) => {

        // "age" vem como string, mas o JS converte automaticamente na comparação
        if (age < 18) {
            console.log("você é menor de idade");
        } else {
            console.log("você é maior de idade");
        }

        // fecha a interface, encerrando o programa
        leitor.close();
    });
});