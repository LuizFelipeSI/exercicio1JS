//Declare uma variável para armazenar seu nome e outra para a sua idade. Mostre no console uma mensagem utilizando essas variáveis.
let nome = "Luiz Felipe"
let idade = 26
console.log("nome: " + nome + "\n" + "idade: " + idade)


//Operações Aritméticas:
//Crie duas variáveis com valores numéricos e realize as operações de soma, subtração, multiplicação e divisão entre elas. Mostre os resultados no console.
let x = 10
let y = 5
let soma = x + y
let subtracao = x - y
let multiplicacao = x * y
let divisao = x / y
console.log("soma: " + soma + "\n" + "subtração: " + subtracao + "\n" + "multiplicação: " + multiplicacao + "\n" + "divisão: " + divisao)


//Strings e Concatenação:
//Declare duas variáveis contendo duas palavras diferentes. Concatene-as e mostre o resultado no console.
let palavra1 = "Luiz"
let palavra2 = " Felipe"
let resultado = palavra1 + palavra2
console.log(resultado)


//Acessando Caracteres:
//Declare uma string e mostre no console o primeiro e o último caractere.
let string = "mapa"
console.log("primeira letra: " + string[0] + ", última letra: " + string[string.length - 1])


//Operações Booleanas:
//Crie duas variáveis com valores numéricos e compare-as usando operadores de comparação. Mostre os resultados no console.
let var1 = 4
let var2 = 2
if (var1 == var2) {
    console.log("igual")
} else {
    console.log("diferente")
}


//Escopo de Variáveis:
//Declare uma variável dentro de uma função e outra fora da função. Tente acessar essas variáveis dentro e fora da função, observando o escopo.
let fora = "fora"
function escopo() {
    let dentro = "dentro"
    console.log(dentro)
}
escopo()
console.log(fora)


//Uso do Console:
//Utilize console.log, console.warn, console.error e console.info para exibir diferentes mensagens no console.
console.log("log")
console.warn("warm")
console.error("error")
console.info("info")


//Conversão de Tipos:
//Declare uma variável contendo um número como string. Converta essa string para um número inteiro e mostre no console.
let numeroString = "2"
let numero = parseInt(numeroString)
console.log(numero)


//Execução no Navegador e Node:
//Crie um pequeno script JavaScript que pode ser executado tanto no navegador quanto no Node.js, mostrando mensagens no console em ambos os ambientes.
if (typeof window !== "undefined") {
    console.log("navegador")
} else {
    console.log("node.js")
}


//Funções:
//Declare uma função que aceita dois parâmetros e retorna a soma deles. Chame a função com argumentos e mostre o resultado no console.
function somar(n1, n2) {
    return n1 + n2
}
console.log(somar(6, 8))