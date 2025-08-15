import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Anotacao } from '../anotacao';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-criar',
  standalone: true,
  imports: [FormsModule, RouterLink, NgClass],
  templateUrl: './criar.component.html',
  styleUrl: './criar.component.css',
})
export class CriarComponent {
  constructor(private dbService: DatabaseService, private router: Router) {}
  novaAnotacao: Anotacao = {
    texto:
      'sendo impossível entendê-lo, sei que se eu o entender é porque estou errando.',
    autor: 'clarice lispector',
    modelo: 'modelo2',
    data: new Date().toISOString().split('T')[0],
  };
  criarAnotacao() {
    this.dbService.criar(this.novaAnotacao).subscribe(() => {
      alert('nova anotacao criada!');
      this.router.navigate(['/memoteca/painel']);
    });
  }
  cancelarAnotacao() {
    alert('anotação cancelada. campos reiniciados.');
    this.novaAnotacao.autor = 'clarice lispector';
    this.novaAnotacao.data = new Date().toISOString().split('T')[0];
    this.novaAnotacao.texto =
      'sendo impossível entendê-lo, sei que se eu o entender é porque estou errando.';
    this.novaAnotacao.modelo = 'modelo2';
  }
  larguraAnotacao(): string {
    return this.novaAnotacao.texto.length <= 50 ? 'anot_p' : 'anot_g';
  }
}
