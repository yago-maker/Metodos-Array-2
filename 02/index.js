const cidades = [
   "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro", 
] 
    

const StringMaior = cidades.reduce((cidadeAtual, cidade) => {
     return cidade.length > cidadeAtual.length ? cidade : cidadeAtual;
}, "");

console.log(StringMaior);
