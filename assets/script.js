// ===========================
// PADRÃO STRATEGY - CLASSES DE DESCONTO
// ===========================

// Classe base (interface) para todas as estratégias de desconto
class DescontoStrategy {
aplicarDesconto(valor) {
    // Método abstrato: qualquer classe filha deve implementá-lo
    throw new Error("Método 'aplicarDesconto' deve ser implementado.");
}
}

// Desconto para estudantes: 15% de desconto para pedidos acima de R$ 29,90
class DescontoEstudante extends DescontoStrategy {
aplicarDesconto(valor) {
    return valor > 29.9 ? valor * 0.85 : valor; // Se maior que 29,9 aplica 15% de desconto
}
}

// Desconto para idosos: 20% de desconto sem valor mínimo
class DescontoIdoso extends DescontoStrategy {
aplicarDesconto(valor) {
    return valor * 0.8; // Aplica 20% de desconto
}
}

// Desconto de aniversário: R$ 10,00 de desconto para pedidos acima de R$ 25,00
class DescontoAniversario extends DescontoStrategy {
aplicarDesconto(valor) {
    return valor > 25 ? valor - 10 : valor; // Se valor > 25, subtrai 10 reais
}
}

// Estratégia sem desconto: retorna o valor original
class SemDesconto extends DescontoStrategy {
aplicarDesconto(valor) {
    return valor; // Retorna o valor sem alteração
}
}

// ===========================
// FUNÇÃO PRINCIPAL - CALCULA DESCONTO
// ===========================
function calcularDesconto() {
// Obtém o valor digitado pelo usuário
let valorInput = document.getElementById("valor").value;

// Substitui vírgula por ponto só na hora do cálculo (parseFloat só reconhece ponto como decimal)
valorInput = valorInput.replace(',', '.');

// Converte o valor digitado em número decimal
const valorPedido = parseFloat(valorInput);

// Obtém o tipo de desconto selecionado no select
const tipoDesconto = parseInt(document.getElementById("desconto").value);

// Validação: verifica se o valor é um número válido e maior que zero
if (isNaN(valorPedido) || valorPedido <= 0) {
    alert("Por favor, insira um valor válido para o pedido.");
    return; // Encerra a função se o valor for inválido
}

// ===========================
// SELEÇÃO DA ESTRATÉGIA DE DESCONTO
// ===========================
let desconto; // Variável que vai armazenar a estratégia escolhida
switch (tipoDesconto) {
    case 1: desconto = new DescontoEstudante(); break;
    case 2: desconto = new DescontoIdoso(); break;
    case 3: desconto = new DescontoAniversario(); break;
    default: desconto = new SemDesconto(); break;
}

// Aplica a estratégia selecionada e obtém o valor final com desconto
const valorFinal = desconto.aplicarDesconto(valorPedido);

// Atualiza o valor final na tela, formatando em moeda brasileira
document.getElementById("valorFinal").textContent = valorFinal.toLocaleString('pt-BR', {
    minimumFractionDigits: 2, // Sempre mostra duas casas decimais
    maximumFractionDigits: 2
});
}

// ===========================
// EVENTOS
// ===========================
document.addEventListener('DOMContentLoaded', function () {
// Permite que o usuário pressione Enter no input para calcular desconto
document.getElementById('valor').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') calcularDesconto();
});
});