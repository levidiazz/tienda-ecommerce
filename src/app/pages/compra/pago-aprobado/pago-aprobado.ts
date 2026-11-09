import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RESUMEN } from '../../../data/contenido';
import { IconoComponent } from '../../../shared/icono/icono.component';

@Component({
  selector: 'pago-aprobado',
  imports: [RouterLink, CurrencyPipe, IconoComponent],
  templateUrl: './pago-aprobado.html',
  styleUrl: '../pago-resultado.css'

})
export class PagoAprobado {
  readonly resumen = RESUMEN;
}
