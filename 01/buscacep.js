

function buscarEndereco (cep) {

    const enderecos = [
        { cep: 23089238392, rua: "Rua dos Artistas"},
        { cep: 29489238, rua: "Rua dos Ichigos"},
        { cep: 34883489483, rua: "Rua das Zampakutous"},
        { cep: 43098349, rua: "Rua da Primeira respiração do fogo"},
    ]
    
    const enderecoEncontrado = enderecos.find((endereco) => {
           return endereco.cep === cep;
    });

    console.log(enderecoEncontrado.rua);
    
  
}


buscarEndereco(43098349)