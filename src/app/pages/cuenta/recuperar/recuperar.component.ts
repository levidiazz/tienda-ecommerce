import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconoComponent } from '../../../shared/icono/icono.component';

@Component({
  selector: 'app-recuperar',
  imports: [RouterLink, IconoComponent],
  templateUrl: './recuperar.component.html',
  styleUrl: '../acceso.css'
})
export class RecuperarComponent {}
