const pessoas = [
    {
        nome: "Nico Robin",
        idade: 29, 
        profissao: 'programador', 
    },
    {
        nome: "Caelum Robin",
        idade: 70, 
        profissao: 'Jornalista', 
    },
    {
        nome: "vastar Robin",
        idade: 56, 
        profissao: 'C.O', 
    },
    {
        nome: "zoro Robin",
        idade: 17, 
        profissao: 'Tecnico Suporte', 
    },
    {
        nome: "Beatriz",
        idade: 21, 
        profissao: 'visionario', 
    },
    {
        nome: "Nico Robin",
        idade: 30, 
        profissao: 'Programador', 
    },
    {
        nome: "Ana",
        idade: 21, 
        habilitado: 'Programador', 
    },
]

const programadorMaiorDe20anos = pessoas.filter((pessoa) => {
    return pessoa.profissao === 'Programador' && pessoa.idade > 20; 

});
console.log(programadorMaiorDe20anos);


const jornalistaMaiorque30anos = pessoas.filter((pessoa) => {
    return pessoa.profissao === 'Jornalista' && pessoa.idade > 30; 

});
console.log(jornalistaMaiorque30anos);

const JornalistaProgramadorJovens = pessoas.filter((pessoa) => {
    return (pessoa.profissao === 'Jornalista' || pessoa.profissao === 'Programador') && pessoa.idade < 30; 

});
console.log(JornalistaProgramadorJovens);
