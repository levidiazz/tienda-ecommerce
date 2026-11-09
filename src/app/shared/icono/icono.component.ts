import { Component, computed, input } from '@angular/core';

const ICONOS: Record<string, string[]> = {
  buscar: ['M18 11a7 7 0 1 1-14 0a7 7 0 0 1 14 0z', 'M21 21l-5-5'],
  usuario: ['M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2', 'M16 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0z'],
  corazon: ['M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 0 0 0-7.8z'],
  carrito: ['M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 7H6', 'M10 21a1 1 0 1 1-2 0a1 1 0 0 1 2 0z', 'M19 21a1 1 0 1 1-2 0a1 1 0 0 1 2 0z'],
  menu: ['M3 6h18', 'M3 12h18', 'M3 18h18'],
  abajo: ['M6 9l6 6 6-6'],
  derecha: ['M9 18l6-6-6-6'],
  izquierda: ['M15 18l-6-6 6-6'],
  mas: ['M12 5v14', 'M5 12h14'],
  menos: ['M5 12h14'],
  cerrar: ['M18 6L6 18', 'M6 6l12 12'],
  check: ['M20 6L9 17l-5-5'],
  ojo: ['M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z', 'M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0z'],
  basura: ['M3 6h18', 'M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6', 'M10 11v6', 'M14 11v6', 'M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2'],
  camion: ['M1 4h14v12H1z', 'M15 8h4l3 3v5h-7z', 'M8 18.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0z', 'M20.5 18.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0z'],
  candado: ['M5 11h14v10H5z', 'M8 11V7a4 4 0 0 1 8 0v4'],
  devolucion: ['M1 4v6h6', 'M3.5 15a9 9 0 1 0 2.1-9.4L1 10'],
  tarjeta: ['M2 5h20v14H2z', 'M2 10h20'],
  cartera: ['M21 12V7H5a2 2 0 0 1 0-4h14v4', 'M3 5v14a2 2 0 0 0 2 2h16v-5', 'M18 12a2 2 0 0 0 0 4h4v-4z'],
  ubicacion: ['M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z', 'M15 10a3 3 0 1 1-6 0a3 3 0 0 1 6 0z'],
  correo: ['M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z', 'M22 6l-10 7L2 6'],
  chat: ['M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'],
  'check-circulo': ['M22 11.1V12a10 10 0 1 1-5.9-9.1', 'M22 4L12 14l-3-3'],
  'x-circulo': ['M22 12a10 10 0 1 1-20 0a10 10 0 0 1 20 0z', 'M15 9l-6 6', 'M9 9l6 6'],
  info: ['M22 12a10 10 0 1 1-20 0a10 10 0 0 1 20 0z', 'M12 16v-4', 'M12 8h.01'],
  alerta: ['M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z', 'M12 9v4', 'M12 17h.01'],
  regla: ['M3 17L17 3l4 4L7 21z', 'M7 13l2 2', 'M10 10l2 2', 'M13 7l2 2'],
  recibo: ['M4 2v20l3-2 3 2 3-2 3 2 3-2 2 2V2l-2 2-3-2-3 2-3-2-3 2z', 'M8 8h8', 'M8 12h8', 'M8 16h5'],
  filtro: ['M22 3H2l8 9.5V19l4 2v-8.5z'],
  descargar: ['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'M7 10l5 5 5-5', 'M12 15V3'],
  recargar: ['M23 4v6h-6', 'M20.5 15a9 9 0 1 1-2.1-9.4L23 10'],
  casa: ['M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', 'M9 22V12h6v10'],
  editar: ['M12 20h9', 'M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z'],
  etiqueta: ['M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z', 'M7 7h.01'],
  regalo: ['M20 12v10H4V12', 'M2 7h20v5H2z', 'M12 22V7', 'M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z', 'M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z'],
  calendario: ['M3 4h18v18H3z', 'M16 2v4', 'M8 2v4', 'M3 10h18'],
  tablero: ['M3 3h7v9H3z', 'M14 3h7v5h-7z', 'M14 12h7v9h-7z', 'M3 16h7v5H3z'],
  caja: ['M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z', 'M3.3 7L12 12l8.7-5', 'M12 22V12'],
  usuarios: ['M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', 'M13 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0z', 'M23 21v-2a4 4 0 0 0-3-3.9', 'M16 3.1a4 4 0 0 1 0 7.8'],
  salir: ['M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4', 'M16 17l5-5-5-5', 'M21 12H9'],
  subir: ['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'M17 8l-5-5-5 5', 'M12 3v12'],
  imprimir: ['M6 9V2h12v7', 'M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2', 'M6 14h12v8H6z'],
  estrella: ['M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2-6.2 3.2L7 14.2 2 9.3l6.9-1z']
};

@Component({
  selector: 'app-icono',
  template: `
    <svg [attr.width]="tamano()" [attr.height]="tamano()" viewBox="0 0 24 24"
         [attr.fill]="relleno() ? 'currentColor' : 'none'" stroke="currentColor"
         [attr.stroke-width]="grosor()" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      @for (d of trazos(); track $index) {
        <path [attr.d]="d" />
      }
    </svg>
  `,
  styles: [`:host { display: inline-flex; line-height: 0; flex-shrink: 0; }`]
})
export class IconoComponent {
  nombre = input.required<string>();
  tamano = input<number>(20);
  grosor = input<number>(1.6);
  relleno = input<boolean>(false);
  trazos = computed(() => ICONOS[this.nombre()] ?? []);
}
