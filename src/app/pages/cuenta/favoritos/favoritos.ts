import { Component } from '@angular/core';
import { PRODUCTOS } from '../../../data/contenido';
import { TarjetaProductoComponent } from '../../../shared/tarjeta-producto/tarjeta-producto.component';

@Component({
  selector: 'app-favoritos',
  imports: [TarjetaProductoComponent],
  template: `
    <header class="cabecera-pagina">
      <div>
        <h1 class="titulo-1">Mis favoritos</h1>
        <p class="texto-sec">{{ productos.length }} productos guardados</p>
      </div>
    </header>
    <ul class="rejilla">
      @for (p of productos; track p.sku) {
        <li><app-tarjeta-producto [producto]="p" [favorito]="true" /></li>
      }
    </ul>
  `,
  styles: [`
    .rejilla { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    @media (max-width: 1000px) { .rejilla { grid-template-columns: repeat(2, 1fr); gap: 16px; } }
  `]
})
export default class Favoritos {
  readonly productos = PRODUCTOS.filter(p => ['playera-bordada', 'audifonos-bluetooth', 'lampara-led', 'cafe-oaxaca', 'tenis-urbanos', 'tarjeta-regalo'].includes(p.slug));
}
