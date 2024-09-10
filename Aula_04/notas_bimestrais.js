var nota1=parseInt(prompt('Informe a nota 1'));
var nota2=parseInt(prompt('Informe a nota 2'));
var nota3=parseInt(prompt('Informe a nota 3'));
var nota4=parseInt(prompt('Informe a nota 4'));
var media=(nota1+nota2+nota3+nota4)/4;

document.write(`Sua nota é ${media}. `)
if (media >=6) {
    document.write('Você está aprovado.')
} else {
    document.write('Você está reprovado.')
}