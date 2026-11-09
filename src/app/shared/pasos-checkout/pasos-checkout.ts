import { input, Component } from '@angular/core';
import { IconoComponent } from '../icono/icono.component';

@Component({
  selector: 'pasos-checkout',
  imports: [IconoComponent],
  template: `
    <ol>
      @for (paso of pasos; track paso; let i = $index) {
        <li [class.hecho]="i + 1 < actual()" [class.actual]="i + 1 === actual()">
          <span class="numero">
            @if (i + 1 < actual()) { <app-icono nombre="check" [tamano]="14" [grosor]="2.4" /> } @else { {{ i + 1 }} }
          </span>
          <span class="texto">{{ paso }}</span>
        </li>
        @if (i < pasos.length - 1) {
          <li class="linea" [class.hecho]="i + 1 < actual()" aria-hidden="true"></li>
        }
      }
    </ol>
  `,
  styleUrl: './pasos-checkout.css'
})
export class PasosCheckout {
  actual = input.required<number>();
  pasos = ['Dirección', 'Pago', 'Confirmar'];
}
