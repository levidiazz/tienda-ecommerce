import { Routes } from '@angular/router';
const TIENDA = ' · Tienda';

export const RUTAS_INICIO: Routes = [
  { path: '', pathMatch: 'full', title: 'Inicio' + TIENDA, loadComponent: () => import('../pages/tienda/inicio/inicio.component').then(m => m.InicioComponent) },
  { path: 'ayuda', title: 'Ayuda' + TIENDA, loadComponent: () => import('../pages/tienda/ayuda/ayuda.component').then(m => m.AyudaComponent) },
  { path: 'cuenta/iniciar-sesion', title: 'Iniciar sesión' + TIENDA, loadComponent: () => import('../pages/cuenta/iniciar-sesion/iniciar-sesion.component').then(m => m.IniciarSesionComponent) },
  { path: 'cuenta/registro', title: 'Crear cuenta' + TIENDA, loadComponent: () => import('../pages/cuenta/registro/registro.component').then(m => m.RegistroComponent) },
  { path: 'cuenta/recuperar', title: 'Recuperar contraseña' + TIENDA, loadComponent: () => import('../pages/cuenta/recuperar/recuperar.component').then(m => m.RecuperarComponent) }
];
