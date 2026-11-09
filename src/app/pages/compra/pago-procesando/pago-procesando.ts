import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconoComponent } from '../../../shared/icono/icono.component';

@Component({
  selector: 'pago-procesando',
  imports: [RouterLink, IconoComponent],
  templateUrl: './pago-procesando.html',
  styleUrl: '../pago-resultado.css'
})
export class PagoProcesando {}
