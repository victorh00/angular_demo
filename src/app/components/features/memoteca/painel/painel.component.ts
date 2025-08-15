import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Anotacao } from '../anotacao';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, CardComponent],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css',
})
export class PainelComponent implements OnInit {
  listaAnotacoes: Anotacao[] = [];

  constructor(private dbService: DatabaseService) {}

  /* método on init é executado apenas uma vez ao iniciar a execução, antes de renderizar.
   * requer que a classe implemente a interface OnInit.
   */
  ngOnInit(): void {
    /* ver também como implementar com signals ou effect() */
    /* o método subscribe executa função passada como argumento quando os dados estiverem disponíveis. */
    this.atualizarPainel();
  }
  atualizarPainel(): void {
    this.dbService.buscarTodos().subscribe((listaRecebida) => {
      this.listaAnotacoes = listaRecebida;
    });
  }
}
