// var salarioIncial;
// var salarioAjustado;
// var ajuste;
// ajuste = parseFloat(ajuste)

// salarioIncial = parseFloat (prompt("Ingrese su salario"))
// if (salarioIncial < 1300000){
//     ajuste = salarioIncial*0.15
// }else{
//     ajuste = 0
// }
// salarioAjustado = salarioIncial + ajuste;
// alert(salarioAjustado);






const Numero = parseInt(prompt("ingrese un numero menos a 1000"))
if(Numero < 0 || Numero >=1000){
    alert("numero no valido")
} else if (Numero < 10){
    const resultado = Numero * Numero
    alert(resultado)
}
else if(Numero >= 10 && Numero < 100){
    const resultado = Numero * 2
    alert(resultado)
}
else if (Numero >= 100 && Numero < 1000){
    const resultado = Numero - 100;
    alert(resultado)
}

// el dato de entrada sera el numero que digite el usuario este numero tiene que ser menor a 1000

// los calculos internos seran multiplicacion y resta, para realizar el codigo utilice estructura if else y use constantes

