import { Component, computed, input, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { buscarProducto } from '../../../data/contenido';
import { Miga } from '../../../models/producto.model';
import { IconoComponent } from '../../../shared/icono/icono.component';
import { EstrellasComponent } from '../../../shared/estrellas/estrellas.component';
import { MigasComponent } from '../../../shared/migas/migas.component';
import { ModalComponent } from '../../../shared/modal/modal.component';

type Pestana = 'descripcion' | 'envio';

const ETIQUETA_OPCION: Record<string, string> = {
  talla: 'Talla',
  numero: 'Número',
  version: 'Capacidad',
  presentacion: 'Presentación',
  digital: 'Monto'
};

const COLOR_CSS: Record<string, string> = { Negro: '#1a1a1a', Azul: '#1c2e5c', Blanco: '#f2f2f2' };

@Component({
  selector: 'app-producto',
  imports: [RouterLink, CurrencyPipe, IconoComponent, EstrellasComponent, MigasComponent, ModalComponent],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  slug = input<string>('');
  pestana = signal<Pestana>('descripcion');
  guiaAbierta = signal(false);
  imagenActiva = signal(0);

  producto = computed(() => buscarProducto(this.slug()));
  etiquetaOpcion = computed(() => ETIQUETA_OPCION[this.producto()?.tipo ?? ''] ?? '');
  ahorro = computed(() => {
    const p = this.producto();
    return p?.precioAnterior ? p.precioAnterior - p.precio : 0;
  });

  migas = computed<Miga[]>(() => {
    const p = this.producto();
    return p
      ? [{ texto: 'Inicio', ruta: '/' }, { texto: p.categoria, ruta: `/catalogo` }, { texto: p.subcategoria }, { texto: p.nombre }]
      : [{ texto: 'Inicio', ruta: '/' }, { texto: 'Producto' }];
  });

  readonly tablaTallas = [
    ['CH', '92', '68', '42'],
    ['M', '100', '71', '45'],
    ['G', '108', '74', '48'],
    ['XG', '116', '77', '51']
  ];

  colorCss(color: string): string {
    return COLOR_CSS[color] ?? '#cccccc';
  }
}
