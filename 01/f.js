const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

frutas.sort((a,b) => {
    return a.length - b.length
})

console.log(frutas);
