import { Component, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATEGORIAS, PRODUCTOS } from '../../../data/contenido';
import { Miga } from '../../../models/producto.model';
import { TarjetaProductoComponent } from '../../../shared/tarjeta-producto/tarjeta-producto.component';
import { IconoComponent } from '../../../shared/icono/icono.component';
import { MigasComponent } from '../../../shared/migas/migas.component';

@Component({
  selector: 'app-catalogo',
  imports: [RouterLink, TarjetaProductoComponent, IconoComponent, MigasComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  categoria = input<string>();
  filtrosAbiertos = signal(false);

  readonly categorias = CATEGORIAS;
  readonly tallas = ['CH', 'M', 'G', 'XG'];

  categoriaActual = computed(() => CATEGORIAS.find((c) => c.slug === this.categoria()));

  productos = computed(() => {
    const slug = this.categoria();
    return slug ? PRODUCTOS.filter((p) => p.categoriaSlug === slug) : PRODUCTOS;
  });

  migas = computed<Miga[]>(() => {
    const actual = this.categoriaActual();
    return actual
      ? [{ texto: 'Inicio', ruta: '/' }, { texto: 'Tienda', ruta: '/catalogo' }, { texto: actual.nombre }]
      : [{ texto: 'Inicio', ruta: '/' }, { texto: 'Tienda' }];
  });

  contar(slug: string): number {
    return PRODUCTOS.filter((p) => p.categoriaSlug === slug).length;
  }

  contarSub(sub: string): number {
    return PRODUCTOS.filter((p) => p.subcategoria === sub).length;
  }
}
