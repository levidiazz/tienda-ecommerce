import { Component } from '@angular/core';
import { MigasComponent } from '../../../shared/migas/migas.component';

@Component({
  selector: 'app-ayuda',
  imports: [MigasComponent],
  template: `
    <div class="contenedor pagina angosto">
      <app-migas [migas]="migas" />
      <h1 class="titulo-1">Ayuda</h1>
      @for (p of preguntas; track p.pregunta) {
        <details>
          <summary>{{ p.pregunta }}</summary>
          <p class="texto-sec">{{ p.respuesta }}</p>
        </details>
      }
    </div>
  `,
  styles: [`
    .angosto { max-width: 820px; }
    h1 { margin-bottom: 24px; }
    details { border-top: 1px solid var(--borde); padding: 18px 0; }
    details:last-of-type { border-bottom: 1px solid var(--borde); }
    summary { cursor: pointer; font-weight: 700; }
    details p { margin-top: 10px; }
  `]
})
export class AyudaComponent {
  readonly migas = [{ texto: 'Inicio', ruta: '/' }, { texto: 'Ayuda' }];
  readonly preguntas = [
    { pregunta: '¿Cuánto cuesta el envío?', respuesta: 'El envío estándar cuesta $99.00 a todo México y llega en 3 a 5 días hábiles. Las tarjetas de regalo digitales no pagan envío.' },
    { pregunta: '¿Cómo puedo pagar?', respuesta: 'Con tarjeta de crédito o débito (Visa, Mastercard y American Express) o con PayPal.' },
    { pregunta: '¿Puedo cambiar o devolver un producto?', respuesta: 'Sí, tienes 30 días a partir de la entrega. El producto debe estar sin uso y con su empaque.' },
    { pregunta: '¿Cómo rastreo mi pedido?', respuesta: 'En Mi cuenta › Mis pedidos verás la paquetería y el número de guía cuando tu pedido salga.' },
    { pregunta: '¿Quién puede comprar bebidas alcohólicas?', respuesta: 'Solo mayores de 18 años. Validamos tu fecha de nacimiento al pagar y se pide identificación al entregar.' }
  ];
}
