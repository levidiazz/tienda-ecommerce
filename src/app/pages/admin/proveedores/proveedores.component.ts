import { Component, signal } from '@angular/core';
import { PROVEEDORES } from '../../../data/admin';
import { IconoComponent } from '../../../shared/icono/icono.component';
import { ModalComponent } from '../../../shared/modal/modal.component';

@Component({
  selector: 'app-admin-proveedores',
  imports: [IconoComponent, ModalComponent],
  templateUrl: './proveedores.component.html',
  styleUrl: '../admin.css'
})
export class AdminProveedoresComponent {
  readonly proveedores = PROVEEDORES;
  formularioAbierto = signal(false);
}
