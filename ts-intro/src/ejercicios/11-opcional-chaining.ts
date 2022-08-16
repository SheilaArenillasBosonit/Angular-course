//Encadenamiento opcional
interface Pasajero{
    nombre: string;
    hijos?: string []
}
const pasajero1 :Pasajero={
    nombre: "Fernando"
}
const pasajero2 : Pasajero={
    nombre: "Melisa",
    hijos: ["Natalia", "Gabriel"]
}

function imprimirHijos( pasajero :Pasajero):void{
    //Pondremos ? para decirle que busque si el pasajero tiene hijos o no  y en caso de que no que devuelva 0
    const cuantosHijos = pasajero.hijos?.length ||0 ;

    console.log(cuantosHijos);
}

imprimirHijos(pasajero1);