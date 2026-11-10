import { EstadoPedido } from '../models/producto.model';

export interface PedidoAdmin {
  numero: string;
  cliente: string;
  correo: string;
  fecha: string;
  productos: number;
  total: number;
  metodo: string;
  estado: EstadoPedido;
  estadoTexto: string;
}

export const PEDIDOS_ADMIN: PedidoAdmin[] = [
  { numero: '000006', cliente: 'Carlos Ramírez López', correo: 'carlos@correo.com', fecha: '13 oct 2026', productos: 4, total: 14046, metodo: 'Visa ···· 4242', estado: 'pagado', estadoTexto: 'Pagado' },
  { numero: '000005', cliente: 'Carlos Ramírez López', correo: 'carlos@correo.com', fecha: '02 oct 2026', productos: 1, total: 998, metodo: 'PayPal', estado: 'enviado', estadoTexto: 'Enviado' },
  { numero: '000004', cliente: 'Ana Martínez Cruz', correo: 'ana.martinez@correo.com', fecha: '01 oct 2026', productos: 2, total: 1197, metodo: 'Mastercard ···· 5100', estado: 'pendiente', estadoTexto: 'Pendiente' },
  { numero: '000003', cliente: 'Luis Hernández Ruiz', correo: 'luis.hdz@correo.com', fecha: '30 sep 2026', productos: 1, total: 599, metodo: 'Visa ···· 1881', estado: 'cancelado', estadoTexto: 'Cancelado' },
  { numero: '000002', cliente: 'María José Santiago', correo: 'majo.santiago@correo.com', fecha: '29 sep 2026', productos: 3, total: 2347, metodo: 'PayPal', estado: 'entregado', estadoTexto: 'Entregado' },
  { numero: '000001', cliente: 'Carlos Ramírez López', correo: 'carlos@correo.com', fecha: '28 sep 2026', productos: 2, total: 13347, metodo: 'Visa ···· 4242', estado: 'entregado', estadoTexto: 'Entregado' }
];

export const PROVEEDORES = [
  { nombre: 'Textiles Oaxaca', contacto: 'Rosa Jiménez', correo: 'ventas@textilesoaxaca.mx', telefono: '951 200 1100', productos: 2, activo: true },
  { nombre: 'TecnoDistribuidora', contacto: 'Jorge Salinas', correo: 'contacto@tecnodistribuidora.mx', telefono: '55 4120 9988', productos: 4, activo: true },
  { nombre: 'Calzado del Bajío', contacto: 'Patricia León', correo: 'pedidos@calzadobajio.mx', telefono: '477 310 2020', productos: 1, activo: true },
  { nombre: 'Casa Hogar Mayoreo', contacto: 'Fernando Ortiz', correo: 'hola@casahogar.mx', telefono: '33 3615 7070', productos: 1, activo: true },
  { nombre: 'Productores de Oaxaca', contacto: 'Margarito Vásquez', correo: 'ventas@productoresoax.mx', telefono: '951 515 3030', productos: 2, activo: true },
  { nombre: 'Regalos Digitales MX', contacto: 'Sofía Treviño', correo: 'soporte@regalosdigitales.mx', telefono: '81 8340 1212', productos: 1, activo: false }
];

export const USUARIOS = [
  { nombre: 'Admin Principal', iniciales: 'AP', correo: 'admin@tienda.mx', rol: 'Administrador', alta: '01 ago 2026', pedidos: 0, activo: true },
  { nombre: 'Carlos Ramírez López', iniciales: 'CR', correo: 'carlos@correo.com', rol: 'Cliente', alta: '15 sep 2026', pedidos: 3, activo: true },
  { nombre: 'Ana Martínez Cruz', iniciales: 'AM', correo: 'ana.martinez@correo.com', rol: 'Cliente', alta: '20 sep 2026', pedidos: 1, activo: true },
  { nombre: 'Luis Hernández Ruiz', iniciales: 'LH', correo: 'luis.hdz@correo.com', rol: 'Cliente', alta: '22 sep 2026', pedidos: 1, activo: false },
  { nombre: 'María José Santiago', iniciales: 'MS', correo: 'majo.santiago@correo.com', rol: 'Cliente', alta: '25 sep 2026', pedidos: 1, activo: true }
];

export const PAGOS = [
  { referencia: 'AUT-583921', pedido: '000006', fecha: '13 oct 2026 10:43', metodo: 'Tarjeta', detalle: 'Visa ···· 4242', monto: 14046, estado: 'Aprobado', clase: 'entregado' },
  { referencia: 'PAYID-9KQ21', pedido: '000005', fecha: '02 oct 2026 18:10', metodo: 'PayPal', detalle: 'carlos@correo.com', monto: 998, estado: 'Aprobado', clase: 'entregado' },
  { referencia: 'AUT-PEND-77', pedido: '000004', fecha: '01 oct 2026 12:05', metodo: 'Tarjeta', detalle: 'Mastercard ···· 5100', monto: 1197, estado: 'Pendiente', clase: 'pendiente' },
  { referencia: 'RCH-000051', pedido: '000003', fecha: '30 sep 2026 09:31', metodo: 'Tarjeta', detalle: 'Visa ···· 1881', monto: 599, estado: 'Rechazado', clase: 'cancelado' },
  { referencia: 'PAYID-7TR90', pedido: '000002', fecha: '29 sep 2026 16:22', metodo: 'PayPal', detalle: 'majo.santiago@correo.com', monto: 2347, estado: 'Aprobado', clase: 'entregado' }
];

export const RESENAS_ADMIN = [
  { producto: 'Playera bordada Oaxaca', autor: 'Carlos Ramírez', calificacion: 5, titulo: 'Excelente calidad', fecha: '05 oct 2026', estado: 'Publicada', clase: 'entregado' },
  { producto: 'Café de Oaxaca molido', autor: 'Ana Martínez', calificacion: 4, titulo: 'Muy buen aroma', fecha: '03 oct 2026', estado: 'Publicada', clase: 'entregado' },
  { producto: 'Audífonos Bluetooth', autor: 'Luis Hernández', calificacion: 2, titulo: 'Se escuchan bajito', fecha: '02 oct 2026', estado: 'Pendiente', clase: 'pendiente' },
  { producto: 'Tenis urbanos', autor: 'María José Santiago', calificacion: 1, titulo: 'Contenido ofensivo', fecha: '01 oct 2026', estado: 'Oculta', clase: 'cancelado' }
];
