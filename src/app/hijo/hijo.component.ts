import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Propiedades } from '../models/propedades.model';
import { CambiarNombreService } from '../services/cambiar-nombre.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
 @Input() propiedades : Propiedades;

  @Output()
  changeName: EventEmitter<string> = new EventEmitter<string>();

  cambiarNombrePadre(data : any) {
    if (typeof data === 'string') {
      this.changeName.emit(data);
    }
  }
  cambiaTitulo(data : any) {
    if (typeof data === 'string') {
      this.cambiarNombreService.cambiarTitulo.emit(data);
    }
  }

  constructor(public cambiarNombreService : CambiarNombreService) { 
    this.propiedades = {
      nombre_padre : 'Padre',
      enable_change_header : false,
      enable_change_title : false
    }
  }

}
