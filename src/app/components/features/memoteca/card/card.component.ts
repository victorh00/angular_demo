import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Anotacao } from '../anotacao';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  constructor(private router: Router) {}

  @Input() anotacao!: Anotacao;
  @Output() anotacaoEditada = new EventEmitter<number>();
  @Output() anotacaoExcluida = new EventEmitter<number>();

  larguraAnotacao(): string {
    return this.anotacao.texto.length <= 50 ? 'anot_p' : 'anot_g';
  }
}
