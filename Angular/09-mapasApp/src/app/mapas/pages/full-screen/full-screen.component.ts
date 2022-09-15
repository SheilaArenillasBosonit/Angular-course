import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles:[
    `
    #mapa{
      width:100%;
      height:100%;
    }
    `
  ]
 
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log('FullScreen');

   

    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center:[  -3.784980301850146, 40.28723497274478],
      zoom:17
          });

  }

}
