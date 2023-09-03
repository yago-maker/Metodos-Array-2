

const usuarios = [
    {
        nome: "Nico Robin",
        idade: 29, 
        habilitado: false, 
    },
    {
        nome: "Caelum Robin",
        idade: 70, 
        habilitado: true, 
    },
    {
        nome: "vastar Robin",
        idade: 56, 
        habilitado: false, 
    },
    {
        nome: "zoro Robin",
        idade: 17, 
        habilitado: true, 
    },
    {
        nome: "Luffy Robin",
        idade: 18, 
        habilitado: false, 
    },
    {
        nome: "Nico Robin",
        idade: 29, 
        habilitado: true, 
    },
    {
        nome: "Nico Robin",
        idade: 29, 
        habilitado: false, 
    },
]

const usuariosFaixaEtaria = usuarios.filter(function(usuarios){
            return usuarios.idade >= 18 &&  usuarios.idade < 65;
});

const todosHabilitados = usuariosFaixaEtaria.every((usuarios) => {
         return usuarios.habilitado === true;
})

if(todosHabilitados){
       console.log('Todos passaram no teste');
       
}else {
console.log('Todos précisame star habilitado');

}