const nomes = ["Maria", "Joao", "Edu", "Gabriel", "Julia"]
// Método splice, usado para dividir array
// nomes.splice(indice atual,delete,-> adicionando elementos elem1,elem2)

const removidos = nomes.splice(2,2)
console.log(nomes, removidos)