
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;   // 
var a = 5;//
var b = 10;//
var c = function(a, b, c) {
  var x = 10;
  console.log(x);// 10
  console.log(a);//8
  var f = function(a, b, c) {
    b = a;
    console.log(b); //8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); //9
}
c(8,9,10);
console.log(b);// 10
console.log(x);//1
```

```javascript
console.log(bar);//UNDEFINED
console.log(baz);//error
foo(); //  HOLA
function foo() { console.log('Hola!'); } //
var bar = 1;  //
baz = 2;
```

```javascript
var instructor = "Tony"; //
if(true) {
    var instructor = "Franco";//
}
console.log(instructor);// Franco
```

```javascript
var instructor = "Tony";
console.log(instructor);// m
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);// Franco
   }
})();
console.log(instructor);// Toni
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); //The Flash
    console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); // Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //2
"2" * "3" // 6
4 + 5 + "px" // '9px'
"$" + 4 + 5// '45'
"4" - 2//  2
"4px" - 2 //  NaN   = not a number
7 / 0 // Infinity
{}[0] // [0] No hay porque!
parseInt("09") // 9
5 && 2 // 2   !!2 = true doble negacion es true, y una sola negacion ! false
2 && 5 // 5  los numeros negaticos son true se queda con el ultimo true y si al principio hay un false ahi corta la ejecucuion
5 || 0 // 5  aqui Or || devuelve el primer true que encuentre. ya no se fija en el resto. 
0 || 5 // 5 
[3]+[3]-[10] // ---> "3" + "3" --- "33" - [10] --> 33 - 10 --> 23
3>2>1 // false  por lo siguiente  ---> 3>2 ---> true > 1 ---- 1 > 1 ---> false
[] == ![] // TRUE  porque solo con los tres iguales se soluciona ===
//mientras Js // hace lo siguiente [] == ![] ---> [] == false ---> [] == 0---> ""==0 --> 0==0   
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined
   console.log(foo()); // 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';   

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;   
      }
   }
};

console.log(obj.prop.getFullname()); // Aurelio de Rosa

var test = obj.prop.getFullname;

console.log(test()); // Juan Perez
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000); // se imprimer primero el console, 1, despues el 4, ya que no tienen tiempo de espera, luego el 3, y despues es 2. 
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing(); // 1432
```
