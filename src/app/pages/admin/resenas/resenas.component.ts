import { Component } from '@angular/core';
import { RESENAS_ADMIN } from '../../../data/admin';
import { IconoComponent } from '../../../shared/icono/icono.component';
import { EstrellasComponent } from '../../../shared/estrellas/estrellas.component';

@Component({
  selector: 'app-admin-resenas',
  imports: [IconoComponent, EstrellasComponent],
  templateUrl: './resenas.component.html',
  styleUrl: '../admin.css'
})
export class AdminResenasComponent {
  readonly resenas = RESENAS_ADMIN;
  readonly filtros = ['Todas', 'Pendientes', 'Publicadas', 'Ocultas'];
}
