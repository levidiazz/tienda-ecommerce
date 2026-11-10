import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IconoComponent } from '../../shared/icono/icono.component';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, IconoComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {
  menuAbierto = signal(false);

  readonly enlaces = [
    { texto: 'Dashboard', ruta: '/admin/dashboard', icono: 'tablero' },
    { texto: 'Productos', ruta: '/admin/productos', icono: 'caja' },
    { texto: 'Categorías', ruta: '/admin/categorias', icono: 'etiqueta' },
    { texto: 'Proveedores', ruta: '/admin/proveedores', icono: 'camion' },
    { texto: 'Pedidos', ruta: '/admin/pedidos', icono: 'recibo' },
    { texto: 'Pagos', ruta: '/admin/pagos', icono: 'tarjeta' },
    { texto: 'Usuarios', ruta: '/admin/usuarios', icono: 'usuarios' },
    { texto: 'Reseñas', ruta: '/admin/resenas', icono: 'chat' }
  ];
}
