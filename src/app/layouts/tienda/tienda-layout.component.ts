import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from '../../shared/encabezado/encabezado.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-tienda-layout',
  imports: [RouterOutlet, EncabezadoComponent, FooterComponent],
  template: `
    <a class="saltar" href="#contenido">Saltar al contenido</a>
    <app-encabezado />
    <main id="contenido"><router-outlet /></main>
    <app-footer />
  `,
  styles: [`
    main { min-height: 60vh; }
    .saltar { position: absolute; left: -9999px; top: 8px; z-index: 200; background: var(--primario); color: var(--texto-inv); padding: 10px 16px; }
    .saltar:focus { left: 8px; }
  `]
})
export class TiendaLayoutComponent {}
