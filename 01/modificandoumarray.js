const frutas = ["Manga", "UVA", "abacaXi", "banaNA", "MAcã"];

const arrayModificado  = frutas.map((fruta, indice) => {
        return `${indice} - ${fruta.slice(0, 1).toUpperCase()}${fruta.slice(1).toLocaleLowerCase()}`; 
})

console.log(arrayModificado);
