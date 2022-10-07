"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
this.value = value
this.right = null
this.left = null

}


BinarySearchTree.prototype.size = function () {
if(this.right === null && this. left === null){
return 1 
} if( this. left === null){
  return 1 + this.right.size()
}if(this.right === null){
  return 1 + this.left.size()
}
return 1 + this.right.size() + this.left.size()
}


BinarySearchTree.prototype.insert = function (value) {
  if(value > this.value){
  if(this.right === null){
    this.right = new BinarySearchTree(value)
    }else{
      this.right.insert(value)
    }
  }if(value < this.value){
    if(this.left === null){
      this.left = new BinarySearchTree(value)
    }else{
     this.left.insert(value)
    }
  }
}


BinarySearchTree.prototype.contains = function(value) {
  if(value === this.value){
    return true
  }if(value > this.value && this.right){
    return this.right.contains(value)
  }else if (value < this.value && this.left){
    return this.left.contains(value)
  }else{
    return false
  }

}

// IN ORDER ---> IZQ, ROOT, DER
// PRE ORDER ---> ROOT, IZQ, DER
// POST ORDER ----> IZQ, DER, ROOT.





BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
if(order === "in-order" || !order){
  this.left && this.left.depthFirstForEach(cb, order)
  cb(this.value)
  this.right && this.right.depthFirstForEach(cb, order)
} else if (order === "pre-order")
{
  cb(this.value)
  this.left && this.left.depthFirstForEach(cb, order)
  this.right && this.right.depthFirstForEach(cb, order)
}else if (order === "post-order"){
  this.left && this.left.depthFirstForEach(cb, order)
  this.right && this.right.depthFirstForEach(cb, order)
  cb(this.value)
}
}



BinarySearchTree.prototype.breadthFirstForEach = function(cb, array) {
  if(!array){
    var array = []
  }
 cb(this.value)
 this.left && array.push(this.left)
 this.right && array.push(this.right);
 array.length && array.shift().breadthFirstForEach(cb, array)

}



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
