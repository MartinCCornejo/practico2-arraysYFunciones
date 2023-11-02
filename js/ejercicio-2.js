// EJERCICIO 2 
// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.


let ciudades = [];

do {
    const ciudad = prompt('Escriba el nombre de una ciudad');

    if (ciudad === null ) {
        alert('Cancelaste el programa, si desea volver a intentarlo recargue la página');
        break;
    } else if (ciudad.length === 0) {
        alert('Por favor, escriba una ciudad válida. Si desea volver a intentarlo recargue la página');
        break;
    } else{
        ciudades.push(ciudad);
    }

} while (confirm('¿Desea agregar más ciudades?'));


if (ciudades.length > 0) {
    let textoEnPantalla = `
    <p>El arreglo de ciudades tiene ${ciudades.length} elementos.</p>
    <ul>
        <li>Elemento 1er Posición: ${ciudades[0]}</li>
        <li>Elemento 3er Posición: ${ciudades[2]}</li>
        <li>Elemento última Posición: ${ciudades[ciudades.length - 1]}</li>
    </ul>
`
    // Añadimos la ciudad de Paris como último elemento del array
    ciudades.push('Paris');
    // Sustituimos la segunda ciudad por 'Barcelona'
    ciudades[1] = 'Barcelona';

    document.write(textoEnPantalla + `<ul><li>Elemento última Posición modificada: ${ciudades[[ciudades.length - 1]]}</li><ul>`);


    document.write(`<h2>Arreglo de ciudades</h2>`);

    document.write('<ul>');
    for (let i = 0; i < ciudades.length; i++) {
        document.write(`<li>Elemento: ${ciudades[i]}</li>`); 
    }
    document.write('</ul>');

} else{
    document.write('<h2>Usted no agrego ciudades</h2>')
}
