//Clases basicas

/*
Las clases pueden ser private ,public, static
La diferencia entre ellas es el alcance o la visibilidad entre ellas

Private : solo visible dentro de la clase
Public: Fuera de la clase se puede ver esa propiedad
Static: se puede acceder al valor de la propiedad sin crear una estancia
Por defecto siempre van a ser publicas
DIFERENCIA ENTRE CLASES E INTERFACES:
1)Las clases sirven para crear instancias
2)En una interfaz no se puede definir como funciona algun metodo, mientras que en las clases si
*/


//Extender clases 

class PersonaNormal{

    constructor(
        public nombre:string,
        public direccion:string
    ){}

}

//Para extender una clase se tiene que poner extends
class Heroe extends PersonaNormal{
    /*
    private alterEgo:string;
    public edad: number;
    static  nombreReal:number;
    
    Esto no se puede hacer en las interfaces, no se pueden implementar funciones
    imprimirNombre(){
        return this.alterEgo+ " " + this.edad;
    }*/

        //UNA FORMA DE HACERLO MAS RÁPIDO con constructor 
    constructor(
        public alterEgo:string,
        public edad: number, 
        public nombreReal: string
        ){
            super(nombreReal, "new York"); //ESto implica que llama al constructor de personaNormal
        }
}
const ironman= new Heroe("ironman",45, "Tony");

console.log(ironman);