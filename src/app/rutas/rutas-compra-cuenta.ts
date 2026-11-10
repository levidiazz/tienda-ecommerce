import { Routes } from '@angular/router';

const TIENDA = ' · Tienda';

export const RUTAS_COMPRA_CUENTA: Routes = [
  {
    path: 'checkout/direccion',
    title: 'Dirección de envío' + TIENDA,
    loadComponent: () => import('../pages/compra/checkout-direccion/checkout-direccion')
  },
  {
    path: 'checkout/pago',
    title: 'Método de pago' + TIENDA,
    loadComponent: () => import('../pages/compra/checkout-pago/checkout-pago')
  },
  {
    path: 'checkout/confirmar',
    title: 'Confirmar pedido' + TIENDA,
    loadComponent: () => import('../pages/compra/checkout-confirmar/checkout-confirmar')
  },
  {
    path: 'pago/procesando',
    title: 'Procesando pago' + TIENDA,
    loadComponent: () => import('../pages/compra/pago-procesando/pago-procesando')
  },
  {
    path: 'pago/aprobado',
    title: 'Pago aprobado' + TIENDA,
    loadComponent: () => import('../pages/compra/pago-aprobado/pago-aprobado')
  },
  {
    path: 'pago/rechazado',
    title: 'Pago rechazado' + TIENDA,
    loadComponent: () => import('../pages/compra/pago-rechazado/pago-rechazado')
  },
  {
    path: 'cuenta',
    loadComponent: () => import('../layouts/cuenta/cuenta'),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'pedidos' },
      {
        path: 'pedidos',
        title: 'Mis pedidos' + TIENDA,
        loadComponent: () => import('../pages/cuenta/pedidos/pedidos')
      },
      {
        path: 'pedidos/:numero',
        title: 'Detalle del pedido' + TIENDA,
        loadComponent: () => import('../pages/cuenta/pedido-detalle/pedido-detalle')
      },
      {
        path: 'direcciones',
        title: 'Mis direcciones' + TIENDA,
        loadComponent: () => import('../pages/cuenta/direcciones/direcciones')
      },
      {
        path: 'favoritos',
        title: 'Mis favoritos' + TIENDA,
        loadComponent: () => import('../pages/cuenta/favoritos/favoritos')
      },
      {
        path: 'resenas',
        title: 'Mis reseñas' + TIENDA,
        loadComponent: () => import('../pages/cuenta/resenas/resenas')
      },
      {
        path: 'datos',
        title: 'Mis datos' + TIENDA,
        loadComponent: () => import('../pages/cuenta/datos/datos')
      }
    ]
  }
];
