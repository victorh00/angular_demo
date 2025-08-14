import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Anotacao } from '../anotacao';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, CardComponent],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css',
})
export class PainelComponent {
  listaAnotacoes: Anotacao[] = [];

  constructor(private dbService: DatabaseService) {}

  ngOnInit(): void {
    /* ver também como implementar com signals ou effect() */
    /* o método subscribe executa função passada como argumento quando os dados estiverem disponíveis. */
    this.dbService.read().subscribe((listaRecebida) => {
      this.listaAnotacoes = listaRecebida;
    });
  }
}
