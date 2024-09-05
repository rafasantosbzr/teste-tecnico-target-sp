/*Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.*/

const readline = require('readline');

function isFibonacci(numero) {
    let a = 0, b = 1, tempB; 
    // a e b são os dois primeiros valores imutáveis da sequência, enquanto que tempB armazena o valor de b antes da mudança, que passará a ser o novo valor de a

    if (numero === 0 || numero === 1) {
        return `${numero} pertence à sequência de Fibonacci.`;
    }

    while (b < numero) {
        tempB = b;
        b = a + b;
        a = tempB;
    }

    return b === numero
        ? `${numero} pertence à sequência de Fibonacci.`
        : `${numero} não pertence à sequência de Fibonacci.`;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número para verificar se pertence à sequência de Fibonacci: ', (input) => {
    const numero = parseInt(input);
    console.log(isFibonacci(numero));

    rl.close();
});








