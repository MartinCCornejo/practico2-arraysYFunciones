// EJERCICIO 3 
// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

let apariciones = [];

// Iniciamos un bucle para lanzar los dados 50 veces y agregar la suma de los dados en apariciones
for (let i = 0; i < 50; i++) {
    let dado1 = Math.floor(Math.random() * 6 + 1);
    let dado2 = Math.floor(Math.random() * 6 + 1);

    let sumaDeDados = dado1 + dado2;
    apariciones.push(sumaDeDados);
}

// Dibujamos la tabla 
document.write(`<table>
    <thead>
        <tr>
            <th>Suma</th>
            <th>Apariciones</th>
        </tr>
    </thead>
    <tbody>`);

for (let i = 2; i <= 12; i++) {
    // Utilice el método filter para crear un nuevo array y sumar las apariciones de i
    const conteo = apariciones.filter(elemento => elemento === i).length;

    document.write(`
    <tr>
        <td>${i}</td>
        <td>${conteo}</td>
    </tr>`);
}

document.write(`</tbody></table>`);
