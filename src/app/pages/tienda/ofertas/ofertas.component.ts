import { Component } from '@angular/core';
import { PRODUCTOS } from '../../../data/contenido';
import { Producto } from '../../../models/producto.model';
import { TarjetaProductoComponent } from '../../../shared/tarjeta-producto/tarjeta-producto.component';
import { MigasComponent } from '../../../shared/migas/migas.component';

@Component({
  selector: 'app-ofertas',
  imports: [TarjetaProductoComponent, MigasComponent],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {
  readonly migas = [{ texto: 'Inicio', ruta: '/' }, { texto: 'Ofertas' }];
  readonly filtros = ['Todas (8)', 'Electrónica (4)', 'Ropa (1)', 'Calzado (1)', 'Alimentos (2)'];

  private readonly rebajas: Record<string, number> = {
    'audifonos-bluetooth': 1299,
    'mouse-inalambrico': 249,
    'playera-negra': 199,
    'tenis-urbanos': 899,
    'cafe-oaxaca': 180,
    'celular-5g': 5999,
    'laptop-ryzen-5': 12999,
    'mezcal-espadin': 650
  };

  private readonly precios: Record<string, number> = {
    'audifonos-bluetooth': 999,
    'mouse-inalambrico': 199,
    'playera-negra': 159,
    'tenis-urbanos': 719,
    'cafe-oaxaca': 153,
    'celular-5g': 5399,
    'laptop-ryzen-5': 11699,
    'mezcal-espadin': 585
  };

  readonly productos: Producto[] = PRODUCTOS
    .filter((p) => p.slug in this.precios)
    .map((p) => ({ ...p, precio: this.precios[p.slug], precioAnterior: this.rebajas[p.slug] }));
}
