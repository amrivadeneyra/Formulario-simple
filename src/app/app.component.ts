import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Personas';

  //dos formas de agregar datos al arreglo Persona[]
  personas: Persona[] = [{ 'nombre': 'Manuel', 'apellido': 'Rivadeneyra' }, new Persona('Anderson', 'Isla')];
  /*
    nombreInput: string = '';
    apellidoInput: string = '';
  
    agregarPersona() {
      let persona1 = new Persona(this.nombreInput, this.apellidoInput);
      this.personas.push(persona1);
      this.nombreInput = '';
      this.apellidoInput = '';
      
    }
  */

  // **simplificando el codigo
  agregar: any = {};

  agregarPersona() {
    this.personas.push(this.agregar);
    this.agregar = {};
  }
}
