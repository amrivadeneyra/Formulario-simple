import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

/**
 * sirve para inyectar un servicio 
 * dentro de otro servicio
 */
@Injectable()
export class PersonasService {
    //dos formas de agregar datos al arreglo Persona[]
    personas: Persona[] = [
        { 'nombre': 'Manuel', 'apellido': 'Rivadeneyra' },
        new Persona('Anderson', 'Isla')
    ];

    saludar = new EventEmitter<number>()

    constructor(private logginService: LoggingService) { }

    agregarPersona(persona: Persona) {
        this.logginService.MssgConsola('Agregamos persona: ' + persona.nombre);
        this.personas.push(persona);
    }
}