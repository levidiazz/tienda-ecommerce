import { Component, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CATEGORIAS, PRODUCTOS } from '../../../data/contenido';
import { PROVEEDORES } from '../../../data/admin';
import { IconoComponent } from '../../../shared/icono/icono.component';
import { ModalComponent } from '../../../shared/modal/modal.component';

@Component({
  selector: 'app-admin-productos',
  imports: [CurrencyPipe, IconoComponent, ModalComponent],
  templateUrl: './productos.component.html',
  styleUrls: ['../admin.css', './productos.component.css']
})
export class AdminProductosComponent {
  readonly productos = PRODUCTOS;
  readonly categorias = CATEGORIAS;
  readonly proveedores = PROVEEDORES;
  formularioAbierto = signal(false);
  eliminarAbierto = signal<string | null>(null);
}
