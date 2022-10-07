'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {

 // se tiene que devolver el factorial de n (n!)
 // eje:
 // el factorial de 3 es 6 (3* 2 * 1)
 // depues definimos el caso de corte. 
// si queremos validar que n no se numero negativo porque un negativo no tiene factorial o que n si sea un numero entero. ponemos if( n < 0 ) return "N no puede ser negativo" y if (n % 1 !==0) return "no se puede sacar factorial" 
 if(n === 0 || n === 1) return 1

 // se aplica la recursion, y se devuele una funcion que se llama asi misma.

 return n * nFactorial(n - 1)


}

function nFibonacci(n) {

  if (n === 0) return 0;
  if (n === 1) return 1;

  return nFibonacci(n-1) + nFibonacci(n-2); 

}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden. RESPETA EL ORDEN EXISTENTE AL FINAL
  - dequeue: remueve un valor respetando el orden. Retorna undefined
  SACA UN VALOR AL INICIO DE LA COLA COMO EN UN BANCO. 
  cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora. LA FUNCION CONSTRUCTORA INICIA CON MAYUSCULA EL LA SEGUNDA PALABRA, PUEDE LLEVAR EL THIS ADENTRO Y NO RETORNA A NADA a menos que el Test asi lo pida.
*/

function Queue() {
   this.arr = [];


   Queue.prototype.enqueue = function (value){
    this.arr.push(value)
   }

   Queue.prototype.dequeue = function (){
    return this.arr.shift()
   }


   Queue.prototype.size = function () {

    return this.arr.length
   }

}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
