import {  Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DIRECCIONES, PEDIDO, RESUMEN } from '../../../data/contenido';
import { IconoComponent } from '../../../shared/icono/icono.component';
import { PasosCheckout } from '../../../shared/pasos-checkout/pasos-checkout';


@Component({
  selector: 'app-checkout-confirmar',
  imports: [CurrencyPipe, RouterLink, IconoComponent, PasosCheckout],
  templateUrl: './checkout-confirmar.html',
  styleUrl: './checkout-confirmar.css'
})
export class CheckoutConfirmar {
  readonly productos = PEDIDO;
  readonly resumen = RESUMEN;
  readonly direccion = DIRECCIONES[0];
}
