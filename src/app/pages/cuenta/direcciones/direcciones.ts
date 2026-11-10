import { Component, signal } from '@angular/core';
import { DIRECCIONES } from '../../../data/contenido';
import { IconoComponent } from '../../../shared/icono/icono.component';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { FormularioDireccion } from '../../../shared/formulario-direccion/formulario-direccion';

@Component({
  selector: 'app-direcciones',
  imports: [IconoComponent, ModalComponent, FormularioDireccion],
  templateUrl: './direcciones.html',
  styleUrl: './direcciones.css'
})
export default class Direcciones {
  readonly direcciones = DIRECCIONES;
  formularioAbierto = signal(false);
  eliminarAbierto = signal<string | null>(null);
}
