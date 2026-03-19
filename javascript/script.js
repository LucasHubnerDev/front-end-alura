// ==========================
// VAR (forma antiga)
// ==========================

function exemploVar() {
  var nome = "Lucas";

  if (true) {
    var nome = "João"; // mesma variável (escopo de função)
    console.log("Dentro do bloco (var):", nome);
  }

  console.log("Fora do bloco (var):", nome); // João
}

exemploVar();


// ==========================
// LET (moderno)
// ==========================

function exemploLet() {
  let idade = 18;

  if (true) {
    let idade = 20; // variável diferente (escopo de bloco)
    console.log("Dentro do bloco (let):", idade);
  }

  console.log("Fora do bloco (let):", idade); // 18 
}

exemploLet();


// ==========================
// CONST (constante)
// ==========================

function exemploConst() {
  const pi = 3.14;
  console.log("Valor de pi:", pi);

  // pi = 3.1415; ERRO (não pode reatribuir)

  const pessoa = {
    nome: "Lucas"
  };

  pessoa.nome = "João"; // ✅ permitido (mudar conteúdo)
  console.log("Objeto const alterado:", pessoa);

  // pessoa = {}; ERRO (não pode trocar o objeto inteiro)
}

exemploConst();


// ==========================
// VARIÁVEL GLOBAL (forma antiga)
// ==========================

//  Forma antiga (evite isso)
nomeGlobal = "Variável global sem declaração";

function mostrarGlobal() {
  console.log("Dentro da função:", nomeGlobal);
}

mostrarGlobal();

// No navegador:
console.log("No escopo global:", window.nomeGlobal);


// ==========================
// BOA PRÁTICA MODERNA
// ==========================

function exemploModerno() {
  const nome = "Lucas"; // padrão
  let contador = 0;     // usa let se precisar mudar

  contador++;
  console.log(nome, contador);
}

exemploModerno();