"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
this.head = null
}

function Node(value) {

  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(v){
 var newNode = new Node(v);
 var current = this.head;

 if(!current){
   this.head = newNode;
   return 
  } 
 while(current.next) { 
 current = current.next;
 }
 current.next = newNode;
 }


LinkedList.prototype.remove = function () {
   // Aqui me voy a guardar en una variable el valor de mi head
  var current = this.head;
  // pregunto si mi lista esta vacia retornar null
  if(!current) return null;
  //aqui pewguntamos si tiene un solo nodo
  if(current.next === null){
    this.head = null;
    return current.value;     //  
  }
// si tiene mas de un valor   
// 2--->3-->4---null   5 preguntamos si tiene dos . next entonces entramos al while
while(current.next.next){
  current = current.next
}
// ahora guardamos current . next.next que seria el 5 para que ahora el 4 apunte a null
//lo guardamos 
var aux = current.next;
// lo borramos y ahora ya apuntammmos a null
current.next = null;
return aux.value;
}



LinkedList.prototype.search = function (v) {
// siempre guardamos el valor de this head en una variable
var current = this.head

if(!current) return null;
// preguntamos si current esta vacia y si es asi retornamos null
// si no esta vacia 
// 2-->--3--->4--- null preguntamoscon el while mientras exista current
while(current){ 
// segun el test recibimos una funcion con typeofque compara si encontramos el valor que buscaba lo devuelve
if(typeof v === "function") {
  // ejecutar la funcion con el valor del nodo
  // si me da true es el valor que buscaba
  if(v(current.value)){
    return current.value;
  }
}
if (current.value === v) return current.value
current = current.next
 }
 return null;
}







/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {                            
this.numBuckets = 35;
this.buckets = [];
}
  
HashTable.prototype.hash = function (value) {
  var res = 0;
   // vamos a recorrer los strings, y revisando sus valores de charCodeat ( que este metodo te devuelve mediante su Incice o Index(0) el numero de charCodeat de cada letra del String)
  for (let index = 0; index < value.length; index++) {
    res = res + value.charCodeAt(index);
    // Por supuesto devolvemos el resultado, pero le pasamos el modulo para que no se pase de 35 que es su numero de casilleros.  %
  }
   return res % this.numBuckets;

}


HashTable.prototype.set = function (key, value) {
   // el objeto set guarda los valores de la hashtable
if(typeof key !== "string") throw new TypeError ('Keys must be strings')  
var index = this.hash(key)
//para evitar los valores de pisen, cuando dos palabras tengan las mismas letras. // crea un objeto vacio para que ahi se almacenen todos los valores y no se pisen.
if(!this.buckets[index]) {
  this.buckets[index] = {}
}
this.buckets[index][key] = value
}



 // el metodo get busca los valores key en la posicion indicadadel las hashtable
HashTable.prototype.get = function(key) {
// pasamos la funcion Hasheadora  y retornarmos el numero de buckets en la posicion de index
 var index = this.hash(key)
  return this.buckets[index][key]
}


HashTable.prototype.hasKey = function (key){
// consigue la posicion con get
 var index = this.hash(key);
 return this.buckets[index].hasOwnProperty(key)
}
// se valida que se objeto buscado sea el correspondiente


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
