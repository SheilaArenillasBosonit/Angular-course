import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

//Modulo personalizado

import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el local de la app
import LocalES from '@angular/common/locales/es';
import{ registerLocaleData } from '@angular/common';
registerLocaleData(LocalES);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
   
    
  ],
  providers: [
    {provide:LOCALE_ID, useValue : 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
