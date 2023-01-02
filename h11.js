// Inicializamos el arreglo vacío
var elementos = [];

// Creamos un arreglo con los elementos que queremos añadir
var lista = ["h@ck", "one", 2, "three", 4, "five", "h@ck", "f00", "Bar", "b@z", "quX", "3ch0", "h@ck"];

// Inicializamos una variable con la posición actual en el arreglo
var pos = 0;

// Inicializamos una variable para controlar cuándo parar el ciclo
var seguir = true;

// Mientras seguir sea verdadero, ejecutamos el ciclo
while (seguir) {
  // Si la posición es menor que la longitud del arreglo, añadimos
  // el elemento al arreglo y avanzamos una posición
  if (pos < lista.length) {
    elementos.push(lista[pos]);
    pos++;
  } else {
    // Si la posición es mayor o igual que la longitud del arreglo,
    // detenemos el ciclo estableciendo seguir en falso
    seguir = false;
  }
}

// Imprimimos el arreglo en la consola
console.log(elementos);