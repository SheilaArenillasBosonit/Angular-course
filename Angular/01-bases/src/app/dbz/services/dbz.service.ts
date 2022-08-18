import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";
//Los servicios son lugares centralizados donde se va a tener la información
//Aqui es donde usaremos el decorador injectable, el cual hay que exportarlo.


@Injectable()
 export class DbzService{

    private _personajes:Personaje[]=[
        {
          nombre: "Goku",
          poder: 15000
        },
        {
          nombre: "vegeta",
          poder: 7500
        }
      ];
      
      get personajes():Personaje[]{
        return [...this._personajes]
      }
    

    constructor(){}

    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje);
    }

}