// Decoradores de clases
//El codigo que veremos a continuación es sacado de la pagina oficial de los decoradores de clases 

function classDecorator <T extends {new (...args: any[]): {}}>(
    contructor: T
){
    return class extends contructor{
        newProperty= "new property";
        hello ="override";
    };
}
//Para poder usarlo, tenemos que nombrarlo con el @

@classDecorator
class miSuperClase{
    public miPropiedad:string="abcd1234";
    imprimir(){
        console.log("hola mundo")
    }
}

console.log(miSuperClase);

const miClase = new miSuperClase;
console.log(miClase.miPropiedad);
