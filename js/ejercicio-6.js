// EJERCICIO 6 
// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
// luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// ● La fórmula del perímetro es p = 2*(a +b)


// Funcion de una sola linea para calcular el perimetro de un rectangulo 
const calcularPerimetro = (a,b) => {return 2 * (a + b)};


const ladoA = parseInt(prompt('Ingrese el lado A para calcular el perimetro de un rectangulo'));
const ladoB = parseInt(prompt('Ingrese el lado B para calcular el perimetro de un rectangulo'));

// Verificamos que los datos sean correctos, de lo contrario mostramos un mensaje de datos invalidos
if (!isNaN(ladoA) && !isNaN(ladoB)) {
    let resultado = calcularPerimetro(ladoA,ladoB);
    document.write(`<p>Lado A = ${ladoA} <br>Lado B = ${ladoB} <br><br> Perimetro = ${resultado}</p>`);

} else{
    document.write(`<p style='color:red'>Datos inválidos</p>`);
}
