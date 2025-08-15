import { Component, OnInit } from '@angular/core';
import { Anotacao } from '../anotacao';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { DatabaseService } from '../services/database.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule, NgClass, RouterLink],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css',
})
export class EditarComponent implements OnInit {
  constructor(
    private dbDatabase: DatabaseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  anotacao!: Anotacao;
  larguraAnotacao(): string {
    return this.anotacao.texto.length <= 50 ? 'anot_p' : 'anot_g';
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dbDatabase.buscarPorID(parseInt(id!)).subscribe((anotacaoRecebida) => {
      this.anotacao = anotacaoRecebida;
      console.log('chegou!');
    });
  }
  editarAnotacao(): void {
    this.dbDatabase.editar(this.anotacao).subscribe(() => {
      alert(`anotação ${this.anotacao.id} atualizada com sucesso!`);
      this.router.navigate(['/memoteca/painel']);
    });
  }
}
