//EXERCÍCIO 3

const colors = require('colors')

const tarefas = [
  "ler",
  "lavar louça",
  "correr"
]

const tarefa = process.argv[2]

if (!tarefa) {
  return console.log(`Esperando 1 parâmetro para nova tarefa`.red)
}

tarefas.push({
    tarefa: "andar de bicicleta"
})

console.log(`Tarefas ${tarefa} adicionado com sucesso`.magenta)
console.log("tarefas:".magenta, tarefas.toString().magenta)
