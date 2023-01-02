// Inicializamos el arreglo vacío
var nombre = [];

// Inicializamos una variable con la palabra "fooziman"
var palabra = "fooziman";

// Inicializamos una variable para controlar cuándo parar el ciclo
var seguir = true;

pos=0
// Mientras seguir sea verdadero, ejecutamos el ciclo
while (seguir) {
  // Si la posición es menor que la longitud de la palabra, añadimos
  // la letra a la palabra y avanzamos una posición
  if (pos < palabra.length) {
    nombre.push(palabra[pos]);
    pos++;
  } else {
    // Si la posición es mayor o igual que la longitud de la palabra,
    // detenemos el ciclo estableciendo seguir en falso
    seguir = false;
  }
}

// Imprimimos el arreglo en la consola
console.log([nombre]);