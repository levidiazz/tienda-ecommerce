import { Component, HostListener, input, output } from '@angular/core';
import { IconoComponent } from '../icono/icono.component';

let consecutivo = 0;

@Component({
  selector: 'app-modal',
  imports: [IconoComponent],
  template: `
    <div class="modal-fondo" (click)="cerrar.emit()">
      <section class="modal" role="dialog" aria-modal="true" [attr.aria-labelledby]="idTitulo" [style.max-width.px]="ancho()" (click)="$event.stopPropagation()">
        <header class="modal__cabecera">
          <div>
            <h2 class="titulo-2" [id]="idTitulo">{{ titulo() }}</h2>
            @if (subtitulo()) {
              <p class="pequeno texto-sec">{{ subtitulo() }}</p>
            }
          </div>
          <button type="button" class="btn-icono" (click)="cerrar.emit()" aria-label="Cerrar ventana">
            <app-icono nombre="cerrar" />
          </button>
        </header>
        <ng-content />
      </section>
    </div>
  `
})
export class ModalComponent {
  titulo = input.required<string>();
  subtitulo = input<string>('');
  ancho = input<number>(620);
  cerrar = output<void>();
  readonly idTitulo = `titulo-modal-${++consecutivo}`;

  @HostListener('document:keydown.escape')
  alPresionarEscape(): void {
    this.cerrar.emit();
  }
}
