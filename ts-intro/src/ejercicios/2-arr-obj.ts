//Arrays y objetos
// ARRAYS
let habilidades=[]; //Al poner el cursor encima saldra que es tipo any, esto  implica que admite cualquier tipo de dato, no es recomendable

let habilidades2 =["hola", "hello", "bye"]; //Ahora mismo pone que el tipo es string ya que hay una gran mayoria de string

let habilidades3 =[1, "bye", 4, "jeje"]; //EL tipo de dato sería number y string

//Siempre es buena practica poner el tipo 
let habilidades4 : string[]=["hola", "nombre", "canela"];


//OBJETOS

/*
Para los objetos, los cuales tienen varios tipos de datos se puede hacer de dos maneras

*/

const personaje :any={
    nombre: "canela",
    hp: 10,
    habilidad:[ "small", "beauty", "dog"]
}
//Esta forma no es la mas optima, ya que debemos intentar no poner any


/*
LA FORMA MAS OPTIMA SERÍA HACER UNA INTERFACE Y AÑADIRSELA AL OBJETO

*/

interface Personaje2{
    nombre: string;
    hp: number;
    habilidad: string[];
    //Para poner que algun dato es opcional seria con una ?
    puebloNatal?: string;
}

const personaje2 : Personaje2={
    nombre: "canela",
    hp: 14,
    habilidad: ["little", "dog", "love"]
}
personaje2.puebloNatal="Quismondo";