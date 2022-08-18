import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Personaje} from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
 
})
export class AgregarComponent  {

 //El Output se utiliza cuando queremos mandar algo de hijos a padres
 //Mientras que el Input es de padres a hijos

 @Input() nuevo: Personaje={
    nombre:"",
    poder:0
  }
     constructor(private dbzService:DbzService){}

  //@Output ()  onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  //Para que no se recargue la página se puede hacer asi:
agregar(){
  if(this.nuevo.nombre.trim().length===0){
    return;
  }

  console.log(this.nuevo);

  //this.onNuevoPersonaje.emit(this.nuevo);

  //Asi sería con los servicios
  this.dbzService.agregarPersonaje(this.nuevo);

  //Primero vamos a insertar los personajes
  
  this.nuevo={
    nombre: "",
    poder:0
  }
}


  

}
