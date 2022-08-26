import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
 
})
export class BasicosComponent  {

  nombreLower: string = 'sheila';
  nombreUpper: string = 'CANELA';
  nombreCompleto: string = 'sHeila areniLlas';

  fecha: Date = new Date(); // el día de hoy
  

  

}
