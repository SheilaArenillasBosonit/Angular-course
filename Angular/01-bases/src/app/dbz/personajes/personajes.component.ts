import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  
})
export class PersonajesComponent  {

  //Para que al crear los hijos no nos den problemas tenemos que utilizar el Input el cual nos  viene con angular, y de esta manera traer los personajes que estan en el main-pagecomponent.ts 

get personajes(){
  return this.dbzService.personajes;
}

  // @Input() personajes: Personaje[]=[];
  constructor(private dbzService:DbzService){}




}
