import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SerchGIFResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  //Propiedad para los gif
  private apiKey:string="An82oAcf2LPgSgE0akqYYMFNxvQpJV6d";
  private servicioUrl :string="http://api.giphy.com/v1/gifs";


  //Vamos a crear una propiedad privada para almacenar los string que nos van dando por el input
  
  private _historial:string[]=[]

//Creamos una propiedad publica de los resultamos de la api
//Sacamos el tipo Gif por que es de la interface, que hemos creado previamente

public resultados:Gif[]=[];


  get historial(){
    

    return [...this._historial];
  }
    
//Contructor de la api
constructor(private http:HttpClient){

this._historial=JSON.parse(localStorage.getItem('historial')!) || [];

  //if (localStorage.getItem('historial')){
   // this._historial=JSON.parse(localStorage.getItem('historial')!) 
  //}
this.resultados=JSON.parse(localStorage.getItem('resultados')!) || []


}


//insertar los nuevos valores

buscarGifs(query: string){

  //Vamos a poner que siempre se escriba en minúscula

  query= query.trim().toLocaleLowerCase();
  


  //Para que no se repitan 
  if(!this._historial.includes(query)){
    this._historial.unshift(query);
     //Para que solo nos salgan 10 resultados
    this._historial=this._historial.splice(0,10);


    //Para grabar en el LocalStorage
    localStorage.setItem('historial', JSON.stringify( this._historial));
  }
  //Peticion a la api

  //1)Importamos el modulo a nivel general en el app. module
  //2)Crear un constructor (colocado debajo del get)
  //Llamar al get
  const params = new HttpParams()
  .set('api_key', this.apiKey)
  .set('limit', '10')
  .set('q', query);

  console.log(params.toString());

    this.http.get<SerchGIFResponse>(`${this.servicioUrl}/search`, {params}).subscribe((resp )=>{
      console.log(resp.data);
      this.resultados =resp.data;
      localStorage.setItem('resultados', JSON.stringify( this.resultados));      
})

}


}
