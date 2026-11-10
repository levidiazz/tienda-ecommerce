import { Component , input , computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DIRECCIONES, PEDIDO, PEDIDOS_CLIENTE, RESUMEN } from '../../../data/contenido';
import { IconoComponent } from '../../../shared/icono/icono.component';

@Component({
  selector: 'app-pedido-detalle',
  imports: [RouterLink, CurrencyPipe, IconoComponent],
  templateUrl: './pedido-detalle.html',
  styleUrl: './pedido-detalle.css'
})
export default class PedidoDetalleComponent {
  numero = input<string>('000006');
  readonly productos = PEDIDO;
  readonly resumen = RESUMEN;
  readonly direccion = DIRECCIONES[0];
  readonly seguimiento = [
    { titulo: 'Pedido realizado', fecha: '13 oct 2026 · 10:42', hecho: true },
    { titulo: 'Pago aprobado', fecha: '13 oct 2026 · 10:43', hecho: true },
    { titulo: 'En preparación', fecha: 'En curso', hecho: true },
    { titulo: 'Enviado', fecha: 'Pendiente', hecho: false },
    { titulo: 'Entregado', fecha: 'Estimado 16 – 18 oct', hecho: false }
  ];

  pedido = computed(() => PEDIDOS_CLIENTE.find(p => p.numero === this.numero()) ?? PEDIDOS_CLIENTE[0]);
}
