//////Desestructuración de objetos
interface Reproductor{
    volumen: number;
    segundo:number;
    cancion: string;
    detalles: Detalles
}
interface Detalles{
    autor:string;
    anio: number;
}
 const reproductor: Reproductor={
    volumen:90,
    segundo:36,
    cancion: "Mess",
    detalles:{
        autor: "Ed Sheeran",
        anio: 2015
    }
 }
/* Esta es una manera menos limpia de acceder a los datos del objeto
 console.log("El volumen actual de: ", reproductor.volumen)
 console.log("El segundo actual de: ", reproductor.segundo)
 console.log("la canción actual de: " , reproductor.cancion)
 console.log("El autor es: " , reproductor.detalles.autor)
*/
 //La desestructuración es estraer ciertas propiedades de un objeto y crear variables de ellas

 //En la desestructuración de objetos se hace por nombre, es indiferente la posicion
 const{volumen, segundo,cancion, detalles}=reproductor;
 /*Para los detalles ( que es un objeto)
 tambien se puede hacer
 const{volumen, segundo,cancion, detalles:{autor}}=reproductor;
 */

 const{autor}=detalles

 console.log("El volumen actual de: ", volumen)
 console.log("El segundo actual de: ", segundo)
 console.log("la canción actual de: " , cancion)
 console.log("El autor es: " , autor)

 /////////////Desestructuración de  arreglos

 const dbz: string[]=["Goku","Vegeta", "Pam"];
/*
Esto se podría hacer así, pero no es una forma limpia
 console.log("personaje 1:", dbz[0]);
 console.log("personaje 2:", dbz[1]);
 console.log("personaje 3:", dbz[2]);
 */

 //En la desestructuración de arreglos lo importante es la posición
const[p1, , p3]=dbz; //Al poner comas sin nada por medio, esa posicion se la salga 

console.log("personaje 1:", p1);
 console.log("personaje 3:", p3);