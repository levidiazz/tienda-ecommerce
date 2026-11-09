import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconoComponent } from '../icono/icono.component';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, IconoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly anio = new Date().getFullYear();
}
