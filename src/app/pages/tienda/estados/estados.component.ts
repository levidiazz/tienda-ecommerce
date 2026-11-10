import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconoComponent } from '../../../shared/icono/icono.component';
import { EstadoVacioComponent } from '../../../shared/estado-vacio/estado-vacio.component';
import { ModalComponent } from '../../../shared/modal/modal.component';

@Component({
  selector: 'app-estados',
  imports: [RouterLink, IconoComponent, EstadoVacioComponent, ModalComponent],
  templateUrl: './estados.component.html',
  styleUrl: './estados.component.css'
})
export class EstadosComponent {
  dialogo = signal<'sesion' | 'eliminar' | null>(null);
}
