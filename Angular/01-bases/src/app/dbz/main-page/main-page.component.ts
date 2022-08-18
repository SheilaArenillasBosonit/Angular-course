import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
 
})
export class MainPageComponent  {

  nuevo:Personaje={
    nombre: "Canela",
    poder: 2000
  }

  //Inyección de dependencias: estamos inyectando el servicio en el componente, también hay que importarlo 
  constructor(){}
  
}
