import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Anotacao } from '../anotacao';

@Component({
  selector: 'app-criar',
  standalone: true,
  imports: [FormsModule, RouterLink, NgClass],
  templateUrl: './criar.component.html',
  styleUrl: './criar.component.css',
})
export class CriarComponent {
  anotacao: Anotacao = {
    id: '1',
    texto: 'texto de exemplo',
    autor: 'machado',
    modelo: 'modelo1',
    data: new Date().toISOString().split('T')[0],
  };
  criarAnotacao() {
    alert('nova anotacao criada');
  }
  cancelarAnotacao() {
    alert('anotação cancelada. campos reiniciados.');
    this.anotacao.autor = 'machado';
    this.anotacao.data = new Date().toISOString().split('T')[0];
    this.anotacao.texto = 'texto de exemplo';
    this.anotacao.modelo = 'modelo1';
  }
  larguraAnotacao(): string {
    return this.anotacao.texto.length <= 50 ? 'anot_p' : 'anot_g';
  }
}
