//Exercício 1

//a) Está fazendo um teste comparativo se o número do usuário vai ter sobra ou não
//b) Para os números pares
//c) Para os números ímpares

//Exercício 2

//a) Ele simplicafica o condicional if/Else em um comparativo 
//b) "O preço da fruta Maçã é R$ 2,25" 
//c) Vai aparecer que o preço é 5 reais.

//Exercício 3

//a) Criou um prompt (caixa de pergunta) para o usuário onde só pode colocar números
//b) Se o número escolhido for 10 vai aparecer que "esse número passou no teste", mas se for qualquer 
//   número igual ou menor que zero ele não vai imprimir nada no console. Porque o if é para as mensagens
//   true
//c) Sim, por conta da da variavel mensagem estar dentro de um escopo local e não global como está o 
//   console da mensagem. Então o console não consegue acessar a variavel. Para acessar tem q ser de 
// dentro para fora

_______________________________________________________________________________________________________________

//Exercício 1 

// const idadeUsuario = Number(prompt("Coloque aqui sua idade:"))
//         if (idadeUsuario >= 18) {
//         console.log("Parabens! Você pode dirigir!")
//         } else {
//             console.log("Que pena! Você ainda não pode dirigir.")
//         }

//Exercício 2

// const turnoAluno = 
//     prompt("Digite o turno que você estuda: M (Matutino), V (Vespertino) ou N (Noturno)").toUpperCase()

//         if (turnoAluno === "M") {
//             console.log("Bom dia!")
//         } else if (turnoAluno === "V") {
//             console.log("Boa tarde!")
//         } else if (turnoAluno === "N") {
//             console.log("Boa noite!")
//         } else {
//             console.log("Digite um turno selecionado:")
//         }

//Exercício 3

// const turnoAluno = 
//     prompt("Digite o turno que você estuda: M (Matutino), V (Vespertino) ou N (Noturno)").toUpperCase()

//     switch (turnoAluno) {
//         case "M":
//             console.log("Bom dia!")
//             break
//         case "V":
//             console.log("Boa tarde!")
//             break
//         case "N":
//             console.log("Boa noite!")
//             break
//         default:
//             console.log("Digite um turno selecionado:")
//             break
//         }

//Exercicio 4

// const assistirFilme = (filme, ingresso) => {
//         if (filme === 'fantasia' && ingresso <= 15) {
//         console.log("Bom filme!")
//         } else {
//             console.log("Escolha outro filme :(")
//         }
    
//     }
    
//     const generoFilmeUsuario = prompt("Qual o gênero do filme?").toLowerCase() 
//     const precoIngressoUsuario = Number(prompt("Qual o valor do ingresso?"))
//     assistirFilme(generoFilmeUsuario, precoIngressoUsuario)

_____________________________________________________________________________________________________________

//Desafio 1

// const assistirFilme = (filme, ingresso) => {
//     if (filme === 'fantasia' && ingresso <= 15) {
//         const lanchinhoUsuario = prompt("Qual lancinho vai querer?")
//         console.log(`Aproveite seu lanche: ${lanchinhoUsuario}`)
//     console.log("Bom filme!")
//     } else {
//         console.log("Escolha outro filme :(")
//     }

// }

// const generoFilmeUsuario = prompt("Qual o gênero do filme?").toLowerCase() 
// const precoIngressoUsuario = Number(prompt("Qual o valor do ingresso?"))
// assistirFilme(generoFilmeUsuario, precoIngressoUsuario)