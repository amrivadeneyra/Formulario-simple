import { Component, OnInit } from '@angular/core';

import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  /*
  nombreInput: string = '';
  apellidoInput: string = '';
 
  agregarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personaCreada.push(persona1);
    this.nombreInput = '';
    this.apellidoInput = '';
    
  }
*/

  // **simplificando el codigo
  agregar: any = {};

  constructor(
    private logginService: LoggingService,
    private personaService: PersonasService) {
    this.personaService.saludar.subscribe((indice: number) => alert("El indice es: " + (indice)));
  }

  ngOnInit(): void {
    /* TODO document why this method 'ngOnInit' is empty */
  }

  agregarPersona() {
    // this.personas.push(this.agregar);
    //this.logginService.MssgConsola("Enviamos persona con nombre: " + this.agregar.nombre + " y apellido:" + this.agregar.apellido);
    //this.personaCreada.emit(this.agregar);

    this.personaService.agregarPersona(this.agregar);




    this.agregar = {};
  }
}
