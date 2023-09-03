const numeros = [ 122, 4, 6, 8, 44];

const arrayNumerosPares = numeros.every((numero) => {
               return numero % 2 === 0; 
})

if(arrayNumerosPares){
    console.log('array valido');
    
} else {
    console.log('array invalido');
    
}