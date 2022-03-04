const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]
const res = nomes.map((nome) => nome.charAt(0))

//calcula número de letras
const res = nomes.map((nome) => nome.length)

const todosComecamComA = nomes.every(nome => nome.startsWith("A"))
console.log(todosComecamComA)
    //usando map, construir um vetor que contém os comprimentos das strings

const valores = [1, 2, 3, 4]

const soma = valores.reduce((ac, v) => ac + v)
    //reduce: Soma o valor ao próximo. ac = valor acumulado, v valor atual
    //save file
    //git add .
    //git remote -v
    //git push github