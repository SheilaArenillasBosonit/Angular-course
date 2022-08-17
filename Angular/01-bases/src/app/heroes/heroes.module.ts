import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import{NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
declarations:[
    HeroeComponent,
    ListadoComponent
],
exports:[
    ListadoComponent,
    HeroeComponent

],
imports:[
    //aqui dentro van modulos 
    CommonModule //Pone modulos tales como ngIf o el ngfor, en caso de quitarlo daría error
]



})
export class HeroesModule{}