//EXERCÍCIO 1

//a) Vai imprimir a repetição da estrutura do array.

//EXERCÍCIO 2

//a) Vai imprimir apenas os nomes do objetos.

//Exercício 3

//a) Vai imprimir o array trazendo os apelidos
//   exceto da chijo e a linha dela.

_____________________________________________________________

//EXERCÍCIO 1

// function extrairNome(item) {
//     console.log(item)
//     return item.raca === "Poodle"
//  }

//  const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//a)
//   const novoArrayPetsA = pets.map(extrairNome)
//   console.log(novoArrayPets)

//b)
//  const novoArrayPetsB = pets.filter(extrairNome)
//  console.log(novoArrayPetsB)

//c)
// const novoArrayPetsC = pets.filter(extrairNome)
// console.log(
//     `Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}`, 
//     novoArrayPetsC
//     )

//EXERCÍCIO 2


// function extrairNome(item) {
//     // console.log(item)
//     return item.nome
//  }

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

//a)
// const novoArrayProdutosA = produtos.map(extrairNome)
// console.log(novoArrayProdutosA) 

//b)
// const novoArrayProdutosB = produtos.map((produto) => {
//     return { nome: produto.nome, preco: (produto.preco * 0.95).toFixed(2)}
//  })
//  console.log(novoArrayProdutosB)

 //c)
// const produtoBebidas = produtos.filter(
//     (item) => {return item.categoria === "Bebidas"}
// )
// console.log(produtoBebidas)

//d)
// const novoArrayYpe1 = produtos.filter(
//     (item) => {return item.nome.includes("Ypê")}
// )
// console.log(novoArrayYpe1)

//e)
// const novoArrayYpe2 = novoArrayYpe1.map((produto) => {
//     return `Compre ${produto.nome} por ${produto.preco}`
// })
// console.log(novoArrayYpe2)

_____________________________________________________________

//DESAFIO 1

// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
//  ]

//a)
//  const nomePokemons = pokemons.map((poke) => {
//     return poke.nome
//  })

// const pokemonOrdemAlfabetica = nomePokemons.sort((a, b) => a.localeCompare(b))

// console.log(pokemonOrdemAlfabetica)

//b
// const tipos = pokemons.map((poke) => {
//     return poke.tipo
// })

// const tiposSemRepetir = tipos.filter((tipo, i, arr ) => {
//     return arr.indexOf(tipo) === i
// })

// console.log(tiposSemRepetir)