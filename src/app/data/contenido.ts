import { Direccion, ItemPedido, PedidoCliente, Producto, Resena } from '../models/producto.model';

export const PRODUCTOS: Producto[] = [
  {
    sku: 'ROPA-002', slug: 'playera-bordada', nombre: 'Playera bordada Oaxaca', categoria: 'Ropa', categoriaSlug: 'ropa', subcategoria: 'Playeras',
    proveedor: 'Textiles Oaxaca', imagenes: ['img/playera-bordada.jpg'], precio: 450, calificacion: 5, resenas: 12, tipo: 'talla', insignia: 'Hecho a mano en Oaxaca',
    descripcion: 'Playera de algodón 100 % con bordado artesanal hecho a mano por artesanas de Oaxaca. Cada pieza es única: los colores del bordado pueden variar ligeramente.',
    opciones: [{ valor: 'CH' }, { valor: 'M' }, { valor: 'G' }, { valor: 'XG', agotado: true }], disponibilidad: 'Talla M: 15 disponibles · XG agotada'
  },
  {
    sku: 'ROPA-001', slug: 'playera-negra', nombre: 'Playera algodón negra', categoria: 'Ropa', categoriaSlug: 'ropa', subcategoria: 'Playeras',
    proveedor: 'Textiles Oaxaca', imagenes: ['img/playera-negra.jpg'], precio: 199, calificacion: 3, resenas: 1, tipo: 'talla',
    descripcion: 'Playera 100 % algodón, corte regular y cuello redondo.',
    opciones: [{ valor: 'CH' }, { valor: 'M' }, { valor: 'G' }, { valor: 'XG' }], disponibilidad: 'Todas las tallas disponibles'
  },
  {
    sku: 'ELEC-003', slug: 'audifonos-bluetooth', nombre: 'Audífonos Bluetooth', categoria: 'Electrónica', categoriaSlug: 'electronica', subcategoria: 'Audio',
    proveedor: 'TecnoDistribuidora', imagenes: ['img/audifonos.jpg'], precio: 999, precioAnterior: 1299, calificacion: 5, resenas: 1, tipo: 'simple', insignia: 'Oferta −23 %',
    descripcion: 'Audífonos inalámbricos over-ear con Bluetooth 5.3, cancelación de ruido y hasta 30 horas de batería. Incluye cable USB-C y estuche de viaje.',
    disponibilidad: '40 disponibles · producto sin opciones'
  },
  {
    sku: 'ELEC-005', slug: 'celular-5g', nombre: 'Celular 6.5" 5G', categoria: 'Electrónica', categoriaSlug: 'electronica', subcategoria: 'Celulares',
    proveedor: 'TecnoDistribuidora', imagenes: ['img/celular.jpg', 'img/celular-azul.jpg'], precio: 7199, calificacion: 4, resenas: 6, tipo: 'version', insignia: 'Nuevo',
    descripcion: 'Pantalla de 6.5 pulgadas a 120 Hz, red 5G, cámara doble de 50 MP y batería de 5000 mAh. Cada combinación de color y capacidad tiene su propio stock.',
    colores: [{ valor: 'Negro' }, { valor: 'Azul' }],
    opciones: [{ valor: '128 GB' }, { valor: '256 GB', extra: '+$1,200' }, { valor: '512 GB', agotado: true }], disponibilidad: 'Negro · 256 GB: 4 disponibles'
  },
  {
    sku: 'ELEC-001', slug: 'laptop-ryzen-5', nombre: 'Laptop 14" Ryzen 5', categoria: 'Electrónica', categoriaSlug: 'electronica', subcategoria: 'Computación',
    proveedor: 'TecnoDistribuidora', imagenes: ['img/laptop.jpg'], precio: 12999, calificacion: 5, resenas: 1, tipo: 'simple',
    descripcion: 'Laptop ligera con procesador Ryzen 5, 16 GB de RAM y 512 GB SSD. Ideal para la escuela y el trabajo.', disponibilidad: '16 disponibles'
  },
  {
    sku: 'ELEC-002', slug: 'mouse-inalambrico', nombre: 'Mouse inalámbrico', categoria: 'Electrónica', categoriaSlug: 'electronica', subcategoria: 'Computación',
    proveedor: 'TecnoDistribuidora', imagenes: ['img/mouse.jpg'], precio: 249, calificacion: 4, resenas: 1, tipo: 'simple',
    descripcion: 'Mouse inalámbrico con receptor USB y 1600 DPI.', disponibilidad: '82 disponibles'
  },
  {
    sku: 'CALZ-001', slug: 'tenis-urbanos', nombre: 'Tenis urbanos', categoria: 'Calzado', categoriaSlug: 'calzado', subcategoria: 'Tenis',
    proveedor: 'Calzado del Bajío', imagenes: ['img/tenis.jpg'], precio: 899, calificacion: 4, resenas: 0, tipo: 'numero',
    descripcion: 'Tenis de lona con suela de hule, cómodos para todo el día.',
    opciones: [{ valor: '25' }, { valor: '26' }, { valor: '27' }, { valor: '28', agotado: true }], disponibilidad: 'Número 28 agotado'
  },
  {
    sku: 'HOG-002', slug: 'lampara-led', nombre: 'Lámpara de escritorio LED', categoria: 'Hogar', categoriaSlug: 'hogar', subcategoria: 'Iluminación',
    proveedor: 'Casa Hogar Mayoreo', imagenes: ['img/lampara.jpg'], precio: 349, calificacion: 4, resenas: 0, tipo: 'simple',
    descripcion: 'Lámpara LED con brazo ajustable y luz cálida o fría.', disponibilidad: 'Producto agotado', agotado: true
  },
  {
    sku: 'ALIM-001', slug: 'cafe-oaxaca', nombre: 'Café de Oaxaca molido', categoria: 'Alimentos y bebidas', categoriaSlug: 'alimentos', subcategoria: 'Café',
    proveedor: 'Productores de Oaxaca', imagenes: ['img/cafe.jpg'], precio: 180, calificacion: 5, resenas: 0, tipo: 'presentacion',
    descripcion: 'Café de altura de la Sierra Sur, tueste medio.',
    opciones: [{ valor: '250 g' }, { valor: '500 g', extra: '+$150' }, { valor: '1 kg', extra: '+$380' }], disponibilidad: 'Todas las presentaciones disponibles'
  },
  {
    sku: 'BEB-001', slug: 'mezcal-espadin', nombre: 'Mezcal espadín 750 ml', categoria: 'Alimentos y bebidas', categoriaSlug: 'alimentos', subcategoria: 'Mezcal',
    proveedor: 'Productores de Oaxaca', imagenes: ['img/mezcal.jpg'], precio: 650, calificacion: 5, resenas: 4, tipo: 'mayores', insignia: 'Solo mayores de 18',
    descripcion: 'Mezcal artesanal 100 % agave espadín, joven, 40 % Alc. Vol. El consumo de alcohol es solo para mayores de edad.', disponibilidad: '30 disponibles'
  },
  {
    sku: 'DIG-500', slug: 'tarjeta-regalo', nombre: 'Tarjeta de regalo digital', categoria: 'Tarjetas de regalo', categoriaSlug: 'regalos', subcategoria: 'Digitales',
    proveedor: 'Regalos Digitales MX', imagenes: ['img/tarjeta-regalo.jpg'], precio: 500, calificacion: 5, resenas: 3, tipo: 'digital', insignia: 'Producto digital',
    descripcion: 'El destinatario recibe un código por correo para usarlo al pagar. No genera costo de envío porque no requiere envío físico.',
    opciones: [{ valor: '$500' }, { valor: '$1,000' }], disponibilidad: 'Se envía por correo en minutos'
  }
];

export const CATEGORIAS = [
  { slug: 'ropa', nombre: 'Ropa', subcategorias: ['Playeras', 'Sudaderas'] },
  { slug: 'electronica', nombre: 'Electrónica', subcategorias: ['Computación', 'Audio', 'Celulares'] },
  { slug: 'calzado', nombre: 'Calzado', subcategorias: ['Tenis'] },
  { slug: 'hogar', nombre: 'Hogar', subcategorias: ['Cocina', 'Iluminación'] },
  { slug: 'alimentos', nombre: 'Alimentos y bebidas', subcategorias: ['Café', 'Mezcal'] },
  { slug: 'regalos', nombre: 'Tarjetas de regalo', subcategorias: ['Digitales'] }
];

export const PEDIDO: ItemPedido[] = [
  { nombre: 'Playera bordada Oaxaca', imagen: 'img/playera-bordada.jpg', detalle: 'Talla: M', cantidad: 1, precio: 450 },
  { nombre: 'Laptop 14" Ryzen 5', imagen: 'img/laptop.jpg', cantidad: 1, precio: 12999 },
  { nombre: 'Mouse inalámbrico', imagen: 'img/mouse.jpg', detalle: 'Color: negro', cantidad: 2, precio: 249 }
];

export const RESUMEN = { productos: 4, subtotal: 13947, envio: 99, total: 14046 };

export const DIRECCIONES: Direccion[] = [
  { alias: 'Casa', receptor: 'Carlos Ramírez López', calle: 'Av. Independencia 120, Centro', ciudad: 'Oaxaca de Juárez, Oax. · C.P. 68000', telefono: '951 100 0003', referencias: 'Frente al parque', principal: true },
  { alias: 'Oficina', receptor: 'Carlos Ramírez López', calle: 'Calle Pino Suárez 8, Centro', ciudad: 'Santa Lucía del Camino, Oax. · C.P. 71228', telefono: '951 100 0003', referencias: 'Entregar en recepción', principal: false }
];

export const RESENAS: Resena[] = [
  { autor: 'Carlos Ramírez', iniciales: 'CR', calificacion: 5, fecha: '10 oct 2026', titulo: 'Hermoso bordado', texto: 'La tela es suave y el bordado se ve todavía mejor en persona. La talla M me quedó perfecta.', compra: 'Talla comprada: M' },
  { autor: 'Ana García', iniciales: 'AG', calificacion: 5, fecha: '02 oct 2026', titulo: 'Regalo perfecto', texto: 'Se la regalé a mi mamá y le encantó. Llegó bien empacada y antes de lo esperado.', compra: 'Talla comprada: G' },
  { autor: 'José Santiago', iniciales: 'JS', calificacion: 4, fecha: '21 sep 2026', titulo: 'Bonita, pero talla justa', texto: 'Muy buena calidad. Recomiendo pedir una talla más si te gusta holgada.', compra: 'Talla comprada: CH' }
];

export const PEDIDOS_CLIENTE: PedidoCliente[] = [
  { numero: '000006', fecha: '13 oct 2026', estado: 'pagado', estadoTexto: 'Pagado', total: 14046, imagenes: ['img/laptop.jpg', 'img/mouse.jpg', 'img/playera-bordada.jpg'], productos: 'Laptop 14" Ryzen 5 · Mouse inalámbrico ×2 · Playera bordada Oaxaca (M)', nota: 'Estamos preparando tu envío.' },
  { numero: '000005', fecha: '02 oct 2026', estado: 'enviado', estadoTexto: 'En camino', total: 899, imagenes: ['img/tenis.jpg'], productos: 'Tenis urbanos (27)', nota: 'Estafeta · guía 7701 2233 4455 · llega 15 oct' },
  { numero: '000001', fecha: '28 sep 2026', estado: 'entregado', estadoTexto: 'Entregado', total: 13347, imagenes: ['img/laptop.jpg', 'img/mouse.jpg'], productos: 'Laptop 14" Ryzen 5 · Mouse inalámbrico', nota: 'Entregado el 1 oct 2026' }
];

export function buscarProducto(slug: string | null): Producto | undefined {
  return PRODUCTOS.find((p) => p.slug === slug);
}
