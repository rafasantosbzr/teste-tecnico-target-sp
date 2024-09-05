/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;*/

const fs = require('fs');

function processamento(dados) {
    let menorValor = dados[0].valor;
    let maiorValor = dados[0].valor;
    let totalFaturamento = 0;
    let diasComFaturamento = 0;

    dados.forEach(dia => {
        const valor = dia.valor;
        if (valor > 0) {
            totalFaturamento += valor;
            diasComFaturamento++;
            if (valor < menorValor) menorValor = valor;
            if (valor > maiorValor) maiorValor = valor;
        }
    });

    const mediaMensal = diasComFaturamento > 0 ? totalFaturamento / diasComFaturamento : 0;
    let diasAcimaMedia = 0;
    dados.forEach(dia => {
        if (dia.valor > mediaMensal) {
            diasAcimaMedia++;
        }
    });

    return {
        menorValor: menorValor,
        maiorValor: maiorValor,
        diasAcimaMedia: diasAcimaMedia
    };
}

function analisarFaturamento() {
    const dados = JSON.parse(fs.readFileSync('dados.json', 'utf8'))
    const resultados = processamento(dados);

    console.log(`Menor valor de faturamento: ${resultados.menorValor}`);
    console.log(`Maior valor de faturamento: ${resultados.maiorValor}`);
    console.log(`Número de dias com faturamento acima da média: ${resultados.diasAcimaMedia}`);
}

//teste
analisarFaturamento();