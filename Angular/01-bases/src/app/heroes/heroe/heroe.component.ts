import { Component } from "@angular/core";



@Component({
    selector: "app-heroe",
    templateUrl: "heroe.component.html"
})

export class HeroeComponent{
    nombre: string ="iron man ";
    edad: number =45
    //Para poner el nombre en mayuscula 
    get nombreCapitalizado(): string{
        return this.nombre.toLocaleUpperCase();
    }
    //Para obtener el nombre
    obtenerNombre():string{
        return `${this.nombre}- ${this.edad} `;
    }

    //Ahora vamos a crear los metodos para cambiar el nombre y la edad
    cambiarNombre():void{
        this.nombre="spiderman";
    }

    cambiarEdad():void{
        this.edad=20;
    }


}