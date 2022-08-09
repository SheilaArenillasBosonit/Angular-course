//Funciones básicas

  //Lo que le estamos diciendo a la funcion es que tipo de dato tiene que tener cada parámetro ademas del resultado
  function sumar ( a: number, b: number):number{
  
    return a+b;
}
const resultado=sumar(10,20);
console.log(resultado);

//Funcion de flecha


const sumarFlecha =(a:number, b:number): number =>{
    return a+b;
}

//Funciones con objetos como argumentos

//Primero crearemos la intercace para decirle que nombre es tipo string mientras que pv (puntos de vida) es tipo number 
interface PersonajeLOR{
    nombre: string;
    pv:number;
    //Pare definir en la interfaz un tipo funcion:
    mostrarHP:()=>void;
}
function curar (personaje:PersonajeLOR, curarX):void{
    //A la hora de hacer la función le diremos que personaje contiene la interface definida anteriormente
    personaje.pv += curarX;
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR={
    nombre:"canela",
    pv: 50,
    mostrarHP(){
        console.log("puntos de vida", this.pv);
    }
}
 
curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHP();


