import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PEDIDOS_ADMIN } from '../../../data/admin';
import { IconoComponent } from '../../../shared/icono/icono.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, CurrencyPipe, IconoComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['../admin.css', './dashboard.component.css']
})
export class DashboardComponent {
  readonly pedidos = PEDIDOS_ADMIN.slice(0, 5);
  readonly ventas = [
    { dia: 'Lun', monto: 4200 },
    { dia: 'Mar', monto: 6100 },
    { dia: 'Mié', monto: 3800 },
    { dia: 'Jue', monto: 7400 },
    { dia: 'Vie', monto: 9800 },
    { dia: 'Sáb', monto: 14046 },
    { dia: 'Dom', monto: 5200 }
  ];
  readonly maximo = 14046;
  readonly masVendidos = [
    { nombre: 'Playera bordada Oaxaca', imagen: 'img/playera-bordada.jpg', unidades: 38 },
    { nombre: 'Café de Oaxaca molido', imagen: 'img/cafe.jpg', unidades: 31 },
    { nombre: 'Mouse inalámbrico', imagen: 'img/mouse.jpg', unidades: 24 },
    { nombre: 'Audífonos Bluetooth', imagen: 'img/audifonos.jpg', unidades: 17 }
  ];
  readonly stockBajo = [
    { nombre: 'Lámpara de escritorio LED', sku: 'HOG-002', stock: 0 },
    { nombre: 'Playera bordada Oaxaca · L', sku: 'ROPA-002-L', stock: 2 },
    { nombre: 'Tenis urbanos · 26', sku: 'CALZ-001-26', stock: 3 }
  ];
}
