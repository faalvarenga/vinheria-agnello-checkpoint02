# 🍷 Vinheria Agnello – Checkpoint 02

Sistema de avaliação de estoque e tendência de vinhos, feito em JavaScript para a Vinheria Agnello.

## 📋 O que foi implementado

O sistema funciona com `prompt()` e `alert()` e mostra os detalhes de cada vinho no console do navegador (F12 → Console).

- **Cadastro em sequência:** cadastra vários vinhos seguidos (nome, safra e quantidade em estoque), perguntando ao final de cada um se o usuário deseja cadastrar outro. O limite é de 5 vinhos.
- **Validação das entradas:** o nome não pode ficar vazio, e a safra e a quantidade precisam ser números maiores que zero. Se o valor for inválido, a pergunta é repetida.
- **Estoque baixo:** avisa quando um vinho tem menos de 5 garrafas em estoque.
- **Classificação pela idade da safra:**
  - Jovem: até 3 anos
  - Amadurecido: de 4 a 10 anos
  - Antigo: mais de 10 anos
- **Resumo final:** total de cadastros, quantos vinhos estão com estoque baixo e qual é o vinho com a safra mais antiga.

### Conceitos de JavaScript aplicados

- **Funções reutilizáveis:** `lerTexto`, `lerNumero`, `verificarEstoque`, `classificarVinho` e `mostrarDados`.
- **Escopo:** as variáveis criadas dentro das funções são usadas apenas localmente.
- **Laços de repetição:** `while` no cadastro em sequência e nas validações.
- **Sem arrays e sem objetos:** cada vinho é guardado em variáveis numeradas (`nome1`, `safra1`, `qtd1`...).

## 📁 Estrutura

```
vinheria-agnello-checkpoint02/
├── index.html
├── README.md
└── src/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── assets/
        └── imgs/
            └── vinho.png
```

## 👥 Integrantes

- Fabrício Milan Alvarenga – RM576423
- Rodrigo Roschi Dutra – RM576685

## 🔗 GitHub Pages

https://faalvarenga.github.io/vinheria-agnello-checkpoint02/
