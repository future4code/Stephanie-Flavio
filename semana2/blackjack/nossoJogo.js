/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//1


console.log("Boas vindas ao jogo de Blackjack!")

const usuarioJogo = confirm("Quer iniciar uma nova rodada?")
if (usuarioJogo) {
   console.log("Partida iniciada, boa sorte!")

   let usuarioCarta1 = comprarCarta()
   let usuarioCarta2 = comprarCarta()
   const somaPontosUsuario = usuarioCarta1.valor + usuarioCarta2.valor

   console.log(`Cartas: ${usuarioCarta1.texto, usuarioCarta2.texto}, Pontuação: ${somaPontosUsuario}`)

   let computadorCarta1 = comprarCarta()
   let computadorCarta2 = comprarCarta()
   const somaPontosComputador = computadorCarta1.valor + computadorCarta2.valor
   console.log(`Cartas: ${computadorCarta1.texto, computadorCarta2.texto}, Pontuação: ${somaPontosComputador}`)
   
   if (somaPontosUsuario === somaPontosComputador) {
      console.log("Empate!")
   } else if (somaPontosUsuario > somaPontosComputador) {
      console.log("O usuário ganhou!")
   } else if (somaPontosComputador > somaPontosUsuario) {
      console.log("O computador ganhou!")
   } else {
      console.log("O jogo acabou.")
   }
}

 