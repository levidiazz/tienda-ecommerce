import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconoComponent } from '../../../shared/icono/icono.component';

@Component({
  selector: 'app-pago-rechazado',
  imports: [RouterLink, IconoComponent],
  templateUrl: './pago-rechazado.html',
  styleUrl: '../pago-resultado.css'
})
export default class PagoRechazado {}
