// // // EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// // // EXERCÍCIO 0A
// function soma(num1, num2) {
//   // implemente sua lógica aqui
//   return num1 + num2
// } 

// // // EXERCÍCIO 0B
// function imprimeMensagem() {
//   // implemente sua lógica aqui
//   const mensagem = prompt('Digite uma mensagem!')

//   console.log(mensagem)
// }

// // // EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// // EXERCÍCIO 01

// function calculaAreaRetangulo() {
//   // implemente sua lógica aqui                                    
//   const alturaPrompt = Number(prompt("Escreva uma altura:"))
//   const larguraPrompt = Number(prompt("Escreva uma largura:"))
//   const area = alturaPrompt * larguraPrompt 
//   console.log(area)
//  }
//      console.log(calculaAreaRetangulo())
    
    
//  // EXERCÍCIO 02

//  function imprimeIdade() {
//    // implemente sua lógica aqui
//      const anoAtual = Number(prompt("Escreva o ano que estamos:"))
//      const anoNascimento = Number(prompt("Escreva o ano que você nasceu:"))
//      const idade = anoAtual - anoNascimento
//        console.log(idade)
//  }
//        console.log(imprimeIdade())

//  // EXERCÍCIO 03

//  function calculaIMC(peso, altura) {
//    // implemente sua lógica aqui
//        return peso / (altura * altura)
//        console.log(calculaIMC)
//  }
//        calculaIMC(85, 1.80)

//  //EXERCÍCIO 04

//  function imprimeInformacoesUsuario() {
//    // implemente sua lógica aqui
//    // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
//      const nomeUsuario = prompt("Escreva seu nome:")
//      const idadeUsuario = Number(prompt("Escreva sua idade:"))
//      const emailUsuario = prompt("Escreva seu email:")
    
//        console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
      
//  }
//      imprimeInformacoesUsuario()

//  //EXERCÍCIO 05
//  function imprimeTresCoresFavoritas() {
//    // implemente sua lógica aqui
//    const corFavorita1 = prompt("Diga sua primera cor favorita")
//    const corFavorita2 = prompt("Diga sua segunda cor favorita")
//    const corFavorita3 = prompt("Diga sua terceira cor favorita")
//        const cores = [corFavorita1, corFavorita2, corFavorita3]
//        console.log(cores)
      
//  }
//        console.log(imprimeTresCoresFavoritas)

//  // EXERCÍCIO 06

//  function retornaStringEmMaiuscula(string) {
//    // implemente sua lógica aqui
//    console.log(string.toUpperCase())
//       return string.toUpperCase()
//  }    

//     retornaStringEmMaiuscula("oi")

//  // EXERCÍCIO 07

//  function calculaIngressosEspetaculo(custo, valorIngresso) {
//    // implemente sua lógica aqui
//        return custo / valorIngresso
//        console.log(calculaIngressosEspetaculo)
//  }
//        calculaIngressosEspetaculo(3000, 100)

// EXERCÍCIO 08
// function checaStringsMesmoTamanho(string1, string2) {
//   // implemente sua lógica aqui

//   const primeiraString = string1.length
//   const segundaString = string2.length
//       console.log(primeiraString === segundaString)
//       return string1 === string2
// }
//     checaStringsMesmoTamanho("ola", "abc")
//     checaStringsMesmoTamanho("teste", "porta")
//     checaStringsMesmoTamanho("abc", "abcd")
    

//EXERCÍCIO 09
// function retornaPrimeiroElemento(array) {
//   // implemente sua lógica aqui
//     console.log(array[0])
//      return array[0]

// }
//     retornaPrimeiroElemento([1, 2, 3])
//     retornaPrimeiroElemento(["Laranja", "Banana", "Maçã"])

// EXERCÍCIO 10
// function retornaUltimoElemento(array) {
//   // implemente sua lógica aqui
//   console.log(array[array.length -1])
//     return array[array.length -1]
// }
//       retornaUltimoElemento([1, 2, 3, 4, 5])
//       retornaUltimoElemento(["Laranja", "Banana", "Maçã"])

// EXERCÍCIO 11
// function trocaPrimeiroEUltimo(array) {
//   // implemente sua lógica aqui
//   let pegarPrimeiroItem = array[0]
//   let pegarUltimoItem = array[array.length-1]
//   array[0] = pegarUltimoItem
//   array[array.length-1] = pegarPrimeiroItem
//     return array
// }
//     trocaPrimeiroEUltimo([1, 2, 3, 4, 5])
//     trocaPrimeiroEUltimo(["Maçã", "Banana", "Laranja"])

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}