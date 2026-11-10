import { Routes } from '@angular/router';
const TIENDA = ' · Tienda';

export const RUTAS_TIENDA: Routes = [
  { path: 'catalogo', title: 'Catálogo' + TIENDA, loadComponent: () => import('../pages/tienda/catalogo/catalogo.component').then(m => m.CatalogoComponent) },
  { path: 'catalogo/cargando', title: 'Cargando catálogo' + TIENDA, loadComponent: () => import('../pages/tienda/catalogo-cargando/catalogo-cargando.component').then(m => m.CatalogoCargandoComponent) },
  { path: 'ofertas', title: 'Ofertas' + TIENDA, loadComponent: () => import('../pages/tienda/ofertas/ofertas.component').then(m => m.OfertasComponent) },
  { path: 'producto/:slug', title: 'Producto' + TIENDA, loadComponent: () => import('../pages/tienda/producto/producto.component').then(m => m.ProductoComponent) },
  { path: 'producto/:slug/resenas', title: 'Reseñas' + TIENDA, loadComponent: () => import('../pages/tienda/resenas-producto/resenas-producto.component').then(m => m.ResenasProductoComponent) },
  { path: 'estados', title: 'Estados de la interfaz' + TIENDA, loadComponent: () => import('../pages/tienda/estados/estados.component').then(m => m.EstadosComponent) },
  { path: 'carrito', title: 'Carrito' + TIENDA, loadComponent: () => import('../pages/compra/carrito/carrito.component').then(m => m.CarritoComponent) }
];
