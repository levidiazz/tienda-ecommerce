import { Component, input } from '@angular/core';
import { IconoComponent } from '../icono/icono.component';

@Component({
  selector: 'app-estado-vacio',
  imports: [IconoComponent],
  template: `
    <section class="vacio">
      <span class="vacio__icono"><app-icono [nombre]="icono()" [tamano]="30" /></span>
      <h2 class="titulo-3">{{ titulo() }}</h2>
      <p class="texto-sec">{{ texto() }}</p>
      <ng-content />
    </section>
  `
})
export class EstadoVacioComponent {
  icono = input.required<string>();
  titulo = input.required<string>();
  texto = input<string>('');
}
