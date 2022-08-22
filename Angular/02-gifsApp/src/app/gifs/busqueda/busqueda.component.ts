import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  
})
export class BusquedaComponent  {
  //Para borrar lo que hay en la caja del input vamos a usar un nuevo decorador

  @ViewChild("txtBuscar")txtBuscar !:ElementRef<HTMLInputElement>; //Al hacerlo así es como usar el query selector
  //Sabemos que es de tipo ElemenRef por que nos lo ha dicho la consola de las devtools, y le hemos puesto !: para que nos deje de dar error.
  //Poner el signo ! se conoce como el non-null assertion operator y sirve para asegurarse que el objeto no es nulo (es algo que solo nso ofrece typescript)
  //Le ponemos que el elementRef es de tipo HTML input element para asegurarnos que es el input del html
   

  //Inyectamos los servicios
  constructor(private GifsService: GifsService){}

  buscar(){

    //Para extraer el valor de la caja de información lo haremos de esta manera: 
    
    const valor = this.txtBuscar.nativeElement.value;

    //Vamos a eliminar la opción de que cuando no se escriba nada, se pinte el resultado vacio
    if(valor.trim().length===0){
      return;
    }
    
    this.GifsService.buscarGifs(valor);

    //Para borrar el contenido , tendriamos que poner que el valor es vacío
    this.txtBuscar.nativeElement.value="";
    
  }
  // una vez recogido el valor con el keyup, le ponemos un termino que va a ser de tipo string y lo mostramos por consola

  

}
