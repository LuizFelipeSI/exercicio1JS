let nome = "Luiz Felipe"
let idade = 26
console.log("nome: " + nome + "\n" + "idade: " + idade)


let x = 10
let y = 5
let soma = x + y
let subtracao = x - y
let multiplicacao = x * y
let divisao = x / y
console.log("soma: " + soma + "\n" + "subtração: " + subtracao + "\n" + "multiplicação: " + multiplicacao + "\n" + "divisão: " + divisao)


let palavra1 = "Luiz"
let palavra2 = " Felipe"
let resultado = palavra1 + palavra2
console.log(resultado)


let string = "mapa"
console.log("primeira letra: " + string[0] + ", última letra: " + string[string.length-1])


let var1 = 4
let var2 = 2
if (var1 == var2) {
    console.log("igual")
} else {
    console.log("diferente")
}


let fora = "fora"
function escopo() {
    let dentro = "dentro"
    console.log(dentro)
}
escopo()
console.log(fora)


console.log("log")
console.warn("warm")
console.error("error")
console.info("info")


let numeroString = "2"
let numero = parseInt(numeroString)
console.log(numero)


if(typeof window !== "undefined") {
    console.log("navegador")
} else {
    console.log("node.js")
}


function somar(n1, n2) {
    return n1 + n2
}
console.log(somar(6, 8))