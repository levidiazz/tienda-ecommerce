import { Component, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PEDIDO } from '../../../data/contenido';
import { IconoComponent } from '../../../shared/icono/icono.component';
import { MigasComponent } from '../../../shared/migas/migas.component';
import { ResumenPedidoComponent } from '../../../shared/resumen-pedido/resumen-pedido.component';
import { ModalComponent } from '../../../shared/modal/modal.component';

@Component({
  selector: 'app-carrito',
  imports: [RouterLink, CurrencyPipe, IconoComponent, MigasComponent, ResumenPedidoComponent, ModalComponent],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  readonly productos = PEDIDO;
  readonly migas = [{ texto: 'Inicio', ruta: '/' }, { texto: 'Carrito' }];
  quitarAbierto = signal<string | null>(null);
}
