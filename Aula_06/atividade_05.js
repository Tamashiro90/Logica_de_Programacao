/*Escreva um programa que continua pedindo ao usuário para
inserir uma senha até que a senha correta seja digitada.*/

var senha=2219;
var digita=0;


while (senha !== digita){
    digita=parseInt(prompt("Digite a senha"));
}
document.write("Senha correta")