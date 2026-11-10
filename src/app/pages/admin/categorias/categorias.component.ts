import { Component, signal } from '@angular/core';
import { CATEGORIAS, PRODUCTOS } from '../../../data/contenido';
import { IconoComponent } from '../../../shared/icono/icono.component';
import { ModalComponent } from '../../../shared/modal/modal.component';

@Component({
  selector: 'app-admin-categorias',
  imports: [IconoComponent, ModalComponent],
  templateUrl: './categorias.component.html',
  styleUrls: ['../admin.css', './categorias.component.css']
})
export class AdminCategoriasComponent {
  readonly categorias = CATEGORIAS;
  formularioAbierto = signal(false);

  conteo(slug: string): number {
    return PRODUCTOS.filter(p => p.categoriaSlug === slug).length;
  }
}
