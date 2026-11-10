import { Component, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { DIRECCIONES, PEDIDO, RESUMEN } from '../../../data/contenido';
import { PEDIDOS_ADMIN, PedidoAdmin } from '../../../data/admin';
import { IconoComponent } from '../../../shared/icono/icono.component';
import { ModalComponent } from '../../../shared/modal/modal.component';

@Component({
  selector: 'app-admin-pedidos',
  imports: [CurrencyPipe, IconoComponent, ModalComponent],
  templateUrl: './pedidos.component.html',
  styleUrls: ['../admin.css', './pedidos.component.css']
})
export class AdminPedidosComponent {
  readonly pedidos = PEDIDOS_ADMIN;
  readonly productos = PEDIDO;
  readonly resumen = RESUMEN;
  readonly direccion = DIRECCIONES[0];
  readonly filtros = ['Todos', 'Pendiente', 'Pagado', 'Enviado', 'Entregado', 'Cancelado'];
  detalle = signal<PedidoAdmin | null>(null);
}
