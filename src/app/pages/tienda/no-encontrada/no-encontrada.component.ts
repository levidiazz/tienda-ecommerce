import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-no-encontrada',
  imports: [RouterLink],
  template: `
    <section class="contenedor pagina error-404" aria-labelledby="titulo-404">
      <p class="codigo" aria-hidden="true">404</p>
      <h1 id="titulo-404" class="titulo-1">No encontramos esta página</h1>
      <p class="texto-sec">Puede que el producto ya no exista o que el enlace esté mal escrito.</p>
      <a routerLink="/" class="btn btn-primario">Ir al inicio</a>
    </section>
  `,
  styles: [`
    .error-404 { display: flex; flex-direction: column; align-items: center; gap: 14px; text-align: center; padding-top: 80px; padding-bottom: 96px; }
    .codigo { font-family: var(--f-titulo); font-size: 96px; font-weight: 700; letter-spacing: .06em; line-height: 1; }
  `]
})
export class NoEncontradaComponent {}
