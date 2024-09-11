let salario=parseInt(prompt('Insira seu valor de salário'))

if (salario<=500){
    salarioNovo=salario*1.15
} else if (salario>500 && salario<=1000) {
    salarioNovo=salario*1.125
} else {
    salarioNovo=salario*1.1 
}
document.write(`Seu novo salário é R$ ${salarioNovo.toFixed(2)}`)