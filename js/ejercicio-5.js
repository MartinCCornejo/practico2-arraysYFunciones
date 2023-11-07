// EJERCICIO 5 

// 5- Definir una función que muestre información sobre una cadena de texto que se
// le pasa como argumento. A partir de la cadena que se le pasa, la función
// determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
// por una mezcla de ambas


const mayusculas = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const minusculas = 'abcdefghijklmnñopqrstuvwzyz';

let tieneMayusculas = false;
let tieneMinusculas = false;

// Funcion para verificar si la cadena tiene mayusculas, minusculas o ambas
const verificarCadena = (cadena) =>{

    if (tieneMayusculas === true && tieneMinusculas === true) {
        document.write(`<p>El texto ingresado: '${cadena}' tiene una mezcla de mayúsculas y minúsculas</p>`);
    } else if (tieneMayusculas === true && tieneMinusculas === false) {
        document.write(`<p>El texto ingresado: '${cadena}' tiene solo mayúsculas</p>`);
    } else if (tieneMayusculas === false && tieneMinusculas === true) {
        document.write(`<p>El texto ingresado: '${cadena}' tiene solo minúsculas</p>`);
    } else{
        document.write(`<p style='color:red;'>El texto ingresado es incorrecto</p>`);
    }

}


let texto = prompt('Escriba un texto');

// Si el usuario cancela el programa mostramos un alert, de lo contrario, ejecutamos el bucle y la función
if (texto !== null) {
    for (let i = 0; i < texto.length; i++) {
        if (mayusculas.includes(texto[i])) {
            tieneMayusculas = true;
        } else if (minusculas.includes(texto[i])) {
            tieneMinusculas = true;
        } 
    }

    verificarCadena(texto);

} else{
    alert('Cancelaste el programa.');
}