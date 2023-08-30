const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]


numeros.sort((a, b) => {
   if(a < b){
    return -1;
   } 

   if(a > b){
    return 1; 
   } 

   return 0; 

})


console.log(numeros);

