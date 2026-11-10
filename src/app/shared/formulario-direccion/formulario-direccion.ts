import {  Component, output } from '@angular/core';

@Component({
  selector: 'formulario-direccion',
  imports: [],
  templateUrl: './formulario-direccion.html',
})
export class FormularioDireccion {
  guardar = output<void>();
  cancelar = output<void>();
}
