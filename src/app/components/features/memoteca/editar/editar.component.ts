import { Component } from '@angular/core';
import { Anotacao } from '../anotacao';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  anotacao!: Anotacao;
    larguraAnotacao(): string {
    return this.anotacao.texto.length <= 50 ? 'anot_p' : 'anot_g';
  }
}
