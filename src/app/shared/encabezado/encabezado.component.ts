import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconoComponent } from '../icono/icono.component';

interface EnlaceMenu {
  texto: string;
  ruta: string;
  parametros?: Record<string, string>;
  insignia?: string;
  tono?: string;
}

@Component({
  selector: 'app-encabezado',
  imports: [RouterLink, RouterLinkActive, IconoComponent],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css'
})
export class EncabezadoComponent {
  menuAbierto = signal(false);

  readonly opcionesActivo = { paths: 'exact', queryParams: 'exact', matrixParams: 'ignored', fragment: 'ignored' } as const;

  readonly enlaces: EnlaceMenu[] = [
    { texto: 'Inicio', ruta: '/' },
    { texto: 'Tienda', ruta: '/catalogo', insignia: 'Nuevo', tono: 'info' },
    { texto: 'Ropa', ruta: '/catalogo', parametros: { categoria: 'ropa' } },
    { texto: 'Electrónica', ruta: '/catalogo', parametros: { categoria: 'electronica' } },
    { texto: 'Hogar', ruta: '/catalogo', parametros: { categoria: 'hogar' } },
    { texto: 'Alimentos', ruta: '/catalogo', parametros: { categoria: 'alimentos' } },
    { texto: 'Ofertas', ruta: '/ofertas', insignia: 'Sale', tono: 'acento' }
  ];

  alternarMenu(): void {
    this.menuAbierto.update((abierto) => !abierto);
  }

  cerrarMenu(): void {
    this.menuAbierto.set(false);
  }
}
