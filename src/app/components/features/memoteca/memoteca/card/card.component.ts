import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  /* notação anotacao!: define 'assignment assertion' */
  @Input() anotacao!: {
    id: string;
    texto: string;
    autor: string;
    modelo: string;
    data: string;
  };
  larguraAnotacao(): string {
    return this.anotacao.texto.length <= 250 ? 'anot_p' : 'anot_g';
  }
}
