// Creamos una función que recibe una palabra y la transforma
// reemplazando las letras "a" y "o" por "@"
function transformar(palabra) {
    return palabra.replace(/a/g, "@").replace(/o/g, "@");
  }
  
  // Creamos un arreglo con las palabras a transformar
  var palabras = ["Foo", "Bar", "Baz", "Qux", "Echo"];
  
  // Aplicamos la función a cada elemento del arreglo con map()
  var transformadas = palabras.map(transformar);
  
  // Imprimimos el nuevo arreglo en la consola
  console.log(transformadas);