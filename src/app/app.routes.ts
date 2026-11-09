import { Routes } from '@angular/router';
import { TiendaLayoutComponent } from './layouts/tienda/tienda-layout.component';
import { RUTAS_INICIO } from './rutas/rutas-inicio';
import { RUTAS_TIENDA } from './rutas/rutas-tienda';
import { RUTAS_COMPRA_CUENTA } from './rutas/rutas-compra-cuenta';
import { RUTAS_ADMIN } from './rutas/rutas-admin';

export const routes: Routes = [
  ...RUTAS_ADMIN,
  {
    path: '',
    component: TiendaLayoutComponent,
    children: [
      ...RUTAS_INICIO,
      ...RUTAS_TIENDA,
      ...RUTAS_COMPRA_CUENTA,
      { path: '**', title: 'Página no encontrada · Tienda', loadComponent: () => import('./pages/tienda/no-encontrada/no-encontrada.component').then(m => m.NoEncontradaComponent) }
    ]
  }
];
