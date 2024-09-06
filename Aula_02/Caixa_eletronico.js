let valorSaque;
let saldoConta;

saldoConta=1000;

valorSaque=prompt('Digite o valor de saque')

if (valorSaque<=saldoConta) {
    saldoConta = saldoConta - valorSaque
    document.write("Você está sacando R$ ",valorSaque,". ")
} else {
    document.write("Saldo insulficiente")
}

document.write("Saldo disponível: R$ ",saldoConta)