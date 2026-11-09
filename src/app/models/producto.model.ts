export type TipoProducto = 'simple' | 'talla' | 'numero' | 'version' | 'presentacion' | 'digital' | 'mayores';

export interface Opcion {
  valor: string;
  agotado?: boolean;
  extra?: string;
}

export interface Producto {
  sku: string;
  slug: string;
  nombre: string;
  categoria: string;
  categoriaSlug: string;
  subcategoria: string;
  proveedor: string;
  descripcion: string;
  imagenes: string[];
  precio: number;
  precioAnterior?: number;
  calificacion: number;
  resenas: number;
  tipo: TipoProducto;
  insignia?: string;
  opciones?: Opcion[];
  colores?: Opcion[];
  disponibilidad: string;
  agotado?: boolean;
  ruta?: string;
}

export interface ItemPedido {
  nombre: string;
  imagen: string;
  detalle?: string;
  cantidad: number;
  precio: number;
}

export interface Miga {
  texto: string;
  ruta?: string;
}

export interface Resena {
  autor: string;
  iniciales: string;
  calificacion: number;
  fecha: string;
  titulo: string;
  texto: string;
  compra: string;
}

export interface Direccion {
  alias: string;
  receptor: string;
  calle: string;
  ciudad: string;
  telefono: string;
  referencias: string;
  principal: boolean;
}

export type EstadoPedido = 'pendiente' | 'pagado' | 'enviado' | 'entregado' | 'cancelado';

export interface PedidoCliente {
  numero: string;
  fecha: string;
  estado: EstadoPedido;
  estadoTexto: string;
  total: number;
  imagenes: string[];
  productos: string;
  nota: string;
}
