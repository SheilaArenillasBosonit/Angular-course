//Tarea 1: hacer interface para el objeto de superHeroe

interface superHeroe{
    nombre:string;
    edad:number;
    //Para el objeto de la direccion crearemos otra interface
    direccion: Direccion,
    mostrarDireccion:()=>void;
}

interface Direccion{
        calle:string;
        pais:string;
        ciudad: string;
   
}


const superHeroe: superHeroe={
    nombre: "Spiderman",
    edad: 30,
    direccion:{
        calle: "Main St",
        pais: "USA",
        ciudad: "NY"
    },
    mostrarDireccion(){
        return this.nombre+','+ this.direccion.ciudad + ','+ this.direccion.pais;

    }
    
}
const direccion= superHeroe.mostrarDireccion();
console.log(direccion);