/*Observe o trecho de código abaixo: 
int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?*/

function somaTotal(indice) {
    //optei por deixar as variaveis dentro da funcao para maior organizacao
    let soma = 0;
    let k = 0;

    //optei por while porque e a palavra que o enunciado usa, mas da para usar for tambem
    while (k < indice) {
        k += 1;
        soma += k;
    }

    return soma;
}

//embora o enunciado leve a pensar que o indice deve ser um const, resolvi informar ele de forma manual, a fim de ser possivel testar o codigo com outros valores de indice
console.log(somaTotal(13));