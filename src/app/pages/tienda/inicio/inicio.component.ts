import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRODUCTOS } from '../../../data/contenido';
import { TarjetaProductoComponent } from '../../../shared/tarjeta-producto/tarjeta-producto.component';
import { IconoComponent } from '../../../shared/icono/icono.component';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink, TarjetaProductoComponent, IconoComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  readonly destacados = ['laptop-ryzen-5', 'audifonos-bluetooth', 'playera-bordada', 'lampara-led']
    .map((slug) => PRODUCTOS.find((p) => p.slug === slug))
    .filter((p) => p !== undefined);

  readonly mosaico = [
    { slug: 'ropa', nombre: 'Ropa', imagen: 'img/playera-bordada.jpg' },
    { slug: 'electronica', nombre: 'Electrónica', imagen: 'img/audifonos.jpg' },
    { slug: 'calzado', nombre: 'Calzado', imagen: 'img/tenis.jpg' },
    { slug: 'hogar', nombre: 'Hogar', imagen: 'img/lampara.jpg' }
  ];

  readonly beneficios = [
    { icono: 'camion', titulo: 'Envío a todo México', texto: 'Recibe en 3 a 5 días hábiles' },
    { icono: 'candado', titulo: 'Pago seguro', texto: 'Tarjeta de crédito/débito o PayPal' },
    { icono: 'devolucion', titulo: 'Cambios fáciles', texto: 'Tienes 30 días para devoluciones' }
  ];
}
