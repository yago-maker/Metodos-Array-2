const numeros = [10, 987, 0, 12, 199, -45, -67, -67]

const numeroPares = numeros.filter((numero) => {
    return numero % 2 === 0;
});

console.log(numeroPares);
