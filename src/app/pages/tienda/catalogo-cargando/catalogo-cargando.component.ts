import { Component } from '@angular/core';
import { MigasComponent } from '../../../shared/migas/migas.component';

@Component({
  selector: 'app-catalogo-cargando',
  imports: [MigasComponent],
  templateUrl: './catalogo-cargando.component.html',
  styleUrl: './catalogo-cargando.component.css'
})
export class CatalogoCargandoComponent {
  readonly migas = [{ texto: 'Inicio', ruta: '/' }, { texto: 'Tienda' }];
  readonly tarjetas = Array.from({ length: 6 }, (_, i) => i);
  readonly lineas = Array.from({ length: 5 }, (_, i) => i);
}
