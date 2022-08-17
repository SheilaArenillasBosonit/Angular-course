import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { HeroesModule } from './heroes/heroes.module';
//Crear un nuevo modulo que se llame contadorModule para el modulo
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    
   
  ],
  imports: [
    BrowserModule,
    HeroesModule, 
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
