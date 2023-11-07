// EJERCICIO 7 

// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado
// por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
// solo los resultados del 1 al 10 del número elegido por el usuario


// Función de la tabla de multiplicación 
const tablaDeMultiplicar = (num) =>{

    document.write(`
    <table>
        <thead>
            <tr>
                <th>Multiplicando</th>
                <th>Resultado</th>
            </tr>
        </thead>
        <tbody>`);
    
    for (let i = 1; i <= 10; i++) {
        document.write(`
        <tr>
            <td>${num} x ${i}</td>
            <td>${num * i}</td>
        </tr>`)
    }

    document.write(`</tbody></table>`);
}


const numero = parseInt(prompt('Ingrese un número para crear la tabla de multiplicación'));

// Verificamos que los datos ingresados sean correctos para iniciar la función
if (!isNaN(numero)) {
    tablaDeMultiplicar(numero);
} else {
    document.write(`<p style='color:red;'>Por favor, ingrese un número correcto</p>`);
}