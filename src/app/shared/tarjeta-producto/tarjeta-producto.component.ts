import { Component, computed, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Producto } from '../../models/producto.model';
import { IconoComponent } from '../icono/icono.component';
import { EstrellasComponent } from '../estrellas/estrellas.component';

const TEXTO_OPCION: Record<string, string> = {
  talla: 'Elige talla',
  numero: 'Elige número',
  version: 'Elige versión',
  presentacion: 'Elige presentación',
  digital: 'Elige monto'
};

@Component({
  selector: 'app-tarjeta-producto',
  imports: [RouterLink, CurrencyPipe, IconoComponent, EstrellasComponent],
  templateUrl: './tarjeta-producto.component.html',
  styleUrl: './tarjeta-producto.component.css'
})
export class TarjetaProductoComponent {
  producto = input.required<Producto>();
  favorito = input<boolean>(false);

  descuento = computed(() => {
    const p = this.producto();
    return p.precioAnterior ? Math.round((1 - p.precio / p.precioAnterior) * 100) : 0;
  });

  textoOpcion = computed(() => TEXTO_OPCION[this.producto().tipo] ?? '');
}
