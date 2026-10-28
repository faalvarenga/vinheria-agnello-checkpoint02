// Vinheria Agnello - Checkpoint 02
// Sistema de cadastro de vinhos com prompt() e alert(), sem arrays e sem objetos

// ===== FUNÇÕES =====

// Avisa se o estoque está baixo (menos de 5) e devolve true ou false
function verificarEstoque(quantidade) {
    if (quantidade < 5) {
        alert("Estoque está baixo!");
        return true;
    } else {
        alert("Estoque está OK!");
        return false;
    }
}

// Classifica o vinho pela idade: jovem (até 3 anos), amadurecido (4 a 10) ou antigo (mais de 10)
// A variável "idade" é local: só existe dentro desta função
function classificarVinho(anoSafra) {
    let idade = 2026 - anoSafra;

    if (idade <= 3) {
        return "Safra Jovem";
    } else if (idade <= 10) {
        return "Safra Amadurecida";
    } else {
        return "Safra Antiga";
    }
}

// Pede um número e repete a pergunta enquanto o valor for inválido (texto, zero ou negativo)
function lerNumero(mensagem) {
    let numero = Number(prompt(mensagem));

    while (isNaN(numero) || numero <= 0) {
        alert("Valor inválido! Digite um número maior que 0");
        numero = Number(prompt(mensagem));
    }

    return numero;
}

// Pede um texto e não aceita resposta vazia nem o botão Cancelar
function lerTexto(mensagem) {
    let texto = prompt(mensagem);

    while (texto === null || texto.trim() === "") {
        alert("Texto Inválido! Digite um nome válido.");
        texto = prompt(mensagem);
    }

    return texto;
}

// Mostra os dados do vinho no console e avisa o usuário com um alert
function mostrarDados(nomeVinho, anoSafra, quantidade, classificacao) {
    console.log("Nome: " + nomeVinho);
    console.log("Safra: " + anoSafra);
    console.log("Quantidade: " + quantidade);
    console.log("Classificação: " + classificacao);
    alert("Vinho cadastrado! Confira os detalhes no console.");
}

// ===== VARIÁVEIS DE CONTROLE =====

// Contadores e dados usados no resumo final
let contador = 0;
let continuar = "s";
let estoqueBaixo = 0;
let safraMaisAntiga = 0;
let nomeMaisAntigo = "";

// Variáveis para guardar cada vinho (sem arrays, como pede o CP)
// Ficam fora do laço para não serem apagadas a cada repetição

let nome1 = "";
let safra1 = 0;
let qtd1 = 0;

let nome2 = "";
let safra2 = 0;
let qtd2 = 0;

let nome3 = "";
let safra3 = 0;
let qtd3 = 0;

let nome4 = "";
let safra4 = 0;
let qtd4 = 0;

let nome5 = "";
let safra5 = 0;
let qtd5 = 0;

// ===== CADASTRO =====

// Repete o cadastro enquanto o usuário quiser (máximo de 5 vinhos)
while (continuar === "s" && contador < 5) {
    // Lê os dados do vinho, já validados pelas funções
    let nome = lerTexto("Digite o nome do vinho: ");
    let safra = lerNumero("Qual o ano da safra do seu vinho?");
    let qtd = lerNumero("Quantos desse vinho você tem em estoque?");

    // Classifica, mostra os dados e confere o estoque
    let classificacao = classificarVinho(safra);
    mostrarDados(nome, safra, qtd, classificacao);

    if (verificarEstoque(qtd)) {
        estoqueBaixo = estoqueBaixo + 1;
    }

    // Conta mais um vinho cadastrado
    contador = contador + 1;

    // Verifica se este é o vinho mais antigo até agora
    // (o primeiro vinho sempre entra, porque ainda não há outro para comparar)
    if (contador === 1 || safra < safraMaisAntiga) {
        safraMaisAntiga = safra;
        nomeMaisAntigo = nome;
    }

    // Guarda o vinho atual nas variáveis do número dele
    if (contador === 1) {
        nome1 = nome;
        safra1 = safra;
        qtd1 = qtd;
    } else if (contador === 2) {
        nome2 = nome;
        safra2 = safra;
        qtd2 = qtd;
    } else if (contador === 3) {
        nome3 = nome;
        safra3 = safra;
        qtd3 = qtd;
    } else if (contador === 4) {
        nome4 = nome;
        safra4 = safra;
        qtd4 = qtd;
    } else if (contador === 5) {
        nome5 = nome;
        safra5 = safra;
        qtd5 = qtd;
    }

    // Só pergunta se quer continuar enquanto não chegou no limite
    if (contador < 5) {
        continuar = prompt("Deseja cadastrar outro vinho? (s/n)");
    } else {
        alert("Limite de 5 vinhos atingido!");
    }
}

// ===== RESUMO FINAL =====

alert("Total de vinhos cadastrados: " + contador);
alert("Vinhos com estoque baixo: " + estoqueBaixo);
alert("Vinho mais antigo: " + nomeMaisAntigo + " (safra " + safraMaisAntiga + ")");
