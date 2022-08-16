//Importaciones y exportaciones
//Vamos a importar la interfaz del apartado 6, la forma sería asi:
import { Producto, calculaISV } from "./6-desestructuración-funcion";



const carritoCompra:Producto[]=[
    {
        desc:"telefono 1",
        precio:100
    },
    {
        desc:"telefono 2",
        precio:150
    }
];

const isv= calculaISV(carritoCompra);

console.log("ISV", isv)

