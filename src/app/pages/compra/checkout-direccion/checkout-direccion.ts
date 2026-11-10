import { signal, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PasosCheckout } from '../../../shared/pasos-checkout/pasos-checkout';
import { DIRECCIONES } from '../../../data/contenido';
import { IconoComponent } from '../../../shared/icono/icono.component';
import { FormularioDireccion } from '../../../shared/formulario-direccion/formulario-direccion';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { ResumenPedidoComponent } from '../../../shared/resumen-pedido/resumen-pedido.component';


@Component({
  selector: 'app-checkout-direccion',
  imports: [RouterLink, IconoComponent, PasosCheckout, ResumenPedidoComponent, ModalComponent, FormularioDireccion],
  templateUrl: './checkout-direccion.html',
  styleUrl: './checkout-direccion.css'
})
export default class CheckoutDireccion {
  direcciones = DIRECCIONES;
  formularioAbierto = signal(false);
}
