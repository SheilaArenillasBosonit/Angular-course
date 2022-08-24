import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorCapitalComponent } from "./Pais/pages/por-capital/por-capital.component";
import { PorPaisComponent } from './Pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from "./Pais/pages/por-region/por-region.component";
import { VerPaisComponent } from './Pais/pages/ver-pais/ver-pais.component';


/*
Para hacer las rutas tenemos que importar Routes de angular y usarla en una constante, la cual será un arreglo donde habra objetos llenos de componentes.

*/
const routes: Routes =[
    {
        /*
        en este primer caso pondremos que el path en  vacio para indicar que sera el que aparezca constantemente y un pathMatch de full
        */
        path:"",
        component:PorPaisComponent,
        pathMatch:"full"

    },
    {
        //En este caso al path le estamos indicando que sea por region
        path:'region',
        component: PorRegionComponent

    },
    {
        path: 'capital',
        component:PorCapitalComponent
    },
    {
        /*
        En el caso de ver pais la en el path hay que añadirle el id del pais 
        */
       path:'pais/:id',
       component: VerPaisComponent

    },
    {
     //Siempre hay que añadir una excepción por si la persona se encuentra situada en cualquier ruta que no esté indicada, esta siempre la pondremos la última

     path:'**',
     redirectTo:''

        
    }
]

@NgModule({
    imports:[
        //Importamos el Router Module, y en el usamos el for Root al cual le indicamos el array que hemos creado con las rutas
        RouterModule.forRoot(routes)

    ],
    exports:[
        RouterModule

    ]

})
export class AppRoutingModule{}