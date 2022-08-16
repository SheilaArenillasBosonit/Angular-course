//Desestructuración de argumentos en una función

//creamos una inteface y dos objetos con productos distintos

//Vamos a exportar esta interface
export interface Producto{
    desc:string;
    precio: number
}
const telefono: Producto={
    desc: "nokia A1",
    precio: 150
}

const tablet: Producto={
    desc: "Ipad",
    precio: 300,
}

 export function calculaISV(productos:Producto[]):number{
    let total=0;
    //Para la desestructuración seria poner lo que queremos, en este caso el precio y no haría falta poner producto.precio simplemente precio
    productos.forEach(({precio})=>{
        total+=precio;

    })
    return total =0.15;
}
const articulos=[telefono, tablet];


const isv=calculaISV(articulos);


console.log("ISV", isv)
