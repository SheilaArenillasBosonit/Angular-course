//Genericos
//Para indicar que es cualquier tipo de dato ( generico) lo ponemos con <T>    

function queTipoSoy<T>(argumento: T){
    return argumento;
}
let soyString = queTipoSoy("Hola");
let soyNumero= queTipoSoy(100);
let soyArray= queTipoSoy([1,2,3,4,5,6]);

//Para cambiar de un generico a un explicito sería:

let soyExplicito= queTipoSoy<number>(100);