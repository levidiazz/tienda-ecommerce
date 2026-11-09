import { Component, computed, input } from '@angular/core';
import { IconoComponent } from '../icono/icono.component';

@Component({
  selector: 'app-estrellas',
  imports: [IconoComponent],
  template: `
    @for (llena of lista(); track $index) {
      <app-icono nombre="estrella" [tamano]="tamano()" [relleno]="llena" [class.vacia]="!llena" />
    }
    @if (texto()) {
      <span>{{ texto() }}</span>
    }
  `,
  styles: [`
    :host { display: inline-flex; align-items: center; gap: 2px; color: var(--estrella); }
    .vacia { color: #cfcfcf; }
    span { margin-left: 6px; font-size: 12px; color: var(--texto-sec); }
  `]
})
export class EstrellasComponent {
  valor = input<number>(0);
  tamano = input<number>(14);
  texto = input<string>('');
  lista = computed(() => [1, 2, 3, 4, 5].map((n) => n <= Math.round(this.valor())));
}
