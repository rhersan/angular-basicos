import { Injectable } from "@angular/core";
import { IPersonaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {


    private _personajes: IPersonaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ];

    get personajes():IPersonaje	[]{
        // las llaves indica que es un arreglo y los 3 puntos 
        // operador spred
        return  [...this._personajes];
    }

    constructor() {}

    addCharacteres(objPersonaje: IPersonaje){
        this._personajes.push( objPersonaje );
    }


}