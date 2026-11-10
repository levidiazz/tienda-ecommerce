import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { PAGOS } from '../../../data/admin';
import { IconoComponent } from '../../../shared/icono/icono.component';

@Component({
  selector: 'app-admin-pagos',
  imports: [CurrencyPipe, IconoComponent],
  templateUrl: './pagos.component.html',
  styleUrl: '../admin.css'
})
export class AdminPagosComponent {
  readonly pagos = PAGOS;
}
