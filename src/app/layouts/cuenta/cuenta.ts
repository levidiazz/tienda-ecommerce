import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IconoComponent } from '../../shared/icono/icono.component';

@Component({
  selector: 'app-cuenta',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, IconoComponent],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css',
})
export default class Cuenta {
  readonly enlaces = [
    { texto: 'Mis pedidos', ruta: '/cuenta/pedidos', icono: 'recibo' },
    { texto: 'Mis direcciones', ruta: '/cuenta/direcciones', icono: 'ubicacion' },
    { texto: 'Favoritos', ruta: '/cuenta/favoritos', icono: 'corazon' },
    { texto: 'Mis reseñas', ruta: '/cuenta/resenas', icono: 'estrella' },
    { texto: 'Datos de la cuenta', ruta: '/cuenta/datos', icono: 'usuario' }
  ];
}
