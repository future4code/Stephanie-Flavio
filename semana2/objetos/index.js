//Exercício 1

//"Matheus Nachtergaele"
//"Virginia Cavendish"
//"Globo", horario: "14h"

//Exercício 2 

//a)
//Juca
//Juba
//Jubo

//b)
// Ele faz uma cópia inteira de um objeto para outro e pode adicionar
// ou mudar uma ou outra propriedade.

//Exercício 3

//a)
//false
//undefined

//b)
//Ele nos deu false porque chamamos na função a propriedade
//'se' ele é backender, e deu undefined na altura porque não criamos
//uma propriedade de altura. 

_________________________________________________________________________________________

//Exercício 1
//a)
// const pessoa = {
//     nome: "Stephanie", 
//     apelido: ["Steph" , "Tete" , "Teka"]
// }

// function minhaPessoa(pessoa) {
//      console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de:
//      ${pessoa.apelido}`)
    
// }
//b)
// minhaPessoa(pessoa) 

// const novosApelidos = {
//     ...pessoa, apelido: ["florzinha" , "Magda" , "Magali"]   
// }

// minhaPessoa(novosApelidos)

//Exercício 2 

//a)
// const primeiraPessoa = {
//     nome: "Stephanie",
//     idade: 22,
//     profissao: "Estudante"
// }

// const segundaPessoa = {
//     nome: "Allan",
//     idade: 27,
//     profissao: "Dev"
// }

// //b)

// function recebeObjetos(primeiraPessoa, segundaPessoa) {
//     const meuReturn = [
//  1)     primeiraPessoa.nome, 
//  2)     primeiraPessoa.nome.length,
//  3)     primeiraPessoa.idade,
//  4)     primeiraPessoa.profissao,
//  5)     primeiraPessoa.profissao.length,
//  1)     segundaPessoa.nome, 
//  2)     segundaPessoa.nome.length,
//  3)     segundaPessoa.idade,
//  4)     segundaPessoa.profissao,
//  5)     segundaPessoa.profissao.length
//     ]
// console.log(meuReturn)
//     return meuReturn
// }

// recebeObjetos(primeiraPessoa, segundaPessoa)

//Exercicio 3

//a)
//const carrinho = []
//b)
// const fruta1 = {
//     nome: "melão",
//     disponibilidade: true
// }

// const fruta2 = {
//     nome: "morango",
//     disponibilidade: true
// }
// const fruta3 = {
//     nome: "abacaxi",
//     disponibilidade: true
// }

// function compras(fruta1, fruta2, fruta3) {
//     carrinho.push(fruta1, fruta2, fruta3)
//     console.log(carrinho)
// }

// compras(fruta1, fruta2, fruta3)