/* Escreva um código que imprima a tabuada de 1 a 10, de forma
organizada e clara. A saída precisa ser semelhante ao exemplo
abaixo: */

var a=1;
var b=0;
var resultado=0;

do {
    b++;
    if (b==11){
        ++a;
        b=1;
       }
       resultado = a * b 
       console.log(a+" X "+b+" = "+resultado)
    }  while (resultado<=99 ){       
    }    

