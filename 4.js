/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. */

function ImprimirPercentuais(faturamento) {
    const calcularPercentuais = (faturamento) => {
        const totalFaturamento = faturamento.SP + faturamento.RJ + faturamento.MG + faturamento.ES + faturamento.Outros;

        return {
            SP: ((faturamento.SP / totalFaturamento) * 100).toFixed(2) + '%',
            RJ: ((faturamento.RJ / totalFaturamento) * 100).toFixed(2) + '%',
            MG: ((faturamento.MG / totalFaturamento) * 100).toFixed(2) + '%',
            ES: ((faturamento.ES / totalFaturamento) * 100).toFixed(2) + '%',
            Outros: ((faturamento.Outros / totalFaturamento) * 100).toFixed(2) + '%'
        };
    };

    const percentuais = calcularPercentuais(faturamento);

    console.log('Percentual de representação por estado:');
    for (const estado in percentuais) {
        console.log(`${estado}: ${percentuais[estado]}`);
    }
}

const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

ImprimirPercentuais(faturamento);

