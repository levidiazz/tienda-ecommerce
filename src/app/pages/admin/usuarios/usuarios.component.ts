import { Component, signal } from '@angular/core';
import { USUARIOS } from '../../../data/admin';
import { IconoComponent } from '../../../shared/icono/icono.component';
import { ModalComponent } from '../../../shared/modal/modal.component';

@Component({
  selector: 'app-admin-usuarios',
  imports: [IconoComponent, ModalComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: '../admin.css'
})
export class AdminUsuariosComponent {
  readonly usuarios = USUARIOS;
  formularioAbierto = signal(false);
}
