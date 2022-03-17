import { Component, Input } from '@angular/core';
import { IPersonaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  //@Input('dataPersonajes') personajes: IPersonaje[] = [];
  get personajes(){
    return this.dbzServices.personajes;
  }
  constructor(private dbzServices: DbzService){
    
  }

}
