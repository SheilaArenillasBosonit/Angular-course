import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
   //Para poner el validador de nombre y apellido, lo que estamos diciendole es que tienen que ser dos partes y en ambas partes puede haber cualquier letra de la a a la z tanto en mayuscula como en minuscula
   public nombreApellidoPattern: string='([a-zA-Z]+) ([a-zA-Z]+)';

   //Validador email
   public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  //Metodo para el username

  noPuedeSerStrider(control: FormControl):ValidationErrors | null{
    const valor= control.value?.trim().toLowerCase();
    if(valor === 'strider'){
      return {
        noStrider: true
      }
    }
    return null;
  }

  camposIguales(campo1: string, campo2: string){
    return( formGroup: AbstractControl): ValidationErrors | null=>{

      const pass1= formGroup.get(campo1)?.value;
      const pass2= formGroup.get(campo2)?.value;

      if (pass1 !== pass2){
        formGroup.get(campo2)?.setErrors({noIguales: true})
        return {noIguales:true}
      }

      formGroup.get(campo2)?.setErrors(null);

      return null;
    }
  }
  
}
