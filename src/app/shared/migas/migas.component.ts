import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Miga } from '../../models/producto.model';

@Component({
  selector: 'app-migas',
  imports: [RouterLink],
  template: `
    <nav aria-label="Ruta de navegación">
      <ol>
        @for (miga of migas(); track miga.texto; let ultima = $last) {
          <li>
            @if (miga.ruta && !ultima) {
              <a [routerLink]="miga.ruta">{{ miga.texto }}</a>
            } @else {
              <span [attr.aria-current]="ultima ? 'page' : null">{{ miga.texto }}</span>
            }
          </li>
        }
      </ol>
    </nav>
  `,
  styles: [`
    ol { list-style: none; margin: 0 0 20px; padding: 0; display: flex; flex-wrap: wrap; gap: 8px; font-size: 13px; color: var(--texto-sec); }
    li + li::before { content: '›'; margin-right: 8px; }
    a:hover { color: var(--texto); text-decoration: underline; }
  `]
})
export class MigasComponent {
  migas = input.required<Miga[]>();
}
