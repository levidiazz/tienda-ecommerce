import { Component, computed, input, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RESENAS, buscarProducto } from '../../../data/contenido';
import { Miga } from '../../../models/producto.model';
import { IconoComponent } from '../../../shared/icono/icono.component';
import { EstrellasComponent } from '../../../shared/estrellas/estrellas.component';
import { MigasComponent } from '../../../shared/migas/migas.component';
import { ModalComponent } from '../../../shared/modal/modal.component';

@Component({
  selector: 'app-resenas-producto',
  imports: [RouterLink, CurrencyPipe, IconoComponent, EstrellasComponent, MigasComponent, ModalComponent],
  templateUrl: './resenas-producto.component.html',
  styleUrl: './resenas-producto.component.css'
})
export class ResenasProductoComponent {
  slug = input<string>('');
  formularioAbierto = signal(false);
  readonly resenas = RESENAS;
  readonly distribucion = [
    { estrellas: 5, cantidad: 10 },
    { estrellas: 4, cantidad: 2 },
    { estrellas: 3, cantidad: 0 },
    { estrellas: 2, cantidad: 0 },
    { estrellas: 1, cantidad: 0 }
  ];
  readonly calificaciones = [5, 4, 3, 2, 1];

  producto = computed(() => buscarProducto(this.slug()) ?? buscarProducto('playera-bordada'));

  migas = computed<Miga[]>(() => {
    const p = this.producto();
    return [
      { texto: 'Inicio', ruta: '/' },
      { texto: p?.nombre ?? 'Producto', ruta: `/producto/${p?.slug}` },
      { texto: 'Reseñas' }
    ];
  });
}
