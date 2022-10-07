
'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

//[5, 1, 4, 2, 8]   SE LLEVA A LEFT LOS MAS CHICOS Y A RIGTH LOS MAS GRANDES 
//   pivote [5]
// [1, 2, 4]   [,8]
// pivote [5]
//  [1] [2] [4]  [] [8]  ---> al final solo se contatenan todos.


if(array.length <= 1) return array;

var pivote = array[0];   // tomamos un numero como pivote
var der = [];
var izq = [];

for (var i = 1; i < array.length; i++) {
  if(array[i] < pivote){
    izq.push(array[i])
  }else{
    der.push(array[i])
  }
}
// tenemos que llamar la funcion quickSort aqui vamos a fucionar o regresar el array ya concatenando los valores ordenados. 
return quickSort(izq).concat(pivote).concat(quickSort(der))
}














// [[1, 2, 4, 5, 8]]    [9, 10, 15, 20]
//   i
//                       j
// [, ,]





function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length === 1){
    return array;
  }


let mitad = Math.floor(array.length / 2) // divide el array en 2. El Math floor deja la division en numeros enteros. 
let left = array.splice(0, mitad); // array de la izquierda del [0]a la mitad creada
let right = array; // lo restante del array ( de la mitad al final)

return merge(mergeSort(left), mergeSort(right))

}

function merge(left, right) {

  let arr = [] // crea el array donde se guarda el elemento
  while(left.length && right.length) {   // se ejecuta  la funcion mientras se cumpla la condicion(ambos array tienen elementos.
    if(left[0] < right[0]) { //  preguntamos si el primer elemento de la izquierda es menor que el primer elemento de la derecha.
      arr.push(left.shift()); // si es true se pushea al arr creado el primer elemento (y sale de left)
    } else {
      arr.push(right.shift()); // se pushean a la derecha mientras no sean menorres.
    }

    }
    let array = arr.concat(left, right)
    return array;
  }





// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
