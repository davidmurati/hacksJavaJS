// Inicializamos el arreglo vacío
var palabras = [];

// Creamos un arreglo con las palabras que queremos añadir
var lista = ["bar","qux","octo","foobar"];

// Iteramos sobre cada elemento del arreglo con un ciclo for
for (var i = 0; i < lista.length; i++) {
  // Añadimos cada elemento al arreglo
  palabras.push(lista[i]);
}

// Imprimimos el arreglo en la consola
console.log(palabras);