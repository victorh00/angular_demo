import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Anotacao } from '../anotacao';
import { DatabaseService } from '../services/database.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  constructor(private dbService: DatabaseService, private router: Router) {}

  /* notação anotacao!: define 'assignment assertion' */
  // @Input() anotacao!: {
  //   id: string;
  //   texto: string;
  //   autor: string;
  //   modelo: string;
  //   data: string;
  // };
  @Input() anotacao!: Anotacao;
  @Output() anotacaoEditada = new EventEmitter<number>();
  @Output() anotacaoExcluida = new EventEmitter<number>();

  larguraAnotacao(): string {
    return this.anotacao.texto.length <= 50 ? 'anot_p' : 'anot_g';
  }

  /* componente filho "card" emite evento para componente pai "painel",
   * executando ação de atualização quando o evento é escutado.
   */
  editarAnotacao(anotacao: Anotacao) {
    this.dbService.editar(anotacao).subscribe(() => {
      alert(`card número ${anotacao.id} atualizado!`);
      this.anotacaoEditada.emit(anotacao.id);
    });
  }
}
