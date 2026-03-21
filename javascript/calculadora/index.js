// importa o módulo readline
import { createInterface} from "readline";

// importa funções de outro arquivo
import { soma, subtracao } from "./calculadora.js";

// cria a interface de leitura
const leitor = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// primeira pergunta
leitor.question("primeiro número: ", (n1) => {

  // segunda pergunta
  leitor.question("segundo número: ", (n2) => {

    // terceira pergunta
    leitor.question("deseja realizar soma ou subtracao? ", (escolha) => {

      const numero1 = Number(n1);
      const numero2 = Number(n2);

      // verifica a escolha do usuário
      if (escolha === "soma") {
        console.log(soma(numero1, numero2));
      } else if (escolha === "subtracao") {
        console.log(subtracao(numero1, numero2));
      } else {
        console.log("opcao invalida");
      }

      // fecha o leitor no final de tudo
      leitor.close();
    });

  });

});