var opcion = "W"

var numeros = []; // Creamos un arreglo vacío

// Si el usuario eligió la opción "F", usamos un ciclo for
if (opcion == "F") {
  
  for (var i = 1; i <= 7; i=i+2) { // Ciclo for desde 0 hasta 5
    numeros.push(i); // Añadimos el número actual al arreglo
  }
  console.log(numeros); // Imprimimos el arreglo

} else if (opcion == "W") {
    
  var i = 1; // Inicializamos la variable i en 0
  while (i <= 7) { // Ciclo while mientras i sea menor o igual a 5
    numeros.push(i); // Añadimos el número actual al arreglo
    i=i+2; // Incrementamos i en 1
  }
  console.log(numeros); // Imprimimos el arreglo
  } else {"no selecciono ninguna";
}
