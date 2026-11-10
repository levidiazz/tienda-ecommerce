import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PEDIDOS_CLIENTE } from '../../../data/contenido';

@Component({
  selector: 'app-pedidos',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './pedidos.html',
  styleUrl: './pedidos.css'
})
export default class Pedidos {
  readonly pedidos = PEDIDOS_CLIENTE;
}
