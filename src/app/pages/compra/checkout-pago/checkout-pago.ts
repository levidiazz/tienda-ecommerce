import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconoComponent } from '../../../shared/icono/icono.component';
import { PasosCheckout } from '../../../shared/pasos-checkout/pasos-checkout';
import { ResumenPedidoComponent } from '../../../shared/resumen-pedido/resumen-pedido.component';



@Component({
  selector: 'app-checkout-pago',
  imports: [RouterLink, IconoComponent, PasosCheckout, ResumenPedidoComponent],
  templateUrl: './checkout-pago.html',
  styleUrl: './checkout-pago.css'
})
export class CheckoutPago {}
