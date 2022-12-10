import { Component } from '@angular/core';
import { Propiedades } from '../models/propedades.model';
import { CambiarNombreService } from '../services/cambiar-nombre.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  public propiedadesHardcode : Propiedades = {
    nombre_padre : 'I am the father',
    enable_change_header : false,
    enable_change_title : false
    };

  emiteCambioTitulo() {
    this.cambiarNombreServicio.cambiarTitulo.emit('Padre');
  }
  cambiarNombre($event: string) {
    console.log($event);
   this.miNombre = $event;
  }

  miNombre: string = 'Uber Alles';

  constructor(public cambiarNombreServicio : CambiarNombreService) {
    
   }



}
