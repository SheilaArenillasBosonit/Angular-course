import {Component} from "@angular/core";

@Component({
    selector: "app-contador",
    template: `
    <!--Asi es como importamos el titulo que hemos puesto en app component ts-->

<h1>{{titulo}}</h1>

<h3>La base es : <strong>{{ base }}</strong></h3>
<!--Vamos a crear un evento click para que cuando se pulse a cada boton se sume o reste 1

No es recomendable llenar el template de eventos, es mejor hacerlo en el componente de ts
-->
<button (click)="numero=numero+1">+1</button> 

<span>{{numero}} </span>
<!--La forma mas efectiva seria hacer la operación en el componente ts y transladarlo aqui -->
<button (click)="restar(base)">-{{base}}</button>
    `
})
 export class ContadorComponent{
    titulo:string="Contador App";
numero:number =10;


//Ejercicio: restar de 5 en 5, para ello creamos la base que sera 5 y en el component html cambiaremos -1 por la base 
base:number=5;

//Creamos la resta para después poder llevarla a component html
restar(valor:number ){
  this.numero-=valor;
}

}