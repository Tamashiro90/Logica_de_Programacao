var numero1=parseInt(prompt('Informe o primeiro número'))
var numero2=parseInt(prompt('Informe o segundo número'))
var numero3=parseInt(prompt('Informe o terceiro número'))

if (numero1>numero2 && numero1>numero3) {
    document.write(`O maior número digitado é ${numero1}`)
} else if(numero2>numero3) {
    document.write(`O maior número digitado é ${numero2}`)
} else {
    document.write(`O maior número digitado é ${numero3}`)
}