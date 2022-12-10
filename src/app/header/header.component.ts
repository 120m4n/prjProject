import { Component } from '@angular/core';
import { CambiarNombreService } from '../services/cambiar-nombre.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Header';

  constructor(public cambiarNombre : CambiarNombreService) {
    this.cambiarNombre.cambiarTitulo.subscribe((data) => {
      console.log('receive:', data);
      this.title = data;
    });
   }

}
