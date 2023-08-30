const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const maiorValor = numeros.reduce((maior, numero) => {
    return Math.max(maior, numero);
}, numeros[0]);

console.log(maiorValor);
