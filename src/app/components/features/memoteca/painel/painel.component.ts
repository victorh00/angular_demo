import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../memoteca/card/card.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [RouterLink, CardComponent, NgFor, NgIf],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css',
})
export class PainelComponent {
  listaAnotacoes = [];
}
