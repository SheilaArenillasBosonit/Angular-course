
/* Tipos de datos: en Ts, podremos expecificar el tipo de dato, si es un string, un número, un booleano, etc
Esto, solo pasa cuando es un let, ya que cuando una variable es const (constante), da igual que tipo de dato sea ya que no se puede modificar
*/
let nombre= "Sheila"; //Aqui podemos ver que si ponemos el cursor por encima pone  let nombre: String, lo cual nos indica que es un string

let nombre2 : string = "Canela"; //De esta manera ya le indicamos que es un string 

let hp: number | string= 123 ; //De esta manera le indicamos que puede ser un número o un string 

let boleano: boolean= false; //Para booleanos



console.log(nombre, nombre2, hp,boleano);