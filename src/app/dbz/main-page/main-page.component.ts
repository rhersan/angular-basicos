import { Component, Input } from '@angular/core';


import { IPersonaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {
  
  //valor por defecto
  nuevo: IPersonaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }
  
  constructor(){
  }
}
