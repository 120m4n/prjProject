import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CambiarNombreService {

  public cambiarTitulo:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
}
