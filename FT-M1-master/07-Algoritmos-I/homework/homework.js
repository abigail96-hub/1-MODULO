'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  // arr [1,2,2,3,3,5]

  // 180 | 2
  // 90  | 2
  // 45  | 3
  // 15  | 3 
  // 5   | 5
  // 1   



  //      como su divisior no es dos si no 3 ya que es un numero primo, entomces entra al else. y se incrementa el divisor y vale 3 
  var arr = [1]
  var divisor = 2;

  while(num !== 1){ 
  if(num % divisor === 0){
    arr.push(divisor);
    num = num / divisor ;
  }else{ 

    divisor++

  }
  }
  return arr;
  }

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
// compara dos valores y arroja a la izquierda el numero mas pequeño

var flag = true;

while(flag){ 
flag = false;
for (let i = 0; i < array.length -1 ; i++){
  if(array[i]  >  array[i + 1]){ 
  var aux = array[i]
  array[i] = array[i + 1];
  array[i + 1] = aux 
  flag = true;
   }
} 
  
}
return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

// compara un por uno al mismo tiempo y acomoda los valores mas pequeños a la derecha. y este corta hasta que llega al final o compara al ultimo valor 
//  aux = 1
// [1,  5,  4,  2,  6]
//      i
// j

for (let i = 1; i < array.length; i++) {
  
  var j = i - 1;
  var aux = array[i];  // 1
  while(j >= 0 && array[j] > aux){
    array[j + 1] = array[j]
    j--
  }
  array[j + 1] = aux
}

return array

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

// busca el valor  minimo de todo el arreglo y lo ubica en la primer posicion y despues empieza a contar desde el segundo lugar, busca el minimo de todo el arreglo y lo ubica en la segunda posicion. empieza en el tercer lugar busca el minimo de todo el arreglo y lo ubica en la tercer posicion. 

//  aux min = 
// [1,5, 2 ,6 ]
//  i
//    j  

for (let i = 0; i < array.length -1; i++) {
  var min = i;
  for (let j = i + 1; j < array.length; j++) {
    if(array[j] <  array[min]){
      min = j;
    } 
  } 
  var aux = array[i]
  array[i] = array[min]
  array[min] = aux ;
}

return array; 

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
