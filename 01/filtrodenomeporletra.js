const nomes = [
    "Maria",
    "joao", 
    "Yasmim",
    "mimi", 
    "amor"
];


const nomesEncontrados = nomes.filter((nome)=> {
    return nome.slice(0, 1).toLowerCase() === 'm';
});

console.log(nomesEncontrados);
