const palavras = ['arroza', 'feijao', 'carne', 'cerveja' , 'macarrao']

const existeBebidaAlcoolica = palavras.some(function(valor){

               return valor ==='cerveja' || valor ==='Voddka';

})

if(existeBebidaAlcoolica){
    console.log('revisse sua lista');
    
}else{
    console.log('tudo certo');
    
}


console.log('');
