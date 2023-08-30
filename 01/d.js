const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

const callback = (a, b) => {
   return a.localeCompare(b); 
}


frutas.sort(callback)
console.log(frutas);

