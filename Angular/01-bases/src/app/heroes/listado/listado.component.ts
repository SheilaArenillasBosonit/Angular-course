import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent  {
   heroes:string[]=["spiderman", "ironman", "hulk", "thor"];

  heroeBorrado: string = "";

   borrarHeroe(){
    console.log("borrando..");

    //this.heroes.splice(3);
    //Como lo hace el:
     this.heroeBorrado = this.heroes.shift() || "";
    //IMPORTANTE: como lo hemos hecho de las dos formas no se borra igual como el 

    //Para mostrar el heroe borrado
   
   }

}
