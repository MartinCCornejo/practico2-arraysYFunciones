// EJERCICIO 4 
// 4- Escribir el código de una función a la que se pasa como parámetro un número
// entero y devuelve como resultado una cadena de texto que indica si el número es
// par o impar. Mostrar por pantalla el resultado devuelto por la función.


const verificarNumero = (num) => {
    if (num % 2 === 0) {
        document.write(`<h2>El número ${num} es PAR</h2>`);
    } else{
        document.write(`<h2>El número ${num} es IMPAR</h2>`);
    }
}


const numero = parseInt(prompt('Ingrese un número y le indicaremos si es PAR o IMPAR'));

if (!isNaN(numero)) {
    verificarNumero(numero);
} else{
    document.write('<h2 style="color: red;">No ingresó un número válido!</h2>');
}