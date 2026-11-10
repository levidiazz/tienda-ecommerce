import { Routes } from '@angular/router';

export const RUTAS_ADMIN: Routes = [
  {
    path: 'admin',
    loadComponent: () => import('../layouts/admin/admin-layout.component').then(m => m.AdminLayoutComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', title: 'Dashboard · Panel', loadComponent: () => import('../pages/admin/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'productos', title: 'Productos · Panel', loadComponent: () => import('../pages/admin/productos/productos.component').then(m => m.AdminProductosComponent) },
      { path: 'categorias', title: 'Categorías · Panel', loadComponent: () => import('../pages/admin/categorias/categorias.component').then(m => m.AdminCategoriasComponent) },
      { path: 'proveedores', title: 'Proveedores · Panel', loadComponent: () => import('../pages/admin/proveedores/proveedores.component').then(m => m.AdminProveedoresComponent) },
      { path: 'pedidos', title: 'Pedidos · Panel', loadComponent: () => import('../pages/admin/pedidos/pedidos.component').then(m => m.AdminPedidosComponent) },
      { path: 'pagos', title: 'Pagos · Panel', loadComponent: () => import('../pages/admin/pagos/pagos.component').then(m => m.AdminPagosComponent) },
      { path: 'usuarios', title: 'Usuarios · Panel', loadComponent: () => import('../pages/admin/usuarios/usuarios.component').then(m => m.AdminUsuariosComponent) },
      { path: 'resenas', title: 'Reseñas · Panel', loadComponent: () => import('../pages/admin/resenas/resenas.component').then(m => m.AdminResenasComponent) }
    ]
  }
];
