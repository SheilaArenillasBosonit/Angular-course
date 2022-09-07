import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',

})
export class BasicosComponent implements OnInit {

 @ViewChild("miFormulario") miFormulario !: NgForm;

 initForm={
  producto: '',
  precio:10,
  existencias: 10
 }


  constructor() { }

  ngOnInit(): void {
  }

nombreValido():boolean{
return this.miFormulario?.form.controls['product']?.invalid 
&&
this.miFormulario?.form.controls['product']?.touched
}

precioValido():boolean{
 
  return this.miFormulario.form.controls['precio'].touched
  &&
  this.miFormulario.form.controls['precio'].value < 0;
 
}

  guardar(){
    this.miFormulario.resetForm({
      precio: 0,
      existencias:0
    });
  }

}
