// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

function retornaTamanhoArray(array) {
    return array.length
}  
retornaTamanhoArray(["Azul,", "Amarelo,", "Vermelho"])

// EXERCÍCIO 02

function retornaArrayInvertido(array) {
    const resultado = []

    for (let i = array.length - 1; i >= 0; i--) {
       resultado.push(array[i])
    }
 
    return resultado
 }
 retornaArrayInvertido([8, 23, 16, 10])

// EXERCÍCIO 03

function retornaArrayOrdenado(array) {
 
    const resultado = []
 
    const inserirEmOrdem = (arr, item) => {
 
       for (let i in arr) {
          if (item < arr[i]) {
             arr.splice(i, 0, item)
             return
          }
       }
 
       arr.push(item)
    }
 
    for (let item of array) inserirEmOrdem(resultado, item)
 
    return resultado
 }
 retornaArrayOrdenado([3, 2, 1, 4, 7])

// EXERCÍCIO 04

function retornaNumerosPares(array) {
 
    const resultado = []
 
    for (const item of array) {
       if (item % 2 === 0) resultado.push(item)
    }
 
    return resultado
 }
retornaNumerosPares([1, 2, 3, 4, 5, 6])

// EXERCÍCIO 05

function retornaNumerosParesElevadosADois(array) {
        return retornaNumerosPares(array).map(n => n ** 2)
     }
    
    retornaNumerosParesElevadosADois([1, 2, 3, 4, 5, 6])

// EXERCÍCIO 06

function retornaMaiorNumero(array) {

    const arrayEmOrdemDecrescente = retornaArrayInvertido(retornaArrayOrdenado(array))
 
    return arrayEmOrdemDecrescente[0]
 }
 retornaMaiorNumero([1, 5, 3, 7, 5, 2])

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    const [menor, maior] = retornaArrayOrdenado([num1, num2])

    return {
       maiorNumero: maior,
       maiorDivisivelPorMenor: maior % menor === 0,
       diferenca: maior - menor
    }
}
retornaObjetoEntreDoisNumeros(15, 30)

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const resultado = []

    for (let i = 0; i < n; i++) {
       resultado[i] = 2 * i
    }
 
    return resultado
}
retornaNPrimeirosPares(5)

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) return "Equilátero"

    if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) return "Isósceles"
 
    return "Escaleno"
}
classificaTriangulo(0,2,4)

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const arrayOrdenado = retornaArrayOrdenado(array)
   const indiceSegundoMenor = 1
   const indiceSegundoMaior = array.length - 2

   return [
      arrayOrdenado[indiceSegundoMaior],
      arrayOrdenado[indiceSegundoMenor]
   ]
}
retornaSegundoMaiorESegundoMenor([3, 2, 1, 4, 7, 6, 5])

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}
// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {


}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
 
    }