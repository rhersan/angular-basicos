import { Component,EventEmitter, Input, Output } from '@angular/core';



import { IPersonaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input() nuevo: IPersonaje = {
    nombre: '',
    poder: 0
  }
  constructor(private dbzService: DbzService){
    
  }
  //@Output() onNuevoPersonaje: EventEmitter<IPersonaje> = new EventEmitter<IPersonaje>();
  
  agregar(){
    if(this.nuevo.nombre.trim().length === 0)
      return;

    //this.onNuevoPersonaje.emit(this.nuevo);
      this.dbzService.addCharacteres(this.nuevo);
      this.nuevo = {
        nombre:'', 
        poder:0
      }
    
  }

}
