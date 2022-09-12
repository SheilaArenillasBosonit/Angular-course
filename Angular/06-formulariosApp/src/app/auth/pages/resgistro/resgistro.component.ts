import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidadorService } from '../../../shared/validator/email-validador.service';

@Component({
  selector: 'app-resgistro',
  templateUrl: './resgistro.component.html',
  
})
export class ResgistroComponent implements OnInit {

  
  

  miFormulario: FormGroup= this.fb.group({
    nombre: ['', [ Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [ Validators.required, Validators.pattern(this.validatorService.emailPattern) ], [this.emailValidator] ],
    username: ['', [ Validators.required, this.validatorService.noPuedeSerStrider]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required, ]]
  },{
    validators:[ this.validatorService.camposIguales('password', 'password2') ]

  });

 

  get emailErrorsMsg(): string{

    const errors = this.miFormulario.get('email')?.errors;

    if(errors?.['required']){
      return 'Email es obligatorio';
    }else if(errors?.['pattern']){
      return 'el email no tiene el formato correcto';
    }else if(errors?.['emailTomado']){
      return 'el email ya existe';
    }
    return '';
  }



  constructor( private fb: FormBuilder,
               private validatorService: ValidatorService,
               private emailValidator: EmailValidadorService) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre:" Sheila Arenillas",
      email: "test@test.com",
      username: "sheila",
      paswword: '123456',
      paswword2: '123456'
    })
  }

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid 
    && this.miFormulario.get(campo)?.touched;

  }

 


 submitFormulario(){
  console.log(this.miFormulario.value);

  this.miFormulario.markAllAsTouched();
 } 
}
