const palavras = ['li', 'caa', 'ss', 'cro', 'oha']

const limitePalavras = palavras.some(function(valor){
    return valor.length > 5; 
})

if(limitePalavras){
    console.log('nananan');
    
}else {
    console.log('mimimij');
    
}
console.log(limitePalavras);


