import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { IconoComponent } from '../icono/icono.component';
import { PEDIDO, RESUMEN } from '../../data/contenido';

@Component({
  selector: 'app-resumen-pedido',
  imports: [CurrencyPipe, IconoComponent],
  templateUrl: './resumen-pedido.component.html',
  styleUrl: './resumen-pedido.component.css'
})
export class ResumenPedidoComponent {
  mostrarProductos = input<boolean>(true);
  readonly productos = PEDIDO;
  readonly resumen = RESUMEN;
}
