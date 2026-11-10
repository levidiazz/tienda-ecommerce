import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RESENAS } from '../../../data/contenido';
import { IconoComponent } from '../../../shared/icono/icono.component';
import { EstrellasComponent } from '../../../shared/estrellas/estrellas.component';

@Component({
  selector: 'app-mis-resenas',
  imports: [RouterLink, IconoComponent, EstrellasComponent],
  templateUrl: './resenas.html',
  styleUrl: './resenas.css'
})
export class MisResenasComponent {
  pestana = signal<'pendientes' | 'publicadas'>('pendientes');
  readonly pendientes = [
    { nombre: 'Laptop 14" Ryzen 5', imagen: 'img/laptop.jpg', slug: 'laptop-ryzen-5', entrega: 'Entregado el 1 oct 2026' },
    { nombre: 'Mouse inalámbrico', imagen: 'img/mouse.jpg', slug: 'mouse-inalambrico', entrega: 'Entregado el 1 oct 2026' }
  ];
  readonly publicadas = [
    { ...RESENAS[0], producto: 'Playera bordada Oaxaca', imagen: 'img/playera-bordada.jpg', slug: 'playera-bordada' },
    { ...RESENAS[1], producto: 'Café de Oaxaca molido', imagen: 'img/cafe.jpg', slug: 'cafe-oaxaca' }
  ];
}
