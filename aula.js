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

// Funções no JS

function hello() {
    console.log("hello")
}

hello()

function hello() {
    console.log("hello, " + nome)
}

hello("José")

//Linguagem de múltiplas passagens, código avaliado de cima para baixo, construindo a estrutura de dados auxiliar, tabela de símbolos, guarda nome e escopo, tabela hash

function soma(a, b) {
    return a + b
}

const res = soma(2, 3)


const dobro = function(n) {
    return 2 * n
}

console.log(dobro(5))

const triplo = function(n = 1) {
    return n * 3
}

console.log(triplo())
console.log(triplo(5))

//ES6

const hello = () => console.log("Hello")

hello()

const dobro = (n) => 2 * n
    //return implícito

const dobro = (n) => {
    return 2 * n
}

const triplo = (n) => {
    const r = n
    r = r + n
    r = r + n
    return r
}

console.log(triplo(5))

const continhaQualquer = (r) => {
    return r + r + r + r + r + r + r + r + r + r
}

console.log(continhaQualquer(1))

//Clojure
//higher order function = função de alta ordem, recebe uma função
function f(funcao) {
    funcao()

}


//higher order function = função de alta ordem, recebe uma função
function g() {
    function outraFuncao() {
        console.log("Fui produzida pela g")
    }

}

const resultadoDaG = g()
console.log(resultadoDaG)

g()()

f(function() {
    console.log("Estou sendo passado para f")
})

f(1)

let umaFuncao = function() {
    console.log("Estou sendo referenciada por uma variável")
}

umaFuncao()