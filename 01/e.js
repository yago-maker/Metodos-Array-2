const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]


frutas.sort((a, b) =>{
    return b.localeCompare(a)
});

console.log(frutas);
