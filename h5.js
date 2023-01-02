// Creamos una función que recibe un número y lo decrementa en una unidad
function decrementar(num) {
    return num - 1;
  }
  
  // Creamos un arreglo de números
  var numeros = [8, 6, 4, 2];
  
  // Aplicamos la función a cada elemento del arreglo con map()
  var decrementados = numeros.map(decrementar);
  
  // Imprimimos el nuevo arreglo en la consola
  console.log(decrementados);