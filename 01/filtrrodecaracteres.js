const cidades = [ 
    'salvador',
    'Sao paulo',
    'Brasilia',
    'Recife',
    'Rio de Janeiro',
]

const novoArrray = cidades.filter((cidade) => {
    return cidade.length <= 8;
})


 const arrayFormatado = novoArrray.join((', '));

console.log(novoArrray);
console.log(arrayFormatado);

