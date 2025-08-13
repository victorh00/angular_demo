import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent, CardImg } from '../memoteca/card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [RouterLink, CardComponent, NgFor],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css',
})
export class PainelComponent {
  listaAnotacaoes = [
    {
      id: '1',
      texto: 'texto 1',
      autor: 'autor1',
      modelo: 'modelo1',
      imgSrc: '',
      data: '2025-01-01',
    },
    {
      id: '2',
      texto: 'texto 2',
      autor: 'autor 2',
      modelo: 'modelo2',
      data: '2025-12-31',
    },
    {
      id: '3',
      texto: 'texto 3',
      autor: 'autor 3',
      modelo: 'modelo3',
      data: '2025-12-31',
    },
  ];
}
